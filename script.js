// Making the game board grid
const gameBoard = (() => {
  const boardDivs = document.querySelectorAll('.boardDiv');
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board, boardDivs };
})();
// display the game grid
const displayController = (() => {
  const ID_PREFIX = 'square-';
  const boardDivs = gameBoard.boardDivs;
  const displayBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      boardDivs[i].textContent = board[i];
      boardDivs[i].setAttribute('id', `${ID_PREFIX}${i}`);
    }
  };

  return { displayBoard };
})();

const Player = (name, symbol, turn = false) => {
  return { name, symbol, turn };
};

const gameFlow = (() => {
  const Player1 = Player('Player1', 'X', true);
  const Player2 = Player('Player2', 'O', false);
  let currentPlayer = Player1;

  const turnToggle = () => {
    if (Player1.turn === true && Player2.turn === false) {
      Player1.turn = false;
      Player2.turn = true;
      currentPlayer = Player2;
    } else {
      Player1.turn = true;
      Player2.turn = false;
      currentPlayer = Player1;
    }
  };

  // const playersMove = () => {
  //   const boardDivs = gameBoard.boardDivs;
  //   playerSymbol = currentPlayer.symbol;
  //   boardDivs.forEach((boardDivs) => {
  //     boardDivs.addEventListener('click', (Event) => {});
  //   });
  // };
})();

console.log(gameFlow);

displayController.displayBoard(gameBoard.board);
