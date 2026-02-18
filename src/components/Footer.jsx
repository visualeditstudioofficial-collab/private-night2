import logo from '../assets/AyurnathLogo.png';
import { productData } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src={logo} alt="Ayurnnath" className={styles.logo} />
          <p>Ayurnnath brings the power of ancient Ayurveda to modern men. Natural, safe, effective — trusted by over 1 lakh customers across India.</p>
          <p className={styles.contact}>📞 {productData.phone}</p>
          <p className={styles.contact}>🌐 {productData.website}</p>
        </div>
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <a href="#">About Us</a>
          <a href="#licenses">Certifications</a>
          <a href="#buySection">Order Now</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={styles.col}>
          <h4>Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Return & Refund</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
      <div className={styles.bottom}>
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
