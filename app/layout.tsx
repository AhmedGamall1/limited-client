// import type { Metadata } from "next";
import { Space_Mono, Poppins } from "next/font/google";
import { Providers } from "./utils/Provider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen`}
        style={{
          backgroundImage: `url('/WhatsApp Image 2024-04-05 at 22.29.14_bfb58c2f.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Providers>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
                zIndex: 9999999,
              },
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}



