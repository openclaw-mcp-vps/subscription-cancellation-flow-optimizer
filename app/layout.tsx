import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CancelShield — Optimize Subscription Cancellation Flows",
  description: "A/B test cancellation flows, collect exit surveys, and serve retention offers to reduce SaaS churn. Real-time analytics for product managers and growth teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bbc0693f-6c5d-4e6a-997c-ef2224bcb8d9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
