import React from 'react'
export default function Display({ screen }) {
  return (
    <div id="screen">
      <div id="formula-display">{screen.formula}</div>
      <div id="display">{screen.output}</div>
    </div>
  );
}
