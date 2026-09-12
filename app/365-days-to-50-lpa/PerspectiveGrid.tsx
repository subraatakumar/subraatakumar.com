"use client";

import { useMemo } from "react";

type PerspectiveGridProps = { gridSize?: number };

export default function PerspectiveGrid({ gridSize = 20 }: PerspectiveGridProps) {
  const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

  return (
    <div className="d365-perspective-grid" aria-hidden="true">
      <div
        className="d365-perspective-plane"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {tiles.map((_, index) => <span className="d365-perspective-tile" key={index} />)}
      </div>
      <span className="d365-perspective-fade" />
    </div>
  );
}
