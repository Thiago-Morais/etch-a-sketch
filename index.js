// TODO: Center the title
// TODO: Make the gap size between tiles dynamic with a `max` value but no `min` value

const TILE_WIDTH = 3;
const TILE_HEIGHT = TILE_WIDTH;
const tileSideCount = 16;
const tileTotalCount = tileSideCount * tileSideCount;

const container = document.querySelector("#container");
const tiles = [];
const tileRows = [];
for (let i = 0; i < tileSideCount; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  tiles[i] = [];

  for (let j = 0; j < tileSideCount; j++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.height = `${TILE_HEIGHT}em`;
    tile.style.width = `${TILE_WIDTH}em`;
    tiles[i][j] = tile;
    row.appendChild(tile);
  }
  container.appendChild(row);
  tileRows.push(row);
}
