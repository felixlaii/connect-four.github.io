import React from "react";
import { Row } from "./interfaces/Row";
import { Column } from "./interfaces/Column";
import Tile from "./Tile";

interface Props {
    row: Row;
    updateBoard: (columnIndex: number) => void;
  }

  const GameRow: React.FunctionComponent<Props> = ({
    row,
    updateBoard
  }: Props): JSX.Element => {
    return (
      <tr>
        {row.columns.map(
          (column: Column, i: number): JSX.Element => (
            <Tile key={i} column={column} columnIndex={i} updateBoard={updateBoard}/>
          )
        )}
      </tr>
    );
  };
  export default GameRow;