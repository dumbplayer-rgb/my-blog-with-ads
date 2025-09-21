import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 font-sans leading-relaxed">
        <header className="bg-white shadow py-6 mb-8">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600">My Blog</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4">{children}</main>
        <footer className="mt-16 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
