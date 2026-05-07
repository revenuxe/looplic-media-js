"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarClock,
  Eye,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Search,
  Trash2,
  Users,
  X,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

interface Lead {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  brand: string | null;
  message: string | null;
  created_at: string;
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const isSameDay = (date: string, compareTo: Date) => {
  const value = new Date(date);
  return (
    value.getFullYear() === compareTo.getFullYear() &&
    value.getMonth() === compareTo.getMonth() &&
    value.getDate() === compareTo.getDate()
  );
};

const isThisWeek = (date: string) => {
  const now = new Date();
  const value = new Date(date);
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);
  return value >= weekStart;
};

const AdminDashboard = () => {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    setIsRefreshing(true);
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) || []);
    setLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      fetchLeads();
    };

    checkAuth();
  }, [router]);

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return leads;

    return leads.filter((lead) =>
      [
        lead.full_name,
        lead.email,
        lead.phone,
        lead.project_type,
        lead.brand,
        lead.message,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [leads, search]);

  const todayCount = useMemo(() => {
    const today = new Date();
    return leads.filter((lead) => isSameDay(lead.created_at, today)).length;
  }, [leads]);

  const weekCount = useMemo(
    () => leads.filter((lead) => isThisWeek(lead.created_at)).length,
    [leads],
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead?")) return;

    setDeletingId(id);
    await supabase.from("leads").delete().eq("id", id);
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    if (selectedLead?.id === id) setSelectedLead(null);
    setDeletingId(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <span className="h-8 w-8 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEOHead title="Leads Dashboard | Media.X by Revenuxe Admin" description="Admin leads dashboard" keywords="admin" noIndex />
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-30 bg-primary text-primary-foreground shadow-lg">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <Users size={20} className="shrink-0" />
              <div className="min-w-0">
                <h1 className="truncate text-lg font-serif">Leads Dashboard</h1>
                <p className="text-xs text-primary-foreground/70">Media.X by Revenuxe admin</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={fetchLeads}
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors disabled:opacity-50"
                disabled={isRefreshing}
                title="Refresh leads"
              >
                <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                title="Log out"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-5 sm:py-6">
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <MetricCard icon={Users} label="Total leads" value={leads.length} />
            <MetricCard icon={CalendarClock} label="Today" value={todayCount} />
            <MetricCard icon={RefreshCw} label="This week" value={weekCount} />
          </section>

          <section className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold">Lead Inbox</h2>
              <p className="text-sm text-muted-foreground">Review and manage contact form submissions.</p>
            </div>
            <div className="relative w-full sm:max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search leads"
                className="w-full rounded-full border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-accent"
              />
            </div>
          </section>

          <section className="mt-4">
            {filteredLeads.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Users size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-lg font-serif">{leads.length === 0 ? "No leads yet" : "No matching leads"}</p>
                <p className="text-sm mt-1">
                  {leads.length === 0 ? "Form submissions will appear here." : "Try a different name, email, location, or timeline."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                {filteredLeads.map((lead, index) => (
                  <motion.article
                    key={lead.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className="bg-card border border-border rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold text-foreground">{lead.full_name}</h3>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">{lead.email}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground/70">{formatDate(lead.created_at)}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
                          title="View lead"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(lead.id)}
                          disabled={deletingId === lead.id}
                          className="p-2 rounded-full bg-destructive/5 hover:bg-destructive/10 text-destructive transition-colors disabled:opacity-40"
                          title="Delete lead"
                        >
                          {deletingId === lead.id ? (
                            <span className="block h-3.5 w-3.5 rounded-full border-2 border-destructive/30 border-t-destructive animate-spin" />
                          ) : (
                            <Trash2 size={15} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {lead.project_type && <Badge>{lead.project_type}</Badge>}
                      {lead.brand && <Badge>{lead.brand}</Badge>}
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>
        </main>

        <AnimatePresence>
          {selectedLead && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
              onClick={() => setSelectedLead(null)}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
              >
                <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
                  <h2 className="text-base font-serif">Lead Details</h2>
                  <button onClick={() => setSelectedLead(null)} className="rounded-full p-1 hover:bg-primary-foreground/10 transition-colors">
                    <X size={18} />
                  </button>
                </div>
                <div className="max-h-[65vh] space-y-3 overflow-y-auto p-5">
                  <DetailRow label="Full Name" value={selectedLead.full_name} />
                  <DetailRow label="Email" value={selectedLead.email} />
                  <DetailRow label="Phone" value={selectedLead.phone} />
                  <DetailRow label="Project Type" value={selectedLead.project_type} />
                  <DetailRow label="Brand" value={selectedLead.brand} />
                  <DetailRow label="Message" value={selectedLead.message} />
                  <DetailRow label="Submitted" value={formatDate(selectedLead.created_at)} />
                </div>
                <div className="grid grid-cols-1 gap-2 px-5 pb-5 sm:grid-cols-3">
                  <a href={`mailto:${selectedLead.email}`} className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
                    <Mail size={14} /> Email
                  </a>
                  {selectedLead.phone && (
                    <a href={`tel:${selectedLead.phone}`} className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted">
                      <Phone size={14} /> Call
                    </a>
                  )}
                  <button
                    onClick={() => handleDelete(selectedLead.id)}
                    className="flex items-center justify-center gap-2 rounded-full bg-destructive px-4 py-2.5 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 sm:col-auto"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const MetricCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
}) => (
  <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">{label}</p>
        <p className="mt-2 text-3xl font-serif text-foreground">{value}</p>
      </div>
      <span className="rounded-full bg-primary/5 p-3 text-primary">
        <Icon size={18} />
      </span>
    </div>
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-secondary/50 px-2 py-0.5 text-[10px] text-secondary-foreground">
    {children}
  </span>
);

const DetailRow = ({ label, value }: { label: string; value: string | null }) => (
  <div className="flex items-start justify-between gap-3 border-b border-border/50 py-1.5 last:border-0">
    <span className="shrink-0 text-xs text-muted-foreground">{label}</span>
    <span className="text-right text-sm font-medium text-foreground">{value || "-"}</span>
  </div>
);

export default AdminDashboard;
