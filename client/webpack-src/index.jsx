import React from 'react';
import reactDom from 'react-dom';
import Image from './Image.jsx';

const App = () => {
  return (
    <div>
      <Image />
    </div>
  );
};

reactDom.render(<App />, document.getElementById('webpack-inner'));
