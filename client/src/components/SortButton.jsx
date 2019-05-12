import React from "react";

export const SortButton = props => {
  const { isActive, onClick } = props;
  return <span onClick={onClick}>{isActive ? " \u2193" : " \u2195"}</span>;
};
