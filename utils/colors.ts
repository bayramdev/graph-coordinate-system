export const colorNodeBy = (certain: boolean | null) =>
  certain === null ? "#888888" : certain ? "#22dd22" : "#dd2222";

export const colorEdgeBy = (certain: boolean | null) =>
  colorNodeBy(certain) + "80"; // alpha channel
