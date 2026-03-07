import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Licenses from './components/Licenses';
import ContactSection from './components/ContactSection';
import ConsultancyForm from './components/ConsultancyForm';
import {
  WhyChoose,
  WhyItWorks,
  Highlights,
  Delivery,
  Dosage,
  FAQ,
} from './components/InfoSections';
import ReviewSection from './components/ReviewSection';
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
      <ConsultancyForm />
      <WhyChoose />
      <WhyItWorks />
      <Highlights />
      <Delivery />
      <Dosage />
      <ReviewSection />
      <FAQ />
      <BuySection />
      <Footer />
      <FloatingButtons />
    </>
  );
}

