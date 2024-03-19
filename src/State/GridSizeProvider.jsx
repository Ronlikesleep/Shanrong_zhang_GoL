import React, { useState, createContext } from 'react';

export const GridSizeContext = createContext();
export default function GridSizeProvider(props) {
  const [gridSize, setGridSize] = useState([20, 20]);

  return (<GridSizeContext.Provider value={[gridSize, setGridSize]}>
    {props.children}
  </GridSizeContext.Provider>
  );
}
