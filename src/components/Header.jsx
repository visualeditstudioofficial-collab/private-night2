import { useState } from 'react';
import logo from '../assets/logo.png';
import { productData } from '../data';
import styles from './Header.module.css';
import ConsultancyModal from './ConsultancyModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.headerWrap}>
      <div className={styles.consultancyStrip}>
        <span className={styles.stripLabel}>Free Consultancy</span>
        <span className={styles.stripText}>Contact Us for Private Knight</span>
        <span className={styles.stripSub}>📩 Free Personalized Consultation</span>
        <button onClick={() => setIsModalOpen(true)} className={styles.stripCta}>
          Submit for Free Consultancy
        </button>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Ayurnnath" />
        </div>
        <div className={styles.btns}>
          <a href={`tel:${productData.phone}`} className={`${styles.btn} ${styles.call}`}>
            📞 Call Now
          </a>
          <a href={`https://wa.me/${productData.whatsapp}`} className={`${styles.btn} ${styles.wa}`} target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>
      <ConsultancyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
