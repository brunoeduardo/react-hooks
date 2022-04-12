import React from "react";

export default React.memo(function Button({ handleClick, children }) {
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
});
