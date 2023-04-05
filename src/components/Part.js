import React from "react";

function Part({ path, index }) {
  return (
    <img
      src={`/character/${path}/${index + 1}.png`}
      alt=""
      width={260}
      style={{ position: "absolute", left: 0, top: 0 }}
    />
  );
}

export default Part;
