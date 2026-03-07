'use client';

import { useState } from 'react';
import { productData } from '@/data';
import styles from '@/styles/BuySection.module.css';

export default function BuySection() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', qty: '1 Combo' });
  const [submitted, setSubmitted] = useState(false);

  function handleInquiryClick() {
    setShowForm(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) { alert('Please fill in your name and phone number.'); return; }
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="buySection">
      <span className={styles.tag}>Free Consultancy</span>
      <h2 className={styles.title}>Ready to Transform Your Life?</h2>
      <p className={styles.sub}>100% Ayurvedic · Free Personalized Consultation Available</p>

      {/* Free Consultancy Tag */}
      <div className={styles.priceBox}>
        <div className={styles.priceBreakdown}>
          <span className={styles.freeConsultancy}>Free Consultancy</span>
        </div>
      </div>

      {/* Main CTA Button */}
      {!submitted && !showForm && (
        <button className={styles.buyBtn} onClick={handleInquiryClick}>
          📞 GET FREE CONSULTANCY NOW
        </button>
      )}

      {/* Order Form */}
      {showForm && !submitted && (
        <form className={styles.orderForm} onSubmit={handleSubmit}>
          <h3>✅ Request Free Consultation</h3>
          <div className={styles.field}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div className={styles.field}>
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 XXXXXXXXXX" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })} required />
          </div>
          <div className={styles.field}>
            <label>Full Address</label>
            <input type="text" placeholder="House No, Street, Area" value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })} />
          </div>
          <div className={styles.field}>
            <label>City & Pincode</label>
            <input type="text" placeholder="City — 400001" value={form.city}
              onChange={e => setForm({ ...form, city: e.target.value })} />
          </div>
          <div className={styles.field}>
            <label>Quantity Interested In</label>
            <select value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })}>
              <option>1 Combo</option>
              <option>2 Combos</option>
              <option>3 Combos</option>
            </select>
          </div>
          <button type="submit" className={styles.submitBtn}>🎯 SUBMIT FOR CONSULTATION</button>
        </form>
      )}

      {/* Success */}
      {submitted && (
        <div className={styles.success}>
          <span>✅</span>
          <h3>Request Submitted!</h3>
          <p>Thank you <strong>{form.name}</strong>! We will call you at <strong>{form.phone}</strong> for your free consultation.</p>
          <p>Our experts will guide you shortly.</p>
        </div>
      )}
    </section>
  );
}
