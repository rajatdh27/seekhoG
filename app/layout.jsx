import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import AuthGuard from "./components/AuthGuard";
import { ChatProvider } from "./context/ChatContext";

export const metadata = {
  title: "sheekoG - Complete DSA & Backend Master Document",
  description: "Master data structures, algorithms, and backend development with interactive visualizations, detailed explanations, and 350+ interview problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-900 text-slate-100" suppressHydrationWarning>
        <ChatProvider>
          <Navbar />

          {/* PAGE CONTENT */}
          <AuthGuard>
            <main>{children}</main>
          </AuthGuard>

          <Footer />
          </ChatProvider>
      </body>
    </html>
  );
}
