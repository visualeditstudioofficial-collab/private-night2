import { useState } from 'react';
import { productData } from '../data';
import ConsultancyForm from './ConsultancyForm';
import styles from './BuySection.module.css';

export default function BuySection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={styles.section} id="buySection">
      <span className={styles.tag}>Free Consultancy</span>
      <h2 className={styles.title}>Ready to Transform Your Life?</h2>
      <p className={styles.sub}>100% Ayurvedic · Free Personalized Consultation Available</p>

      {!showForm ? (
        <button className={styles.buyBtn} onClick={() => setShowForm(true)}>
          📞 GET FREE CONSULTANCY NOW
        </button>
      ) : (
        <div className={styles.formWrap}>
          <ConsultancyForm />
        </div>
      )}
    </section>
  );
}

