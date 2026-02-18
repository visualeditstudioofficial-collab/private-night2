import { useState } from 'react';
import { productData } from '../data';
import styles from './BuySection.module.css';

export default function BuySection() {
  const [step, setStep] = useState(0); // 0=button, 1=price shown, 2=form shown
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', qty: '1 Combo — ₹1,799' });
  const [submitted, setSubmitted] = useState(false);

  function handleBuyClick() {
    if (step === 0) setStep(1);
    else if (step === 1) setStep(2);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) { alert('Please fill in your name and phone number.'); return; }
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="buySection">
      <span className={styles.tag}>Order Now</span>
      <h2 className={styles.title}>Ready to Transform Your Life?</h2>
      <p className={styles.sub}>100% Ayurvedic · Cash on Delivery · Free Shipping Across India</p>

      {/* Price Reveal */}
      {step >= 1 && (
        <div className={styles.priceBox}>
          <div className={styles.priceInner}>
            <span className={styles.priceNow}>₹{productData.pricing.discounted.toLocaleString()}</span>
            <span className={styles.priceWas}>MRP ₹{productData.pricing.original.toLocaleString()}</span>
            <span className={styles.priceSave}>
              YOU SAVE ₹{(productData.pricing.original - productData.pricing.discounted).toLocaleString()} ({productData.pricing.savePercent}% OFF)
            </span>
          </div>
          <span className={styles.codTag}>🚚 Cash on Delivery Available · Free Shipping</span>
        </div>
      )}

      {/* Main CTA Button */}
      {!submitted && step < 2 && (
        <button className={styles.buyBtn} onClick={handleBuyClick}>
          {step === 0 ? '🛒 BUY NOW — Reveal Price' : '📋 Fill Order Form Below'}
        </button>
      )}

      {/* Order Form */}
      {step === 2 && !submitted && (
        <form className={styles.orderForm} onSubmit={handleSubmit}>
          <h3>✅ Place Your COD Order</h3>
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
            <label>Quantity</label>
            <select value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })}>
              <option>1 Combo — ₹1,799</option>
              <option>2 Combos — ₹3,398</option>
              <option>3 Combos — ₹4,797</option>
            </select>
          </div>
          <button type="submit" className={styles.submitBtn}>🎯 CONFIRM COD ORDER</button>
        </form>
      )}

      {/* Success */}
      {submitted && (
        <div className={styles.success}>
          <span>✅</span>
          <h3>Order Confirmed!</h3>
          <p>Thank you <strong>{form.name}</strong>! We will call you at <strong>{form.phone}</strong> to confirm your COD order.</p>
          <p>Expected delivery: 5–7 business days.</p>
        </div>
      )}
    </section>
  );
}
