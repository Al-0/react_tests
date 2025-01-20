import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <ol>
        <li>
          <p><Link href="meals/share">Share</Link></p>
        </li>
        <li>
          <p><Link href="meals/meal-1">Meal 1</Link></p>
        </li>
        <li>
          <p><Link href="meals/meal-2">Meal 2</Link></p>
        </li>
      </ol>
    </main>
  );
}
