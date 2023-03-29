import React, { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);
  useEffect(() => {
    const watchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(watchTimeFromStorage);
  }, [watchTime]);
  return (
    <div>
      <h2>Total watch time</h2>
      <input type="text" value={time} />
    </div>
  );
};

export default SideCart;
