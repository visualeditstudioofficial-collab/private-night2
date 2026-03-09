'use client';

import { useState } from 'react';
import Image from 'next/image';
import { productData } from '@/data';
import styles from '@/styles/ProductSection.module.css';

const GALLERY = [
  '/assets/hero-1.jpeg',
  '/assets/hero-2.jpeg',
  '/assets/hero-3.jpeg'
];
const LANG_LABELS: Record<string, string> = { en: 'English', hi: 'हिंदी', bn: 'বাংলা' };

export default function ProductSection() {
  const [activeImg, setActiveImg] = useState(0);
  const [lang, setLang] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  const langData = productData.languages[lang as keyof typeof productData.languages];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Inquiry: Private Knight Combo*%0A` +
      `-----------------------%0A` +
      `*Product:* Private Knight Combo%0A` +
      `*Type:* Free Consultancy / COD Inquiry%0A` +
      `-----------------------%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Address: ${formData.address}%0A` +
      `${formData.email ? `Email: ${formData.email}%0A` : ''}` +
      `-----------------------%0A` +
      `Please contact me for a free consultancy.`;

    window.open(`https://wa.me/${productData.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className={styles.section}>
      {/* LEFT – Gallery */}
      <div className={styles.gallery}>
        <div className={styles.mainFrame}>
          <Image src={GALLERY[activeImg]} alt="Private Knight Combo" className={styles.mainImg} fill priority />
        </div>
        <div className={styles.thumbs}>
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`${styles.thumb} ${activeImg === i ? styles.active : ''}`}
              onClick={() => setActiveImg(i)}
            >
              <Image src={img} alt={`View ${i + 1}`} fill />
            </div>
          ))}
        </div>

        {/* Form Directly Shown */}
        <div className={styles.checkoutBox}>
          <div className={styles.miniPrice}>
            <div className={styles.priceRow}>
              <span className={styles.discLarge}>Free Consultancy</span>
            </div>
          </div>

          <form className={styles.orderForm} onSubmit={handleOrder}>
            <div className={styles.formTitle}>Contact Us for Private Knight</div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={styles.inputField}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.inputField}
            />
            <textarea
              name="address"
              placeholder="Complete Delivery Address (Optional)"
              value={formData.address}
              onChange={handleInputChange}
              className={styles.inputArea}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address (Optional)"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.inputField}
            />

            <div className={styles.codIndicator}>
              <span>📩 Free Personalized Consultation</span>
            </div>

            <button type="submit" className={styles.submitOrderBtn}>
              Submit for Free Consultancy
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT – Info */}
      <div className={styles.info}>
        <span className={styles.brandPill}>🌿 {productData.brand}</span>
        <h1 className={styles.title}>Private Knight<br />Combo</h1>
        <p className={styles.tagline}>{productData.tagline}</p>

        {/* Language Tabs and Desc */}
        <div className={styles.langTabs}>
          {Object.keys(LANG_LABELS).map(l => (
            <button
              key={l}
              className={`${styles.ltab} ${lang === l ? styles.active : ''}`}
              onClick={() => setLang(l)}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>

        <div className={styles.langDesc}>
          <h3>{langData.title}</h3>
          <p className={styles.sub}>{langData.sub}</p>
          <p>{langData.body}</p>
        </div>

        {/* Combo Cards */}
        <div className={styles.comboGrid}>
          <div className={styles.comboCard}>
            <div className={styles.comboImgWrapper}>
              <Image src="/assets/PRIVATEKNIGHTCAPSULES.png" alt="Capsules" className={styles.comboImg} fill />
            </div>
            <h4>💊 Private Knight Capsules</h4>
            <p className={styles.qty}>30 Capsules</p>
            <ul>
              {langData.capsuleBenefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className={styles.comboCard}>
            <div className={styles.comboImgWrapper}>
              <Image src="/assets/PRIVATEKNIGHTOIL.png" alt="Oil" className={styles.comboImg} fill />
            </div>
            <h4>🫙 Private Knight Oil</h4>
            <p className={styles.qty}>50ml</p>
            <ul>
              {langData.oilBenefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>

        {/* Why Choose Pills */}
        <div className={styles.whyRow}>
          {['100% Ayurvedic', 'Zero Chemicals', 'No Side Effects', 'Visible Results'].map((text, i) => (
            <span key={i} className={styles.wpill}>✅ {text}</span>
          ))}
        </div>

        {/* Free Consultancy Section */}
        <div className={styles.priceReveal}>
          <div className={styles.priceInfo}>
            <span className={styles.discLarge}>Free Consultancy</span>
          </div>
          <p className={styles.orderNote}>⚡ Contact us now to get <strong>Free Consultation</strong> from our experts!</p>
        </div>

        {/* Contact Buttons */}
        <div className={styles.contactBig}>
          <a href={`tel:${productData.phone}`} className={`${styles.cbtn} ${styles.callBtn}`}>
            📞 Call Now
          </a>
          <a href={`https://wa.me/${productData.whatsapp}`} className={`${styles.cbtn} ${styles.waBtn}`} target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
