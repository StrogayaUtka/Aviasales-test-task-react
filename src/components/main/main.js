import React, { useState } from "react";

import './main.css'
import { Filters } from "../filters/filters";
import Box from '../box/box.js'
import {configFilter} from '../helperFunc/helperFunc'

export const Main = () => {

    const [filter, setFilter] = useState([0, 1, 2, 3])

    onFilterCheck = (e) => {
        setFilter(configFilter(filter, e.target.id.slice(-1), e.target.checked))
        console.log(e.target.id.slice(-1))
        //console.log(filter)
    }

    return (
        <main>
            <Filters onFilterCheck={onFilterCheck}/>
            <Box filter={filter}/>
        </main>
    )
}