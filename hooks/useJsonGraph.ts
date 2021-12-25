import React from "react";
import { GraphsContext } from "@/contexts/graphs";
import { GraphsType } from "@/types/graphs";

const readJson = async (file: File): Promise<Object> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) =>
      resolve(JSON.parse(String(event.target?.result || null)));
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  });
};

export const useJsonGraphs = () => {
  const { changeGraphs } = React.useContext(GraphsContext);
  const [loading, setLoading] = React.useState(false);

  return {
    loading,
    setJsonGraphs: async (file: File) => {
      setLoading(true);
      const json = await readJson(file);
      changeGraphs(json as GraphsType);
      setLoading(false);
    },
  };
};
