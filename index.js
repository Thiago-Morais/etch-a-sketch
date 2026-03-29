// TODO: Make the gap size between tiles dynamic with a `max` value but no `min` value
/* 
  TODO: Add a button on the top of the screen that will send the user a
    popup asking for the number of squares per side for the new grid.
  Once entered, the existing grid should be removed, and a new grid should
    be generated in the same total space as before (e.g., 960px wide) so
    that you’ve got a new sketch pad.
*/
/*
  - Update the size of the tiles
    - We need to have a max size for the entire grid and calculate the tile
      size based on that
*/

const TILE_WIDTH = 3;
const TILE_HEIGHT = TILE_WIDTH;
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

function createTileGrid(size) {
  const tileGrid = [];
  for (let i = 0; i < size; i++) {
    tileGrid[i] = [];
    for (let j = 0; j < size; j++) {
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
