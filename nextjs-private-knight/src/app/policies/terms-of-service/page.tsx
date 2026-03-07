import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Policy.module.css';

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1>TERMS OF SERVICE</h1>
          <p className={styles.updated}>Full terms available at: <a href="https://www.ayurnnath.com/policies/terms-of-service">https://www.ayurnnath.com/policies/terms-of-service</a></p>

          <h2>Overview</h2>
          <p>Welcome to Ayurnath! By visiting or using our website, you agree to be bound by these Terms of Service.</p>

          <h2>Section 1 — Access & Account</h2>
          <p>By using our Services, you confirm that you are at least 18 years of age.</p>

          <h2>Section 2 — Our Products</h2>
          <p>Ayurnath&apos;s Private Knight products are Ayurvedic wellness formulations. They are not medicines and are not intended to diagnose, treat, cure, or prevent any disease.</p>

          <h2>Section 3 — Orders</h2>
          <p>When you place an order, you are making an offer to purchase. Ayurnath reserves the right to accept or decline any order.</p>

          <h2>Section 4 — Prices & Billing</h2>
          <p>Prices, discounts, and promotions are subject to change without notice.</p>

          <h2>Section 5 — Shipping & Delivery</h2>
          <p>All delivery timelines are estimates only and are not guaranteed.</p>

          <h2>Section 6 — Intellectual Property</h2>
          <p>All content on our website is the property of Ayurnath and is protected by applicable Indian intellectual property laws.</p>

          <h2>Section 7 — Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of India.</p>

          <h2>Contact Us</h2>
          <div className={styles.contactInfo}>
            <p><strong>Brand:</strong> Ayurnath</p>
            <p><strong>Email:</strong> ayurnnath.23@gmail.com</p>
            <p><strong>Website:</strong> <a href="https://www.ayurnnath.com">https://www.ayurnnath.com</a></p>
          </div>
          <p className={styles.signature}>— AYURNATH —</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
