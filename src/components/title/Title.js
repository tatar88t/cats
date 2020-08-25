import stl from './title.module.scss';

import React from 'react'

const Title = () => {
    return (
        <div className= {stl.title}>
            <h1>
                Ты сегодня покормил кота?
            </h1>
        </div>
    )
}

export default Title;
