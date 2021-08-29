import React from 'react';

const NewText = function ({ exc }) {
  return <span>{exc}</span>;
};

export const Message = function ({ name }) {
  const exc = "!";
  const greatings = "Hello,";
  return (<span className="Message"><span>{greatings} {name}</span><NewText exc={exc} /> </span>);
};