import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <ol>
        <li>
          <p><Link href="/community">Community</Link></p>
        </li>
        <li>
          <p><Link href="/meals">Meals</Link></p>
        </li>
      </ol>
    </main>
  );
}
