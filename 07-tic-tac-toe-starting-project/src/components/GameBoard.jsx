export default function GameBoard({onSelectSquare, gameBoard}) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((cell, cellIdx) => (
              <li key={cellIdx}>
                <button onClick={() => onSelectSquare(rowIdx, cellIdx)} disabled={!!gameBoard[rowIdx][cellIdx]}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
