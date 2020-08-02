import React from 'react';
// import ColorContext from '../contexts/color';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    // <ColorContext.Consumer>
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: value.state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
    //  </ColorContext.Consumer>
  );
};

export default ColorBox;
