import React from 'react';
import './Quotes.css'
import {NavLink} from "react-router-dom";
const Quotes = props => {
    return (
        <div>
            <div className='Phrases'>
                <p>"{props.text}"</p>
                <p>--<b>{props.author}</b>--</p>
                <NavLink to={`/phrases/${props.id}/edit`} className='btn'>Edit</NavLink>
                <button onClick={props.remove} className='btn'>Remove</button>
            </div>
        </div>
    );
};

export default Quotes;