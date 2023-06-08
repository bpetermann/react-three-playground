import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href='/01-hello-world'>01 - Hello World</Link>
        </li>
      </ul>
    </main>
  );
}
