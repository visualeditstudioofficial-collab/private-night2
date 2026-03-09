'use client';

import { useEffect, useRef } from 'react';
import { productData } from '@/data';
import styles from '@/styles/InfoSections.module.css';

function useFadeUp(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref]);
}

export function WhyChoose() {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);
  return (
    <section className={styles.whySec} ref={ref}>
      <div className={`${styles.secHeader} fade-up`}>
        <span className={styles.tag}>Why Us</span>
        <h2 className={styles.title}>Why Choose Our Product?</h2>
      </div>
      <div className={styles.whyGrid}>
        {productData.whyChoose.map((c, i) => (
          <div key={i} className={`${styles.whyCard} fade-up`}>
            <span className={styles.wi}>{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhyItWorks() {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);
  return (
    <section className={styles.worksSec} ref={ref}>
      <div className={`${styles.secHeader} fade-up`}>
        <span className={styles.tag}>Science</span>
        <h2 className={styles.title}>Why It Works</h2>
      </div>
      <div className={styles.worksGrid}>
        {productData.whyItWorks.map(item => (
          <div key={item.num} className={`${styles.worksCard} fade-up`}>
            <div className={styles.wkNum}>{item.num}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Highlights() {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);
  return (
    <section className={styles.hlSec} ref={ref}>
      <div className={`${styles.secHeader} fade-up`}>
        <span className={`${styles.tag} ${styles.tagLight}`}>Features</span>
        <h2 className={`${styles.title} ${styles.titleWhite}`}>Product Highlights</h2>
      </div>
      <div className={styles.hlGrid}>
        {productData.highlights.map((h, i) => (
          <div key={i} className={`${styles.hlCard} fade-up`}>
            <span>{h.icon}</span>
            {h.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Delivery() {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);
  return (
    <section className={styles.deliverySec} ref={ref}>
      <div className={`${styles.secHeader} fade-up`}>
        <span className={styles.tag}>Delivery</span>
        <h2 className={styles.title}>From Our Factory to Your Door</h2>
      </div>
      <div className={styles.steps}>
        {productData.deliverySteps.map((s, i) => (
          <div key={i} className={`${styles.step} fade-up`}>
            <div className={styles.stepIco}>{s.icon}</div>
            <h4>{s.label}</h4>
            {i < productData.deliverySteps.length - 1 && <span className={styles.arrow}>→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Dosage() {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);
  return (
    <section className={styles.dosageSec} ref={ref}>
      <div className={`${styles.secHeader} fade-up`}>
        <span className={styles.tag}>How to Use</span>
        <h2 className={styles.title}>Dosage Instructions</h2>
      </div>
      <div className={styles.dosageGrid}>
        <div className={`${styles.dCard} fade-up`}>
          <div className={styles.di}>💊</div>
          <h3>Private Knight Capsules</h3>
          <p>{productData.dosage.capsules}</p>
        </div>
        <div className={`${styles.dCard} fade-up`}>
          <div className={styles.di}>🫙</div>
          <h3>Private Knight Oil</h3>
          <p>{productData.dosage.oil}</p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const ref = useRef<HTMLElement>(null);
  useFadeUp(ref);

  function toggle(e: React.MouseEvent<HTMLDivElement>) {
    const item = e.currentTarget.parentElement;
    item?.classList.toggle(styles.open);
  }

  return (
    <section className={styles.faqSec} ref={ref} id="faq">
      <div className={`${styles.secHeader} fade-up`}>
        <span className={styles.tag}>FAQ</span>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
      </div>
      <div className={styles.faqList}>
        {productData.faq.map((item, i) => (
          <div key={i} className={`${styles.faqItem} fade-up`}>
            <div className={styles.faqQ} onClick={toggle}>
              {item.q}
              <span className={styles.toggle}>+</span>
            </div>
            <div className={styles.faqA}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
