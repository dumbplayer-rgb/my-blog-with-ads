import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A clean Next.js blog with AdSense",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-ADSENSE-CLIENT-ID"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <header className="py-6 text-center font-bold text-2xl">
            My Blog
          </header>
          {children}
          <footer className="mt-10 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} My Blog
            <div className="mt-4">
              {/* Footer Ad */}
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="YOUR-ADSENSE-CLIENT-ID"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script
                dangerouslySetInnerHTML={{
                  __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
                }}
              />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
