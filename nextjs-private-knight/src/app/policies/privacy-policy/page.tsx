import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Policy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1>PRIVACY POLICY</h1>
          <p className={styles.updated}>Last Updated: February 19, 2026</p>
          <p>Full policy available at: <a href="https://www.ayurnnath.com/policies/privacy-policy">https://www.ayurnnath.com/policies/privacy-policy</a></p>

          <p>Ayurnath operates the website https://www.ayurnnath.com and related services to provide you with a curated Ayurvedic wellness shopping experience (the &quot;Services&quot;). This Privacy Policy describes how we collect, use, and disclose your personal information. By using our Services, you acknowledge that you have read and understood this policy.</p>

          <h2>Personal Information We Collect</h2>
          <ul>
            <li>Contact details: name, address, billing/shipping address, phone number, email address.</li>
            <li>Financial information: payment card details, transaction records, and payment confirmations.</li>
            <li>Account information: username, password, preferences, and settings.</li>
            <li>Transaction information: items viewed, carted, purchased, returned, or cancelled.</li>
            <li>Communications: information you share when contacting customer support.</li>
            <li>Device & usage information: IP address, browser type, device identifiers, and navigation data.</li>
          </ul>

          <h2>How we Use Your Information</h2>
          <ul>
            <li>Process and fulfill your orders, including payment, shipping, and delivery.</li>
            <li>Send order confirmations, tracking updates, and service-related notifications.</li>
            <li>Respond to your queries and provide customer support.</li>
            <li>Send marketing communications (you can opt out at any time via unsubscribe link).</li>
            <li>Detect and prevent fraud or unauthorized activity.</li>
            <li>Comply with applicable Indian laws and legal obligations.</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <ul>
            <li>Courier partners (e.g., Delhivery, Blue Dart) — for order fulfillment only.</li>
            <li>Payment processors — to securely complete transactions.</li>
            <li>Our e-commerce platform (Shopify) — which hosts our store.</li>
            <li>Law enforcement or government bodies — only when required by Indian law.</li>
          </ul>
          <p>We do not sell or rent your personal information to any third party for marketing purposes.</p>

          <h2>Children&apos;s Privacy</h2>
          <p>Our Services are for adults (18+) only. We do not knowingly collect information from children under 18.</p>

          <h2>Data Security & Retention</h2>
          <p>We implement reasonable security measures to protect your personal information.</p>

          <h2>Your Rights</h2>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>

          <h2>Contact Us</h2>
          <div className={styles.contactInfo}>
            <p><strong>Brand:</strong> Ayurnath</p>
            <p><strong>Email:</strong> ayurnnath.23@gmail.com</p>
            <p><strong>Website:</strong> <a href="https://www.ayurnnath.com">https://www.ayurnnath.com</a></p>
            <p><strong>Address:</strong> ANPC Road, Ranaghat, West Bengal 741201, India</p>
          </div>
          <p className={styles.signature}>— AYURNATH —</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
