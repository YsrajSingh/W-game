import React, { useState, useEffect } from "react";
export default function Wgame() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [cordinates, setCordinates] = useState([]);
  useEffect(() => {
    setCords();
  }, [setX, setY]);
  const setCords = () => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  };
  const getCords = () => {
    cordinates.push({ x, y });
    timer();
  };
  const timer = () => {
    setTimeout(() => {
      cordinates.splice(0, 1);
    }, 10000);
  };
  return (
    (onclick = getCords),
    (
      <>
        {cordinates.map((item) => {
          return (
            <div style={{ position: "absolute", top: item?.y, left: item?.x }}>
              W
            </div>
          );
        })}
      </>
    )
  );
}
