export default function LearningTips() {
  const tips = [
    "Study 2–3 hours daily",
    "Build real projects instead of only watching videos",
    "Take notes while learning",
    "Revise every weekend",
    "Practice coding daily",
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">📌 Learning Tips</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-gray-50"
          >
            {tip}
          </div>
        ))}
      </div>
    </section>
  );
}