import React, { useState } from "react";

import './switch.css'

export const Switch = ({onSortingChange}) => {

    const [activeBtn, setActiveBtn] = useState('cheap')

    function onSwitchClick(e) {
        if (e.target.textContent === 'самый дешевый') {
            setActiveBtn('cheap')
            onSortingChange('cheap')
        } else {
            setActiveBtn('fast')
            onSortingChange('fast')
        }
    }

    const buttonsdata = [
        { name: 'cheap', label: 'самый дешевый' },
        { name: 'fast', label: 'самый быстрый' }
    ]

    const buttons = buttonsdata.map(({ name, label }) => {
        const isActive = activeBtn === name;
        const className = isActive ? 'active' : null
        return (
            <button className={className}
                key={name}>{label}</button>
        )
    })

    return (
        <div className="switch" onClick={onSwitchClick}>
            {buttons}
        </div>
    )
}