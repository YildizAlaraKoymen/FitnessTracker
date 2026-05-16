export default function StatsSummary({ workouts }) {
  const totalDuration = workouts.reduce((total, item) => total + Number(item.duration), 0);
  const totalCalories = workouts.reduce((total, item) => total + Number(item.calories), 0);
  const averageCalories = workouts.length ? Math.round(totalCalories / workouts.length) : 0;

  const stats = [
    { label: 'Toplam antrenman', value: workouts.length },
    { label: 'Toplam süre', value: `${totalDuration} dk` },
    { label: 'Yakilan kalori', value: `${totalCalories} kcal` },
    { label: 'Ortalama kalori', value: `${averageCalories} kcal` },
  ];

  return (
    <section className="stats-grid" aria-label="Fitness ozeti">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <span>{stat.label}</span>
          <strong>{stat.value}</strong>
        </div>
      ))}
    </section>
  );
}
