import React from "react";
import { Column } from "./interfaces/Column";

interface Props {
    columnIndex: number;
    column: Column;
    updateBoard: (columnIndex: number) => void;
}

const Tile: React.FunctionComponent<Props> = ({
    columnIndex,
    updateBoard,
    column,
  }