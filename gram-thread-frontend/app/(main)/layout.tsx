import AnouncementNavbar from "@/components/Header/AnouncementNavBar";
import NavBar from "@/components/Header/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnouncementNavbar />
  
      {children}
    </>
  );
}