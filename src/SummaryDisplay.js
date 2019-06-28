import React from 'react';
import SummaryItem from './SummaryItem';

function SummaryDisplay(props){
  const summary = Object.keys(props.selected)
          .map(key => <SummaryItem itemType={key} key={key} userChoice={props.selected[key].name} price={props.selected[key].cost}/>)
  const total = Object.keys(props.selected)
          .reduce((acc, curr) => acc + props.selected[curr].cost, 0);    
  return(
  <section className="main__summary">
    <h3>NEW GREENLEAF 2018</h3>
    {summary}
    <div className="summary__total">
      <div className="summary__total__label">Your Price: </div>
      <div className="summary__total__value">
      { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(total) }
      </div>
    </div>
  </section>);
}
export default SummaryDisplay;