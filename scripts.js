//       ***********************
//            INSTRUCTIONS
//       ***********************
let board = [
  ["","",""],
  ["","",""],
  ["","",""]
]

let currentMarker = "X";

const handleClick = (element) => {
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
  document.getElementById(id).innerHTML = currentMarker;
  changeMarker();
  board[row][column] = currentMarker
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
};

// -----------TTT Part 2-------------



const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
        || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
    )
  if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
        || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
    )
  if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
        || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    )

}

const verticalWin = () => {
  // Your code here to check for vertical wins
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
        || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
    )
  if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
        || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
    )
  if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
        || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
    )
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
        || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
    )
  if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
        || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
    )
}
