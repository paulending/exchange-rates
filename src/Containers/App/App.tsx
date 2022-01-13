import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';
import Rates from '../../Components/Rates';
import { getCurrencyRates } from '../../Services/Api';
import RateCalculator from '../RateCalculator';
import { StyledApp } from './App.style';
import DatePicker from "react-datepicker";
import { parseDate } from '../../helpers';

function App() {
  const { isLoading, error, data, isFetching } = useQuery<any, Error>("rates", getCurrencyRates);

  if (isLoading) return <Loader />;

  if (error) return <>An error has occurred: {error.message}</>;

  const { date, headers, rates } = data;

  const dateArray = parseDate(date);
  return (
    <StyledApp>
      <div className="column">
        {isFetching && <div className='fetching'>Updating data</div>}

        <h1>Foreign exchange market rates</h1>

        {/* Date change is not implemented */}
        <div className="date-select">
          <span>Select date:&nbsp;</span>
          <DatePicker selected={new Date(dateArray.year, dateArray.month, dateArray.day)} onChange={handleDateChange} disabled />
        </div>

        <Rates rates={rates} headers={headers} />
      </div>

      <div className="column">
        <h2>Exchange rate calculator</h2>
        <RateCalculator rates={rates} />
      </div>

    </StyledApp>
  );

  /**
   * On date change reload data from api.
   * Reload can be achieved if date is set to state variable and the variable is provided to useQuery key array.
   */
  function handleDateChange() {
    throw new Error('Function not implemented.');
  }
}

export default App;
