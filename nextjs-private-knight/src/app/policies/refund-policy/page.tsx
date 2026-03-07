import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Policy.module.css';

export default function RefundPolicy() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1>REFUND POLICY</h1>
          <p className={styles.updated}>Full policy available at: <a href="https://www.ayurnnath.com/policies/refund-policy">https://www.ayurnnath.com/policies/refund-policy</a></p>

          <p>We have a 7-day return policy for damaged, defective, or incorrect products.</p>

          <h2>Eligibility for Return</h2>
          <ul>
            <li>The return request must be raised within 7 days of receiving the product.</li>
            <li>The item must be unused, unopened, and in its original packaging.</li>
            <li>You must provide your Order Number and proof of purchase.</li>
          </ul>

          <h2>How to Start a Return</h2>
          <p>To initiate a return, email us at ayurnnath.23@gmail.com with your Order Number.</p>
          <p><strong>Return Address:</strong> ANPC Road, Ranaghat, West Bengal 741201, India</p>

          <h2>Damages & Issues</h2>
          <p>Please inspect your order upon delivery and contact us immediately if the item is defective or damaged.</p>

          <h2>Exceptions — Non-Returnable Items</h2>
          <ul>
            <li>Opened or used personal wellness products.</li>
            <li>Products purchased on sale or using discount codes.</li>
            <li>Gift cards or promotional items.</li>
          </ul>

          <h2>Refunds</h2>
          <p>Once approved, a full refund will be processed within 7–10 working days.</p>

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
