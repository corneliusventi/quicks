import { Lato } from "@next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={lato.className}>{children}</body>
    </html>
  );
}
