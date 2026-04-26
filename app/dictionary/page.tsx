import { NavigationComponent } from '@/components/NavigationComponent/navigation';
import Footer from "@/components/FooterComponent/footer";
import Header from "@/components/HeaderComponent/header";

export default function Dictionary() {
  return (
    <div>
      <Header/>
      <NavigationComponent/>
      <Footer/>
    </div>
  );
}