const projects = [
  { id: 1, name: "Portfolio Website", link: "#" },
  { id: 2, name: "E-commerce App", link: "#" },
  { id: 3, name: "Blog Website", link: "#" },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">My Projects</h2>
      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.id} className="p-3 border rounded hover:bg-gray-100">
            <a href={p.link} className="text-blue-500 font-medium">{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
