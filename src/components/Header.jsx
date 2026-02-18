import logo from '../assets/AyurnathLogo.png';
import { productData } from '../data';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
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
    </header>
  );
}
