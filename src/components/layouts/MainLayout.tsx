import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ChildrenProps } from "@/types/ChildrenProps";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
