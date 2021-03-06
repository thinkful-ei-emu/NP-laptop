import React from 'react';


function SpecChoice (props){
    const selectedClass = props.item.name === props.selected ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return <li className="feature__item">
      <div className={featureClass}
        
        onClick={e => props.updateFeature(props.itemType, props.item)}>
          { props.item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(props.item.cost) })
      </div>
    </li>
}

export default SpecChoice;