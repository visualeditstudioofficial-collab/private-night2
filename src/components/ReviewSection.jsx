import { useEffect, useRef } from 'react';
import { productData } from '../data';
import styles from './ReviewSection.module.css';

export default function ReviewSection() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const { rating, count, summary, items } = productData.reviews;

  return (
    <section className={styles.section} ref={ref} id="reviews">
      <div className={`${styles.header} fade-up`}>
        <span className={styles.brandTag}>Ayurnath</span>
        <h2 className={styles.title}>Private Knight Combo Customer Reviews</h2>
        <div className={styles.stars}>★★★★★</div>
        <p className={styles.ratingText}>
          {rating} / 5 · Based on {count} reviews
        </p>
        <p className={styles.summary}>{summary}</p>
      </div>
      <div className={styles.grid}>
        {items.map((review, i) => (
          <div key={i} className={`${styles.card} fade-up`}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>{review.initials}</div>
              <div className={styles.metaInfo}>
                <h4 className={styles.name}>{review.name}</h4>
                <p className={styles.location}>📍 {review.location}</p>
              </div>
            </div>
            {review.category && (
              <span className={styles.category}>{review.category}</span>
            )}
            <div className={styles.starsSmall}>
              {'★'.repeat(review.rating)}
            </div>
            <p className={styles.text}>{review.text}</p>
            <span className={styles.date}>{review.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
