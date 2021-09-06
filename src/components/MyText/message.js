import React from 'react';

const NewText = function ({ exc }) {
  return <span>{exc}</span>;
};

export const Message = function ({ name }) {
  const exc = "!";
  return (<span className="Message"><span>Hello, {name}</span> <NewText exc={exc} /> </span>);
};