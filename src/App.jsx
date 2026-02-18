import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Licenses from './components/Licenses';
import ContactSection from './components/ContactSection';
import {
  WhyChoose,
  WhyItWorks,
  Highlights,
  Delivery,
  Dosage,
  FAQ,
} from './components/InfoSections';
import BuySection from './components/BuySection';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <ProductSection />
      <Licenses />
      <ContactSection />
      <WhyChoose />
      <WhyItWorks />
      <Highlights />
      <Delivery />
      <Dosage />
      <FAQ />
      <BuySection />
      <Footer />
      <FloatingButtons />
    </>
  );
}
