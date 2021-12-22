import { createContext, useState, Dispatch, SetStateAction } from "react";
import { GraphsType } from "@/types/graphs";

type GraphsContextType = {
  graphs: GraphsType;
  setGraphs: Dispatch<SetStateAction<GraphsType>>;
};

const defaultContext = {} as GraphsContextType;
export const GraphsContext = createContext<GraphsContextType>(defaultContext);

export const GraphsProvider: React.FC = ({ children }) => {
  const [graphs, setGraphs] = useState<GraphsType>(null);

  return (
    <GraphsContext.Provider
      value={{
        graphs,
        setGraphs,
      }}
    >
      {children}
    </GraphsContext.Provider>
  );
};
