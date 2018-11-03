import React from "react"
import styles from "./list.module.css"

export default props => (
    <ul className={styles.ul}>
        {props.items.map((item, i) =>
            <li key={i} className={styles.li}>
                <a href={item.href} className={styles.a} target="_blank" rel="noopener noreferrer">{item.label}</a>
            </li>
        )}
    </ul>
)
