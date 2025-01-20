export default function MealInfo({ params }) {
  return (
    <main>
      <h1>MealInfo</h1>
      <p>{params.slug}</p>
    </main>
  );
}
