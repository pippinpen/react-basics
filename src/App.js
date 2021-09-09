import React, { useState } from 'react';
import Address from './components/Address';

const App = () => {
  const [addressLine, setAddressLine] = useState({
    addressLine1: '12 Nightingale Way',
    addressLine2: 'London',
    addressLine3: 'E6 5JU',
  });

  // ('12 Nightingale Way, London, E6 5JU');

  return (
    <>
      <Address addressLine={addressLine} setAddressLine={setAddressLine} />
    </>
  );
};

export default App;
