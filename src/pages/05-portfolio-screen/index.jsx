import styles from './styles.module.css';

const contaktDetails = [
  {
    name: 'github',
    link: 'https://github.com/bpetermann/',
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/ben-peterman',
  },
  {
    name: 'mail',
    link: 'mailto:benjamin.petermann@gmx.at',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        src='./images/me.webp'
        className={styles.img}
        alt='a picture of me'
      />
      <h1>Benjamin Petermann</h1>
      <h2>Junior Frontend Developer</h2>
      <nav>
        <ul className={styles.links}>
          {contaktDetails.map(({ name, link }) => (
            <li key={name + link}>
              <a href={link} className={styles[name]} target="_parent">
                <img src={`/images/${name}.png`} alt={`${name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
