import { useQuery } from '@apollo/client';
import React from 'react';
import EXCHANGE_RATES from "../../graphql/queries/EXCHANGE_RATES"

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency , rate }: {currency: string, rate: number}) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;