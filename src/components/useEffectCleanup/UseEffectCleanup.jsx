import { useState } from "react";
import MousePosition from "./MousePosition";

export default function UseEffectCleanup() {
  const [showMousePosition, setShowMousePosition] = useState(true);

  return (
    <div>
      <button onClick={() => setShowMousePosition(!showMousePosition)}>
        Limpar mouse position
      </button>
      <br />
      <br />
      {showMousePosition && <MousePosition></MousePosition>}
    </div>
  );
}
