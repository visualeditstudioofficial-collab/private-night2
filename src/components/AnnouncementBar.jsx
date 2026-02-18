import { productData } from '../data';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const items = [...productData.badges, ...productData.badges];
  return (
    <div className={styles.bar}>
      <div className={styles.ticker}>
        {items.map((b, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.star}>✦</span> {b}
          </span>
        ))}
      </div>
    </div>
  );
}
