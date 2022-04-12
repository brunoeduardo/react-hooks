import { useState, useEffect } from "react";

export default function MousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (positionMouseValues) => {
    console.log("Mouse Position");
    setX(positionMouseValues.screenX);
    setY(positionMouseValues.screenY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);

    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);

  return (
    <div>
      Mouse position: X = {x} - Y = {y}
    </div>
  );
}
