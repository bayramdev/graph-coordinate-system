import { Dispatch, SetStateAction } from "react";

type NodeID = string;
type EdgeMetadata = { factor: number };

export type GraphType = {
  label: string;
  nodes: { id: NodeID; label: string }[];
  edges: { source: NodeID; target: NodeID; metadata: EdgeMetadata }[];
};

export type GraphsType = {
  graphs: GraphType[];
};

export type SetGraphsType = Dispatch<SetStateAction<GraphsType | null>>;
