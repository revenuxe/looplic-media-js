import type { Metadata } from "next";
import AdminLeads from "@/legacy-pages/AdminLeads";

export const metadata: Metadata = {
  title: "Leads",
  description: "Admin leads.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLeadsRoutePage() {
  return <AdminLeads />;
}
