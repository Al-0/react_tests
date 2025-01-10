import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning_combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const getPlayer = (turns) => {
  let player = "X";

  if (turns.length > 0 && turns[0].player === "X") player = "O";

  return player;
};

const findWinner = (gameBoard) => {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol !== null &&
      firstSquareSymbol === secondSquareSymbol &&
      thirdSquareSymbol === secondSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  return winner;
};

const getGameBoard = (turns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }

  return gameBoard;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [players, setPlayers] = useState(PLAYERS);
  const [turns, setTurns] = useState([]);

  const gameBoard = getGameBoard(turns);
  const activePlayer = getPlayer(turns);
  const winner = findWinner(gameBoard);
  const isDraw = !winner && turns.length === 9 ? true : false;

  function handleSelectSquare(rowIdx, colIdx) {
    //setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setTurns((prevTurns) => {
      let currentPlayer = getPlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handlePlayersEdit(symbol, newName) {
    setPlayers((prevPlayers) => {
      const newPlayers = { ...prevPlayers };

      newPlayers[symbol] = newName;
      return newPlayers;
    });
  }

  function restartHandler() {
    setTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            onEditPlayer={handlePlayersEdit}
            isActive={activePlayer === "X" ? true : false}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            onEditPlayer={handlePlayersEdit}
            isActive={activePlayer === "O" ? true : false}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={players[winner]} onRestart={restartHandler} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
