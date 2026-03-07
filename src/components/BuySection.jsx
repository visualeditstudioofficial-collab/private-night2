import { productData } from '../data';
import styles from './BuySection.module.css';

export default function BuySection() {
  return (
    <section className={styles.section} id="buySection">
      <span className={styles.tag}>Free Consultancy</span>
      <h2 className={styles.title}>Ready to Transform Your Life?</h2>
      <p className={styles.sub}>100% Ayurvedic · Free Personalized Consultation Available</p>

      <a href="#consultancy-form" className={styles.buyBtn}>
        📞 GET FREE CONSULTANCY NOW
      </a>

      <div className={styles.ctaButtons}>
        <a href={`tel:${productData.phone}`} className={styles.ctaBtn} rel="noreferrer">
          📞 Call Now
        </a>
        <a href={`https://wa.me/${productData.whatsapp}`} className={styles.ctaBtnWa} target="_blank" rel="noreferrer">
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}

