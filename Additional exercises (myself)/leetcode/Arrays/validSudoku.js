//Soluion 1: using Sets. Time complexity O(N^2). Space Complexity: O(N^3)?

var isValidSudoku = function(board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let char = board[i][j];

      if (char !== '.') {
        const inRow = `${char} in row ${i}`;
        const inCol = `${char} in col ${j}`;
        const inBlock = `${char} in ${Math.floor(i / 3)} - ${Math.floor(
          j / 3
        )}`;
        if (set.has(inRow) || set.has(inCol) || set.has(inBlock)) {
          return false;
        }
        set.add(inRow);
        set.add(inCol);
        set.add(inBlock);
      }
    }
  }

  return true;
};

// solution 3

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowArray = [[], [], [], [], [], [], [], [], []],
    colArray = [[], [], [], [], [], [], [], [], []],
    areaArray = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cur = board[i][j];
      if (cur === '.') {
        continue;
      }
      if (rowArray[i].indexOf(cur) != -1) {
        return false;
      }
      rowArray[i].push(cur);

      if (colArray[j].indexOf(cur) != -1) {
        return false;
      }
      colArray[j].push(cur);

      if (areaArray[getArea(i, j)].indexOf(cur) != -1) {
        return false;
      }
      areaArray[getArea(i, j)].push(cur);
    }
  }
  return true;
};

function getArea(i, j) {
  return Math.floor(i / 3) * 3 + Math.floor(j / 3);
}

// solution 4

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const l = board.length;

  for (let i = 0; i < l; i++) {
    const mapRow = {};
    const mapColumn = {};

    for (let j = 0; j < l; j++) {
      if (board[i][j] !== '.') {
        if (!mapRow[board[i][j]]) {
          mapRow[board[i][j]] = true;
        } else {
          return false;
        }
      }

      if (board[j][i] !== '.') {
        if (!mapColumn[board[j][i]]) {
          mapColumn[board[j][i]] = true;
        } else {
          return false;
        }
      }
    }
  }

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      const map = {};

      for (let i = row * 3; i < row * 3 + 3; i++) {
        for (let j = column * 3; j < column * 3 + 3; j++) {
          if (board[i][j] !== '.') {
            if (!map[board[i][j]]) {
              map[board[i][j]] = true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      sqr = new Set();
    for (let j = 0; j < 9; j++) {
      let rowc = board[i][j];
      let colc = board[j][i];
      let sqrc =
        board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];
      if (row.has(rowc) || col.has(colc) || sqr.has(sqrc)) return false;
      if (rowc !== '.') row.add(rowc);
      if (colc !== '.') col.add(colc);
      if (sqrc !== '.') sqr.add(sqrc);
    }
  }
  return true;
};
