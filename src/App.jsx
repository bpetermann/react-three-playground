import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const sketches = [
  {
    link: '01-mirror-cabinet',
    name: '01 - Mirror Cabinet',
  },
  {
    link: '02-3d-text',
    name: '02 - 3D Text',
  },
  {
    link: '03-blender-scene',
    name: '03 - Blender Scene',
  },
  {
    link: '04-chess-landing',
    name: '04 - Chess Page',
  },
  {
    link: '05-portfolio',
    name: '05 - Portfolio',
  },
  {
    link: '06-marble-game',
    name: '06 - Marble Game',
  },
  {
    link: '07-shader-art',
    name: '07 - Shader Art',
  },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>React Three Playground</h1>
      <ul>
        {sketches.map(({ link, name }, i) => (
          <li key={`${name}${link}`} className={styles.item}>
            <h4>{name}</h4>
            <Link to={link} className={styles.link}>
              <img src={`/images/preview/0${i + 1}.png`} alt='preview image' />
              <span>
                Link <img src='/images/arrow.png' alt='arrow' />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
