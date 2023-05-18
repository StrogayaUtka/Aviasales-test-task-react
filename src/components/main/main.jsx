import React, { useState } from "react";

import './main.css'
import { Filters } from "../filters/filters";
import Box from '../box/box'
import {configFilter} from '../helperFunc/helperFunc'

const Main = () => {

    const [filter, setFilter] = useState([0, 1, 2, 3])

    const onFilterCheck = (e) => {
        setFilter(configFilter(filter, e.target.id.slice(-1), e.target.checked))
        console.log(e.target.id.slice(-1))
    }

    return (
        <main>
            <Filters onFilterCheck={onFilterCheck}/>
            <Box filter={filter}/>
        </main>
    )
}

export default Main