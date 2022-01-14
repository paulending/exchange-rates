import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader';
import Rates from '../../Components/Rates';
import { getCurrencyRates } from '../../Services/Api';
import RateCalculator from '../RateCalculator';
import { StyledApp } from './App.style';
import DatePicker from "react-datepicker";
import { parseDate } from '../../helpers';
import ErrorInfo from '../../Components/Error';


function App() {
  const { isLoading, error, data, isFetching } = useQuery<any, Error>("rates", getCurrencyRates);
  const [targetCurrency, setTargetCurrency] = useState<string>('');

  if (isLoading) return <Loader text={'Downloading exchange rates'} />;

  const { date, headers, rates } = data || {};

  if (error) return <ErrorInfo text={error.message} />;
  if (!date || !headers || !rates) return <ErrorInfo text={'It looks like there are no data.'} />


  const dateArray = parseDate(date);
  return (
    <StyledApp>
      <header>
        <h1>Foreign exchange market rates of CZK</h1>
      </header>
      <div className="app-content">
        <section className="column">
          {isFetching && <div className='fetching'>Updating data</div>}

          <h2>Exchange rate overview</h2>

          {/* Date change is not implemented */}
          <div className="date-select">
            <span>Select date:&nbsp;</span>
            <DatePicker selected={new Date(dateArray.year, dateArray.month, dateArray.day)} onChange={handleDateChange} disabled />
          </div>

          <Rates rates={rates} headers={headers} targetCurrency={targetCurrency} />
        </section>

        <section className="column">
          <h2>Exchange rate calculator</h2>
          <RateCalculator
            rates={rates}
            targetCurrency={targetCurrency}
            onTargetCurrencyChange={setTargetCurrency}
          />
        </section>
      </div>
      <footer>
        Source of rates: <a href="https://www.cnb.cz/">ČNB</a>
      </footer>
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
