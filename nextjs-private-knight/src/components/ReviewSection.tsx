'use client';

import styles from '@/styles/ReviewSection.module.css';

interface Review {
  name: string;
  city: string;
  stars: number;
  date: string;
  badge: string;
  avatarColor: string;
  type?: string;
  text: React.ReactNode;
}

const indiaReviews: Review[] = [
  {
    name: "Rajesh K.", city: "Mumbai, Maharashtra", stars: 5, date: "12 Jan 2025",
    badge: "Community Review", avatarColor: "g1",
    text: `bhai sach mein kaam karta hai ! was very skeptical at first but after 3 weeks using both capsule and oil together .. energy levels much better and confidance is back . packaging was also very discreet . will order again`
  },
  {
    name: "Suresh M.", city: "Hyderabad, Telangana", stars: 5, date: "28 Jan 2025",
    badge: "User Experience", avatarColor: "g2",
    text: `excellent product . tried many ayurvedic products before but this combo is diffrent . oil absorbs quickly and capsules dont have bad smell or taste . after one month stamina improved alot . wife also noticced the difference 😄 highly recomended`
  },
  {
    name: "Amit T.", city: "Delhi", stars: 4, date: "3 Feb 2025",
    badge: "Buyer Comment", avatarColor: "g3",
    text: `good product overall . results started showing after 2nd week . capsules easy to swallow , take with warm milk at night as suggested . oil massage also feels good .. gave 4 stars only because delivery took 6 days but product quality is 5 star`
  },
  {
    name: "Vikram S.", city: "Pune, Maharashtra", stars: 5, date: "9 Feb 2025",
    badge: "User Experience", avatarColor: "g4",
    text: `was feeling very tired and low energy for past few months . friend recommended this combo and honestly it has been a game changer .. both products together work really well . no side effects at all even after 45 days . 100% natural feel`
  },
  {
    name: "Mohammed I.", city: "Bangalore, Karnataka", stars: 5, date: "15 Feb 2025",
    badge: "Community Review", avatarColor: "g1",
    text: `first time i ordered was nervous about privacy but packagging was completely plain with no product name outside . very profesional . and the product itself — mashallah — working very well . energy and mood both improved . already placed second order 🤲`
  },
  {
    name: "Deepak R.", city: "Jaipur, Rajasthan", stars: 4, date: "19 Feb 2025",
    type: "neutral", badge: "Buyer Comment", avatarColor: "g5",
    text: `decent product .. using since 3 weeks only so cannot give full review yet . initial results are promissing . capsules are good quality . oil has nice mild herbal smell . customer service also replied fast . will update review after full course 🙂`
  },
  {
    name: "Sanjay P.", city: "Chennai, Tamil Nadu", stars: 5, date: "22 Feb 2025",
    badge: "User Experience", avatarColor: "g2",
    text: `pehle kai products try kiye the koi result nahi mila . phir yeh combo try kiya and within 20 days energy aane lagi . Oil especially good — thoda sa bhi bahut kaam karta hai . Totally worth money . Ayurnath brand pe trust karta hoon ab 🙏`
  },
  {
    name: "Ravi N.", city: "Kolkata, West Bengal", stars: 5, date: "1 Mar 2025",
    badge: "Community Review", avatarColor: "g3",
    text: `BEST combo i have ever used . work long hours always exhausted by evening . since starting Private Knight capsules feeling energetic whole day . oil also very effective . no burning sensation no irritation — pure herbal . 5 stars without any doubt`
  },
  {
    name: "Arjun B.", city: "Lucknow, UP", stars: 4, date: "6 Mar 2025",
    badge: "Buyer Comment", avatarColor: "g4",
    text: `product is genuine and results are there . worried about chemicals or steroids but this is fully ayurvedic and safe . sleep has also improved since i started . oil massage gives warm sensation during massage which feels very good . minus one star — wish oil bottle was bigger 😅`
  },
  {
    name: "Harpreet G.", city: "Amritsar, Punjab", stars: 5, date: "11 Mar 2025",
    badge: "User Experience", avatarColor: "g1",
    text: `waheguru da shukar hai finally koi product mileya jo actually kaam karda . stamina bahut improve hoya . 30 din de andar farak pata lag gaya . packaging bhi changi si , kisi nu pata nahi chaleya ghar ch ki mangwaya 😂 baki sab samajh jaange . must try`
  },
  {
    name: "Kiran D.", city: "Ahmedabad, Gujarat", stars: 4, date: "16 Mar 2025",
    type: "neutral", badge: "Buyer Comment", avatarColor: "g5",
    text: `ekhono FULL result nahi mila .. 3 week holo use korchi . kintu difference ache — energy aktu better . dekhi aro chalbe kina 🙂 packaging discreet chilo seta valo laglo`
  },
  {
    name: "Tushar M.", city: "Nagpur, Maharashtra", stars: 5, date: "20 Mar 2025",
    badge: "Community Review", avatarColor: "g2",
    text: `ordered after seeing ingredients — all ayurvedic no harmful chemicals . am a fitness person very careful about what i put in my body . capsules clean and effective . combined with oil results are visible within 3-4 weeks . genuine product no doubt 💪`
  },
];

const wbReviews: Review[] = [
  {
    name: "Subhajit Das", city: "Kolkata, WB", stars: 5, date: "8 Jan 2025",
    badge: "Community Review", avatarColor: "g1",
    text: `sotti bolte prothome bisshwas hoyni .. onloine eto product dekhi shob voya mone hoy . kintu bondhur kotha y ei combo order korlam . 3 shoptaho pore bujhte parcchi . energy onek berecche , ar klanti ager moto nei . packeging ekdom sadamata chilo barie keu bujhte i pareni 😄 abar order korbo`
  },
  {
    name: "Prosenjit Mondal", city: "Howrah, WB", stars: 5, date: "14 Jan 2025",
    badge: "User Experience", avatarColor: "g2",
    text: `dada ei product aktu derite try korlam kintu result dekhe mone hocche aro age korle valo hoto . capsule ar oil duTo ekkoshathe use korchi 1 maash dhore .. stamina ebong confidance duToi imporve hoyeche . kono side effect nei . ful marks 👍`
  },
  {
    name: "Arpan Ghosh", city: "Durgapur, WB", stars: 4, date: "21 Jan 2025",
    badge: "Buyer Comment", avatarColor: "g3",
    text: `valo product .. ami engineer kaj er chape shorir ekdom venge porchilo . rate ghuomer poreo klanti jeto na . Private Knight Capsules suru korar pore shokal e uthe energitic feel hocche . oilta o valo herbal gondho ache kintu jwala kore na .. delivary aktu deri tai 4 star`
  },
  {
    name: "Tanmoy Biswas", city: "Siliguri, WB", stars: 5, date: "29 Jan 2025",
    badge: "Community Review", avatarColor: "g4",
    text: `amar boyos 38 , got koyekbochor dhore shorire ar ager moto jor pacchilam na . tokhon ei combo dekhlam online e . shompurno ayurvedic dekhe shahos kore order korlam . 45 din por bolte pari — eta shotti kaj kore . Ayurnath ke dhonnobad 🙏`
  },
  {
    name: "Rajib Sarkar", city: "Barrackpore, WB", stars: 5, date: "5 Feb 2025",
    badge: "User Experience", avatarColor: "g1",
    text: `packetta esechilo ekdom shada packegig e .. baire kichui lekha nei . eta dekhe i bujhlam company privasy bujhe . oilta masaaj korle gorom onuvuti hoy khub aaramdayok . 30 din e i result bojha jacche .. darun product — ekbar try i kore dekhun !! 😊`
  },
  {
    name: "Sougata Roy", city: "Asansol, WB", stars: 5, date: "11 Feb 2025",
    badge: "Community Review", avatarColor: "g2",
    text: `ami onek kichu try korechi age — kichui kaj koreni . sheshmesh ei Private Knight Combo .. tin shoptathe i parthokko ter pacchi . stri o bollen porivortton bujhte parchhen 😄 ar ki lage ! dwitio pack order kore diyechi already`
  },
  {
    name: "Debashis Paul", city: "Krishnanagar, WB", stars: 4, date: "18 Feb 2025",
    type: "neutral", badge: "Buyer Comment", avatarColor: "g5",
    text: `ekhono full result paini .. 2 week holo use korchi . enargy aktu better feel hocche . oil masaaj korle rilaksd lage .. customar servise o valo . dekhi aro chalbe kina 🙂`
  },
  {
    name: "Biswanath Chatterjee", city: "Burdwan, WB", stars: 5, date: "25 Feb 2025",
    badge: "User Experience", avatarColor: "g3",
    text: `shotto review dicchi — amar boyos 44 . Private Knight Capsule ar Oil ekkosathe byabohar kore ami shotti obak hoye gechi !! 6 shoptaho por mone hocche 30 bochor boyoshe fire gechi 😁 kono chemicall nei kono khoti nei . Ayurnath dirghojibi hok 🙏`
  },
  {
    name: "Mithun H.", city: "Malda, WB", stars: 5, date: "4 Mar 2025",
    badge: "Buyer Comment", avatarColor: "g4",
    text: `valo .. packaging discreet chilo 👍 difference ache use korchi`
  },
  {
    name: "Partha S.", city: "Bankura, WB", stars: 4, date: "10 Mar 2025",
    type: "neutral", badge: "Buyer Comment", avatarColor: "g1",
    text: `use korchi .. dekhi aro order korbo . ekhon energy aktu better . 3 star na 5 star bola mushkil ekhone .. aro 2 week use kori tahole bolte parbo`
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  const initials = review.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const avatarClass = styles[review.avatarColor as keyof typeof styles] || styles.g1;

  return (
    <div className={`${styles.card} ${review.type === 'neutral' ? styles.cardNeutral : ''}`}>
      <div className={styles.cardTop}>
        <div className={`${styles.avatar} ${avatarClass}`}>{initials}</div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{review.name}</div>
          <div className={styles.userCity}><span>📍</span> {review.city}</div>
        </div>
      </div>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className={s <= review.stars ? '' : styles.starEmpty}>★</span>
        ))}
      </div>
      <div className={styles.reviewText}>{review.text}</div>
      <div className={styles.cardFooter}>
        <span className={`${styles.badge} ${review.type === 'neutral' ? styles.badgeNeutral : ''}`}>
          {review.badge || 'Buyer Comment'}
        </span>
        <span className={styles.date}>{review.date}</span>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.header}>
        <div className={styles.brandTag}>Ayurnath</div>
        <h2 className={styles.title}>Private Knight Combo<br />Customer Reviews</h2>
        <div className={styles.starsHeader}>★★★★★</div>
        <div className={styles.summary}>
          <strong>4.7 / 5</strong> &nbsp;·&nbsp; Based on 218 reviews
        </div>
        <p className={styles.subtitle}>Capsules + Oil — Real experiences from real buyers</p>
      </div>

      <div className={styles.sectionLabel}>
        <span>West Bengal — গ্রাহকদের মতামত</span>
      </div>
      <div className={styles.grid}>
        {wbReviews.map((r, i) => (
          <ReviewCard key={`wb-${i}`} review={r} />
        ))}
      </div>

      <div className={styles.sectionLabel}>
        <span>Pan India — Buyer Comments</span>
      </div>
      <div className={styles.grid}>
        {indiaReviews.map((r, i) => (
          <ReviewCard key={`india-${i}`} review={r} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
