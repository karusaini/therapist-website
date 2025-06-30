import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Dr. Serena Blake | Therapist",
  description: "Private practice for therapy, based in Los Angeles.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Manual favicon link to ensure it works in all tabs */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
