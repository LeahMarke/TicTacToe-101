//       ***********************
//            INSTRUCTIONS
//       ***********************
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentMarker = "X";
let row;
let column;

const handleClick = (element) => {
  row = parseInt(element.id.charAt(0));
  column = parseInt(element.id.charAt(2));

  console.log(`The element you clicked on has an id:  ${element.id}`);

  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
};

const addMarker = (id) => {
  console.log(`*** The current marker is:  ${currentMarker}. ***`);
  console.log(
    `Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`
  );
  board[row][column] = currentMarker;
  document.getElementById(id).innerHTML = currentMarker;
  checkForWin();
};

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
};

const squares = document.getElementsByTagName("td");

const resetBoard = () => {
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id);
    squares[i].innerHTML = null;
  }
  location.reload();
};

const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`);
  } else {
    changeMarker();
  }
};

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") ||
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") ||
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  }
};

const verticalWin = () => {
  // Your code here to check for vertical wins
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") ||
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") ||
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  }
};

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if (
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") ||
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") ||
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    return true;
  }
};
