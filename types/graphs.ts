import { Dispatch, SetStateAction } from "react";

export type NodeIDType = string;
export type EdgeMetadataType = { factor: number };

export type NodeType = {
  id: NodeIDType;
  label: string;
  certain: boolean | null;
};

export type EdgeType = {
  source: NodeIDType;
  target: NodeIDType;
  metadata: EdgeMetadataType;
};

export type GraphType = {
  label: string;
  nodes: NodeType[];
  edges: EdgeType[];
};

export type GraphsType = {
  graphs: GraphType[];
};

export type SetGraphsType = Dispatch<SetStateAction<GraphsType | null>>;
