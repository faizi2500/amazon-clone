import React from 'react';
import CurrencyFormat from 'react-currency-format';

const Currency = () => (
  <div>
    <CurrencyFormat
      value={2456981}
      displayType="text"
      thousandSeparator
      prefix="$"
      renderText={(value) => <div>{value}</div>}
    />
  </div>
);

export default Currency;
