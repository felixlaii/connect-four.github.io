import React, { useState } from "react";
import { c4Columns, c4Rows } from "./constants/index";
import GameRow from "./GameRow";
import { Board } from "./interfaces/Board";
import { Row } from "./interfaces/Row";
import { Column } from "./interfaces/Column";

const GameBoard: React.FunctionComponent = (): JSX.Element => {
    const initialBoard: Board = {
        rows: Array.from({ length: c4Rows }, (_, i) => ({
          columns: Array.from({ length: c4Columns }, (_, i) => ({ player: null })),
        })),
      };
      const [board, setBoard] = useState<Board>(initialBoard);
      const [currPlayer, setCurrPlayer] = useState<number>(1);

      const updateBoard = (columnIndex: number): void => {
        let boardCopy: Board = board;
        let rowIndex: number = 0;
        let areColumnsFull = true;
        for (let r: number = 5; r >= 0; r--) {
          let columnPlayer = boardCopy.rows[r].columns[columnIndex].player;
          if (!columnPlayer) {
            boardCopy.rows[r].columns[columnIndex].player = currPlayer;
            rowIndex = r;
            areColumnsFull = false;
            break;
          }
        }
        if (!areColumnsFull) {
          setBoard(boardCopy);
          setCurrPlayer(currPlayer === 1 ? 2 : 1);
        }
        if (winCheck(rowIndex, columnIndex)) {
          setBoard(initialBoard);
          alert("player " + currPlayer + " wins");
          setCurrPlayer(1);
        } else {
          if (drawCheck()) {
            setBoard(initialBoard);
            alert("Draw");
            setCurrPlayer(1);
          }
        }
      };
}

export default GameBoard