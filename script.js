const gameBoard = (() => {
  const boardDivs = document.querySelectorAll('.boardDiv');
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board, boardDivs };
})();

const displayController = (() => {
  const ID_PREFIX = 'square-';
  const boardDivs = gameBoard.boardDivs;
  const displayBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      boardDivs[i].textContent = board[i];
      boardDivs[i].setAttribute('id', `${ID_PREFIX}${i}`);
    }
  };

  return { displayBoard, ID_PREFIX };
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
    console.log(`It is now ${currentPlayer.name}'s turn.`);
  };

  const playersMove = () => {
    const ID_PREFIX = displayController.ID_PREFIX;
    const boardDivs = gameBoard.boardDivs;

    boardDivs.forEach((boardDiv) => {
      boardDiv.addEventListener('click', (event) => {
        const boardDivId = event.target.id;
        const index = parseInt(boardDivId.slice(ID_PREFIX.length));
        const playerSymbol = currentPlayer.symbol;

        if (gameBoard.board[index] === '') {
          gameBoard.board[index] = playerSymbol;
          event.target.textContent = playerSymbol;

          turnToggle();
          console.log(currentPlayer);
        }

        // console.log(`Index: ${index}`);
        // console.log(`Board: ${gameBoard.board}`);
        // console.log(`BoardDivId: ${boardDivId}`);
        // console.log(`Current player: ${currentPlayer.name}`);
      });
    });
  };
  playersMove();
})();

displayController.displayBoard(gameBoard.board);
