import { productData } from '@/data';
import styles from '@/styles/ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Get in Touch</span>
        <h2 className={styles.title}>Have Questions? Contact Us Now</h2>
        <p className={styles.sub}>Our wellness experts are available to help you. Reach out instantly via call or WhatsApp.</p>
      </div>
      <div className={styles.grid}>
        <a href={`tel:${productData.phone}`} className={`${styles.card} ${styles.callCard}`}>
          <span className={styles.ico}>📞</span>
          <h3>Call Us Now</h3>
          <p>Speak directly with our team</p>
          <span className={styles.cta}>TAP TO CALL</span>
        </a>
        <a href={`https://wa.me/${productData.whatsapp}`} className={`${styles.card} ${styles.waCard}`} target="_blank" rel="noreferrer">
          <span className={styles.ico}>💬</span>
          <h3>WhatsApp Us</h3>
          <p>Chat with us anytime, instantly</p>
          <span className={styles.cta}>TAP TO CHAT</span>
        </a>
      </div>
    </section>
  );
}
