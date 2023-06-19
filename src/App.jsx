import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link to='01-mirror-cabinet'>01 - Mirror Cabinet</Link>
        </li>
        <li>
          <Link to='02-3d-text'>02 - 3D Text</Link>
        </li>
        <li>
          <Link to='03-blender-scene'>03 - Blender Scene</Link>
        </li>
        <li>
          <Link to='04-chess-landing'>04 - Chess Page</Link>
        </li>
      </ul>
    </main>
  );
}
