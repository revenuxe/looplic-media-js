import type { Metadata } from "next";
import AdminLogin from "@/legacy-pages/AdminLogin";

export const metadata: Metadata = {
  title: "Admin Login | Looplic",
  description: "Admin login portal.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginRoutePage() {
  return <AdminLogin />;
}
