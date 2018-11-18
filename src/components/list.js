import React from 'react';
import '@material/card/dist/mdc.card.min.css';

export default props => (
    <ul>
        {props.items.map(({ href, label, description }, i) => (
            <li key={i} className="mdc-card">
                <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                {description}
            </li>
        ))}
    </ul>
);
