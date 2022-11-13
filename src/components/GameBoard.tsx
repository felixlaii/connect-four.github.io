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
}

export default GameBoard