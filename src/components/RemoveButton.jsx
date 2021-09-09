import React, { useState } from 'react';

const RemoveButton = (props) => {
  const [remove, setRemove] = useState('not clicked');
  return (
    <>
    <button onClick={() => setRemove(remove + 1)}>Remove Address</button>
    </>
  );
}
 
export default RemoveButton;