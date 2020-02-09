import React from 'react';

const Cell = ({ isInitial, num, onChange }) => {
  return (
    <div
      onClick={e => {
        if (isInitial) {
          return;
        }
        onChange((num + 1) % 5);
      }}
      className={`cell ${isInitial ? 'initial' : ''}`}
    >
      {num !== 0 && num}
    </div>
  );
};

export default Cell;
