import { createContext, useState, Dispatch, SetStateAction } from "react";
import { createMatrix } from "utils/matrix";
import { GraphsType, GraphType, SetGraphsType } from "@/types/graphs";
import { MatrixType } from "@/types/matrix";

export type NonNullGraphsContextType = {
  graphs: GraphsType;
  changeGraphs: SetGraphsType;
  current: GraphType;
  changeCurrent: (label: string) => void;
  matrix: MatrixType;
};

export type GraphsContextType = {
  graphs: GraphsType | null;
  changeGraphs: SetGraphsType;
  current: GraphType | null;
  changeCurrent: (label: string) => void;
  matrix: MatrixType | null;
};

const defaultContext = {} as GraphsContextType;
export const GraphsContext = createContext<GraphsContextType>(defaultContext);

export const GraphsProvider: React.FC = ({ children }) => {
  const [graphs, setGraphs] = useState<GraphsType | null>(null);
  const [current, setCurrent] = useState<GraphType | null>(null);
  const [matrix, setMatrix] = useState<MatrixType | null>(null);

  const changeCurrent = (label: string) => {
    if (!graphs?.graphs) return;
    const graph = graphs?.graphs.filter((g) => g.label === label)[0];
    const matrix = createMatrix(graph);
    setCurrent(graph);
    setMatrix(matrix);
  };

  const changeGraphs: SetGraphsType = (value) => {
    setGraphs(value);
    setCurrent(null);
    setMatrix(null);
  };

  return (
    <GraphsContext.Provider
      value={{
        graphs,
        changeGraphs,
        current,
        changeCurrent,
        matrix,
      }}
    >
      {children}
    </GraphsContext.Provider>
  );
};
