import { useState } from "react";
import { KonvaEventObject } from "konva/lib/Node";

const useWheelZoom = () => {
  const [stage, setStage] = useState({ scale: { x: 1, y: 1 }, x: 0, y: 0 });

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.1;
    const stage = e.target.getStage();
    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointerPosition = stage.getPointerPosition();
    if (!pointerPosition) return;

    const mousePointTo = {
      x: pointerPosition.x / oldScale - stage.x() / oldScale,
      y: pointerPosition.y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      scale: { x: newScale, y: newScale },
      x: (pointerPosition.x / newScale - mousePointTo.x) * newScale,
      y: (pointerPosition.y / newScale - mousePointTo.y) * newScale,
    });
  };

  return { stage, handleWheel };
};

export default useWheelZoom;
