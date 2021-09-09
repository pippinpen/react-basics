import React, { useState } from 'react';

const Address = ({
  addressLine: { addressLine1, addressLine2, addressLine3 },
  setAddressLine,
}) => {
  return (
    <>
      <h1>My very first React project!</h1>
      <h1>The Address is:</h1>
      <p>{addressLine1}</p>
      <p>{addressLine2}</p>
      <p>{addressLine3}</p>
      {(addressLine1 !== 'deleted!') |
      (addressLine2 !== 'deleted!') |
      (addressLine3 !== 'deleted!') ? (
        <>
          <button
            onClick={() =>
              setAddressLine({
                addressLine1: 'deleted!',
                addressLine2: 'deleted!',
                addressLine3: 'deleted!',
              })
            }
          >
            Delete Address
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() =>
              setAddressLine({
                addressLine1: '12 Nightingale Way',
                addressLine2: 'London',
                addressLine3: 'E6 5JU',
              })
            }
          >
            Reset Address
          </button>
        </>
      )}
    </>
  );
};

export default Address;
