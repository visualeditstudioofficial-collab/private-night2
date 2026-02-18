import { productData } from '../data';
import styles from './FloatingButtons.module.css';

export default function FloatingButtons() {
  return (
    <div className={styles.wrap}>
      <a href={`tel:${productData.phone}`} className={`${styles.btn} ${styles.call}`}>
        <span>📞</span>
        <span className={styles.label}>Call Now</span>
      </a>
      <a href={`https://wa.me/${productData.whatsapp}`} className={`${styles.btn} ${styles.wa}`} target="_blank" rel="noreferrer">
        <span>💬</span>
        <span className={styles.label}>WhatsApp</span>
      </a>
    </div>
  );
}
