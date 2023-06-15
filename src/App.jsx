import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link to='01-hello-world'>01 - Hello World</Link>
        </li>
        <li>
          <Link to='02-hello-3d'>02 - Hello 3D</Link>
        </li>
      </ul>
    </main>
  );
}
