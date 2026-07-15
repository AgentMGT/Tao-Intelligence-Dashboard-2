import "./globals.css";
export const metadata = { title: "TAO Intelligence", description: "Private Bittensor research dashboard" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
