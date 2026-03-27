const tileSideCount = 16;
const tileTotalCount = tileSideCount * tileSideCount;

const container = document.querySelector("#container");
const tiles = [];
for (let i = 0; i < tileTotalCount; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tiles[i] = tile;
  container.appendChild(tile);
}
