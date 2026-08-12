const projects = [
  {
    number: "01",
    title: "Emotion Recognition",
    description:
      "Built a system, along with user interface, for real-time emotion recognition using deep learning. The model takes in facial input and has a test accuracy of 73.39%.",
    tags: ["Tensorflow", "Flask", "React"],
  },
  {
    number: "02",
    title: "Thesis Project",
    description:
      "Built a system for real-time attachment style recognition using voice input. The deep learning model gives a test accuracy of 96.72% and is embedded in a website.",
    tags: ["Tensorflow", "Flask", "HTML"],
  },
  {
    number: "03",
    title: "CryptoCove",
    description:
      "Designed and developed a website for secure AES CBC encryption and decryption of all file types. Java Servlets were used along with the Apache Tomcat server.",
    tags: ["Java", "HTML", "Tomcat"],
  },
  {
    number: "04",
    title: "Supervised",
    description:
      "Built a Java-based machine learning package called Supervised. It can handle dataset loading, preprocessing, numerical regression, and obtaining performance metrics.",
    tags: ["Java", "ML", "Package"],
  },
  {
    number: "05",
    title: "prepare",
    description:
      "Developed prepare, a Python API, for users to easily prepare their datasets before any data science or machine learning tasks. Also designed and developed a GUI on top of it.",
    tags: ["Python", "Data", "API"],
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto px-12 pb-30"
    >

      <div className="reveal mb-16 flex items-end justify-between border-b border-white/10 pb-6">

        <div>
          <h2 className="font-bold tracking-tight text-7xl">
            Projects
          </h2>
        </div>

        <span className="text-neutral-600 block">
          2020 — 2026
        </span>

      </div>

      <div className="space-y-4">

        {projects.map((project) => (
          <div
            key={project.number}
            className="project-card group cursor-pointer border-b border-white/10 py-8 transition-all duration-500 hover:px-4"
          >
            <div className="grid gap-6 grid-cols-12 items-center">

              <span className="text-neutral-600 col-span-1">
                {project.number}
              </span>

              <h3 className="text-3xl font-bold tracking-tight col-span-3">
                {project.title}
              </h3>

              <p className="leading-6 text-neutral-500 col-span-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 col-span-3 justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[15px] text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;