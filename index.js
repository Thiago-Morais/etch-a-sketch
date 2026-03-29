// TODO: Make the gap size between tiles dynamic with a `max` value but no `min` value

const TILE_WIDTH = 3;
const TILE_HEIGHT = TILE_WIDTH;
const tileSideCount = 16;
const tileTotalCount = tileSideCount * tileSideCount;
const DARKER_COLOR = "#432323";

const tilesGrid = createTileGrid();
const rowList = createRowList(tilesGrid);
addRowsToContainer(rowList);

function createTileGrid() {
  const tileGrid = [];
  for (let i = 0; i < tileSideCount; i++) {
    tileGrid[i] = [];
    for (let j = 0; j < tileSideCount; j++) {
      tileGrid[i][j] = createTile();
    }
  }
  return tileGrid;
}

function createTile() {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.height = `${TILE_HEIGHT}em`;
  tile.style.width = `${TILE_WIDTH}em`;
  tile.addEventListener("mouseenter", () => darkenTile(tile));
  return tile;
}

function darkenTile(tile) {
  tile.style.backgroundColor = DARKER_COLOR;
}

function createRowList(tilesGrid) {
  const rowList = [];
  for (let i = 0; i < tilesGrid.length; i++) {
    const tilesList = tilesGrid[i];
    rowList[i] = createRow(tilesList);
  }
  return rowList;
}

function createRow(tiles) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < tiles.length; i++) {
    row.appendChild(tiles[i]);
  }
  return row;
}

function addRowsToContainer(rowList) {
  const container = document.querySelector("#container");
  for (let i = 0; i < rowList.length; i++) {
    container.appendChild(rowList[i]);
  }
}
