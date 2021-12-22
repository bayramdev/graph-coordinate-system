import { createContext, useState, Dispatch, SetStateAction } from "react";
import { GraphsType, GraphType } from "@/types/graphs";

export type GraphsContextType = {
  graphs: GraphsType | null;
  setGraphs: Dispatch<SetStateAction<GraphsType | null>>;
  current: GraphType | null;
  changeCurrent: (label: string) => void;
};

const defaultContext = {} as GraphsContextType;
export const GraphsContext = createContext<GraphsContextType>(defaultContext);

export const GraphsProvider: React.FC = ({ children }) => {
  const [graphs, setGraphs] = useState<GraphsType | null>(null);
  const [current, setCurrent] = useState<GraphType | null>(null);

  const changeCurrent = (label: string) => {
    if (!graphs?.graphs) return;
    const graph = graphs?.graphs.filter((g) => g.label === label)[0];
    setCurrent(graph);
  };

  return (
    <GraphsContext.Provider
      value={{
        graphs,
        setGraphs,
        current,
        changeCurrent,
      }}
    >
      {children}
    </GraphsContext.Provider>
  );
};
