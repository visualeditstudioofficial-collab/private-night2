import Link from 'next/link';
import Image from 'next/image';
import { productData } from '@/data';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image src="/assets/logo.png" alt="Ayurnnath" className={styles.logo} width={150} height={50} />
          <p>Ayurnnath brings the power of ancient Ayurveda to modern men. Natural, safe, effective — trusted by over 1 lakh customers across India.</p>
          <p className={styles.contact}>📞 {productData.phone}</p>
          <p className={styles.contact}>🌐 {productData.website}</p>
        </div>
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/#licenses">Certifications</Link>
          <Link href="/#buySection">Order Now</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div className={styles.col}>
          <h4>Policies</h4>
          <Link href="/policies/privacy-policy">Privacy Policy</Link>
          <Link href="/policies/refund-policy">Return & Refund</Link>
          <Link href="/policies/refund-policy">Shipping Policy</Link>
          <Link href="/policies/terms-of-service">Terms & Conditions</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.branding}>
          <p>Ayurnath | Private Knight | Ayurvedic Intimate Wellness | www.ayurnnath.com</p>
        </div>
        <p>© 2025 Ayurnnath. All Rights Reserved.</p>
        <div className={styles.certs}>
          {productData.licenses.map(l => (
            <span key={l.id} className={styles.chip}>{l.title}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
