type NodeID = string;
type EdgeMetadata = { factor: number };

export type GraphsType = {
  graphs: {
    label: string;
    nodes: { id: NodeID; label: string }[];
    edges: { source: NodeID; target: NodeID; metadata: EdgeMetadata }[];
  }[];
} | null;
