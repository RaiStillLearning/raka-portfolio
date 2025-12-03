import Navbar from "@/components/Navbar";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="border-t p-6 text-center">© 2025 Rakha Arkana</footer>
    </>
  );
}
