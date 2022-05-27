import React from "react";
import CountUp from "react-countup";

const Blog = () => {
  return (
    <CountUp start={0} end={100}>
      {({ countUpRef, start }) => (
        <div>
          <span ref={countUpRef} />
          <button onClick={start}>Start</button>
        </div>
      )}
    </CountUp>
  );
};

export default Blog;
