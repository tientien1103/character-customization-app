import React from "react";
import Part from "./Part";

function Avatar(
  {
    body,
    hair,
    eyes,
    eyebrows,
    mouths,
    clothing1,
    clothing2,
    clothing3,
    glasses,
  },
  ref
) {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="eyes" index={eyes} zIndex={1} />
      <Part path="hair" index={hair} zIndex={6} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={3} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={4} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={5} />
      <Part path="accessories/glasses" index={glasses} zIndex={5} />
      <Part path="mouths" index={mouths} zIndex={4} />
      <Part path="noses" index={0} zIndex={4} />
      <Part path="eyebrows" index={eyebrows} zIndex={4} />
    </div>
  );
}

export default Avatar;
