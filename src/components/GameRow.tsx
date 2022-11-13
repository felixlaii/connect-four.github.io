import React from "react";
import { Row } from "./interfaces/Row";
import { Column } from "./interfaces/Column";
import Tile from "./Tile";

interface Props {
    row: Row;
    updateBoard: (columnIndex: number) => void;
  }