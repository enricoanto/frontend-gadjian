import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const state = useSelector((state) => state);
  return (
    <Fragment>
      {state.Alert.map((el, i) => {
        if (!el) {
          return <div></div>;
        } else {
          return <div className="error-text" key={i}>{el.msg}</div>;
        }
      })}
    </Fragment>
  );
};
export default Error;
