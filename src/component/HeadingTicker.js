import Ticker from 'react-ticker'

const HeadingTicker=()=> {
  return (
      <div className={'ticker-container'}>
      <Ticker mode='chain' offset="50" speed={10}>
        {() => (
                <h1 style={{margin:'0px'}}>PERRICK</h1>
        )}
        </Ticker>
        </div>
  );
}

export default HeadingTicker;
