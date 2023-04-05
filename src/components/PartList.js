import React from "react";

function PartList({ total, path, set, selected }) {
  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={path + i}
        className={selected === i ? "selected click square" : "click square"}
        onClick={() => set(i)}
      >
        <img src={`/character/${path}/${i + 1}.png`} alt="" height={60} />
      </div>
    );
  }
  return <div className="list">{parts}</div>;
}

export default PartList;
