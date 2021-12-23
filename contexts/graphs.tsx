import { createContext, useState, Dispatch, SetStateAction } from "react";
import { createMatrix } from "utils/matrix";
import { GraphsType, GraphType } from "@/types/graphs";
import { MatrixType } from "@/types/matrix";

export type GraphsContextType = {
  graphs: GraphsType | null;
  setGraphs: Dispatch<SetStateAction<GraphsType | null>>;
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

  return (
    <GraphsContext.Provider
      value={{
        graphs,
        setGraphs,
        current,
        changeCurrent,
        matrix,
      }}
    >
      {children}
    </GraphsContext.Provider>
  );
};
