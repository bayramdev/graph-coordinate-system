import React from "react";
import NotSelectedAlert from "./NotSelectedAlert";
import NoDataAlert from "./NoDataAlert";
import { NonNullGraphsContextType, GraphsContext } from "@/contexts/graphs";

type AlertedContainerProps = {
  children?: null;
  contextElement: (
    context: NonNullGraphsContextType
  ) => React.ReactElement | null;
};

const NonNullGraphsContextElement: React.FC<AlertedContainerProps> = (
  props
) => {
  const context = React.useContext(GraphsContext);

  if (!context || !context.graphs) {
    return <NoDataAlert />;
  }
  if (!context.current || !context.matrix) {
    return <NotSelectedAlert />;
  }
  return props.contextElement(context as NonNullGraphsContextType);
};

export default NonNullGraphsContextElement;
