'use client';

import Image from 'next/image';
import styles from '@/styles/IngredientsSection.module.css';

const IngredientsSection = () => {
  return (
    <section className={styles.section} id="ingredients">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/ingridiant.jpeg"
            alt="Private Knight Ingredients"
            className={styles.ingredientImage}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
