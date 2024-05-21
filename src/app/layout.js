import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cartório de Caiçara",
  description: "Estamos comprometidos em facilitar seus processos legais e burocráticos, proporcionando tranquilidade e confiança em cada etapa.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
