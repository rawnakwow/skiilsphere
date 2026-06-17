export default function TopInstructors() {
  const instructors = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Ross" },
    { id: 4, name: "Sarah Khan" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">🏆 Top Instructors</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="border p-4 text-center rounded-lg"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${ins.id}`}
              className="mx-auto rounded-full mb-2"
            />

            <p className="font-semibold">{ins.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}