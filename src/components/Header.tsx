import Image from 'next/image';
import Link from 'next/link';
import { productData } from '@/data';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/assets/logo.png" alt="Ayurnnath" width={150} height={50} priority />
        </Link>
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
