import "./globals.css";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Accounty",
  description: "Calculate Loan and More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-row dark:bg-slate-900/90 h-screen">
        <SideBar />
        {children}
      </body>
    </html>
  );
}
