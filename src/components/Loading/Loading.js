import React from 'react';
import RotateLoader from 'react-spinners/RotateLoader';




const Loading = () => {
  return (
    <div style={{height: '100vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
      <RotateLoader  size={150}  />
    </div>
  );
};

export default Loading;
