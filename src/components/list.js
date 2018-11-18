import React from 'react';

export default props => (
    <ul>
        {props.items.map(({ href, label }, i) => (
            <li key={i}>
                <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            </li>
        ))}
    </ul>
);
