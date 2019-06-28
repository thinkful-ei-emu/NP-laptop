import React from 'react';

function SummaryItem(props){
  return (
        <div className="summary__option">
            <div className="summary__option__label">{props.itemType}  </div>
            <div className="summary__option__value">{props.userChoice}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.price) }
            </div>
        </div>
        );
}

export default SummaryItem;