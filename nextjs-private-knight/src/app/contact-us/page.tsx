import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { productData } from '@/data';
import styles from '@/styles/Policy.module.css';

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1>Contact Us</h1>
          <p className={styles.updated}>We are here to help you with any queries or concerns.</p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <h2>Trade Name</h2>
              <p>{productData.brand}</p>
            </div>

            <div className={styles.contactItem}>
              <h2>Phone Number</h2>
              <p><a href={`tel:${productData.phone}`}>{productData.phone}</a></p>
            </div>

            <div className={styles.contactItem}>
              <h2>Email Address</h2>
              <p><a href="mailto:ayurnnath.23@gmail.com">ayurnnath.23@gmail.com</a></p>
            </div>

            <div className={styles.contactItem}>
              <h2>Physical Address</h2>
              <p>{productData.address}</p>
            </div>

            <div className={styles.contactItem}>
              <h2>Response Time</h2>
              <p>Within 24–48 working hours</p>
            </div>
          </div>

          <p className={styles.signature}>— AYURNATH —</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
