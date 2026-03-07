import { useState } from 'react';
import { productData } from '../data';
import hero1 from '../assets/hero-1.jpeg';
import hero2 from '../assets/hero-2.jpeg';
import hero3 from '../assets/hero-3.jpeg';
import hero4 from '../assets/hero-4.jpeg';
import capsulImg from '../assets/capsul.png';
import oilImg from '../assets/oil.png';
import ConsultancyForm from './ConsultancyForm';
import styles from './ProductSection.module.css';

const GALLERY = [hero1, hero2, hero3, hero4];
const LANG_LABELS = { en: 'English', hi: 'हिंदी', bn: 'বাংলা' };

export default function ProductSection() {
  const [activeImg, setActiveImg] = useState(0);
  const [lang, setLang] = useState('en');
  const langData = productData.languages[lang];

  return (
    <div className={styles.section}>
      {/* LEFT – Gallery */}
      <div className={styles.gallery}>
        <div className={styles.mainFrame}>
          <img src={GALLERY[activeImg]} alt="Private Knight Combo" className={styles.mainImg} />
        </div>
        <div className={styles.thumbs}>
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`${styles.thumb} ${activeImg === i ? styles.active : ''}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={img} alt={`View ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT – Info */}
      <div className={styles.info}>
        <ConsultancyForm />
        <span className={styles.brandPill}>🌿 {productData.brand}</span>
        <h1 className={styles.title}>Private Knight<br />Combo</h1>
        <p className={styles.tagline}>{productData.tagline}</p>

        {/* Language Tabs */}
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
            {/* Square image wrapper — 1:1 ratio, fully visible */}
            <div className={styles.comboImgWrap}>
              <img src={capsulImg} alt="Private Knight Capsules" className={styles.comboImg} />
            </div>
            <div className={styles.comboCardBody}>
              <h4>💊 Private Knight Capsules</h4>
              <p className={styles.qty}>30 Capsules</p>
              <ul>
                {langData.capsuleBenefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>

          <div className={styles.comboCard}>
            {/* Square image wrapper — 1:1 ratio, fully visible */}
            <div className={styles.comboImgWrap}>
              <img src={oilImg} alt="Private Knight Oil" className={styles.comboImg} />
            </div>
            <div className={styles.comboCardBody}>
              <h4>🫙 Private Knight Oil</h4>
              <p className={styles.qty}>50ml</p>
              <ul>
                {langData.oilBenefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Pills */}
        <div className={styles.whyRow}>
          {['100% Ayurvedic', 'Zero Chemicals', 'No Side Effects', 'Visible Results'].map((label, i) => (
            <span key={i} className={styles.wpill}>✅ {label}</span>
          ))}
        </div>

        {/* No price note */}
        <div className={styles.noPriceNote}>
          <p>💰 <strong>Special Price Available</strong> — Click <strong>"Buy Now"</strong> below to reveal your exclusive price &amp; place your order!</p>
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