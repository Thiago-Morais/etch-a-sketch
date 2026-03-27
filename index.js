const tileSideCount = 16;
const tileTotalCount = tileSideCount * tileSideCount;

const container = document.querySelector("#container");
console.log("container = ", container);
const tiles = [];
for (let i = 0; i < tileTotalCount; i++) {
  const tile = document.createElement("div");
  tiles[i] = tile;
  container.appendChild(tile);
}
