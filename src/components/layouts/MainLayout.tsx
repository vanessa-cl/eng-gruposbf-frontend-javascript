import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MainLayoutProps } from "@/types/MainLayoutProps";

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
