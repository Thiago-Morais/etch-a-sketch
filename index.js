// TODO: Make the gap size between tiles dynamic with a `max` value but no `min` value

const DARKER_COLOR = "#432323";

resizeGridWith(16);

function resizeGrid() {
  const message = `Type a new size`;
  const sizeText = prompt(message, 16);
  const size = +sizeText;
  resizeGridWith(size);
}

function resizeGridWith(size) {
  const container = document.querySelector("#container");
  container.textContent = "";
  const tilesGrid = createTileGrid(size);
  const rowList = createRowList(tilesGrid);
  addRowsToContainer(rowList);
}

function createTileGrid(gridSize) {
  const tileSize = getTileSizeFromGridSize(gridSize);
  const tileGrid = [];
  for (let i = 0; i < gridSize; i++) {
    tileGrid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      tileGrid[i][j] = createTile(tileSize);
    }
  }
  return tileGrid;
}

function getTileSizeFromGridSize(gridSize) {
  const boundingSize = window.innerWidth / 2;
  const tileSize = boundingSize / gridSize;
  return tileSize > 100 ? 100 : tileSize;
}

function createTile(tileSize) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.height = `${tileSize}px`;
  tile.style.width = `${tileSize}px`;
  tile.addEventListener("mouseenter", () => darkenTile(tile));
  return tile;
}

function darkenTile(tile) {
  tile.style.backgroundColor = DARKER_COLOR;
  tile.style.border = "none";
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
