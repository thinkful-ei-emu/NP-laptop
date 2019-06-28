import React from 'react';
import SpecChoice from './SpecChoice';

function TechForm(props) {
    return <div>{
        Object.keys(props.features)
            .map(key => {
                const options = props.features[key].map((item, index) => {
                    return <SpecChoice key={index}
                        selectedChoice={props.selected[key]}
                        item={item}
                        itemType={key}
                        updateFeature={props.handleUpdate} />
                });

                return <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        {options}
                    </ul>
                </div>
            })

    }</div>
}

export default TechForm;