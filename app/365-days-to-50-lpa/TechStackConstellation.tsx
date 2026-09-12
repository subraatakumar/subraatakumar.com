"use client";

const technologies = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", className: "d365-tech-python" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688", className: "d365-tech-fastapi" },
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", className: "d365-tech-azure" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", className: "d365-tech-react" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", className: "d365-tech-docker" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", className: "d365-tech-postgres" },
];

export default function TechStackConstellation() {
  return (
    <div className="d365-tech-constellation" role="list" aria-label="Core engineering technologies">
      {technologies.map((technology) => (
        <div className={`d365-tech-tile ${technology.className}`} role="listitem" aria-label={technology.name} tabIndex={0} key={technology.name}>
          <div className="d365-tech-tile-face">
            {/* Simple Icons CDN supplies the official brand SVG marks. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={technology.icon} alt="" width="48" height="48" loading="lazy" />
          </div>
        </div>
      ))}
    </div>
  );
}
