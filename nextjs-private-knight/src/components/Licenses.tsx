'use client';

import { useEffect, useRef } from 'react';
import { productData } from '@/data';
import styles from '@/styles/Licenses.module.css';

export default function Licenses() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref} id="licenses">
      <div className={`${styles.header} fade-up`}>
        <span className={styles.tag}>Certifications</span>
        <h2 className={styles.title}>Certified & Trusted</h2>
      </div>
      <div className={styles.grid}>
        {productData.licenses.map(lic => (
          <div key={lic.id} className={`${styles.card} fade-up`}>
            <span className={styles.icon}>{lic.icon}</span>
            <h3>{lic.title}</h3>
            <p>{lic.desc}</p>
            <span className={styles.badge}>{lic.title} CERTIFIED</span>
          </div>
        ))}
      </div>
    </section>
  );
}
