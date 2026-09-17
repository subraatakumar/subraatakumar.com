"use client";

const technologies = [
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB", className: "d365-tech-python" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", className: "d365-tech-fastapi" },
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", className: "d365-tech-azure" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", className: "d365-tech-react" },
  { name: "Python and FastAPI", icon: "https://cdn.simpleicons.org/python/3776AB", className: "d365-tech-docker" },
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
