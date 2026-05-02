import type { Metadata } from "next";
import AdminDashboard from "@/legacy-pages/AdminDashboard";

export const metadata: Metadata = {
  title: "Leads Dashboard | Looplic Admin",
  description: "Admin leads dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboardRoutePage() {
  return <AdminDashboard />;
}
