import React, { useState, useEffect } from "react";
import './box.css'
import { Tickets } from "../tickets/tickets";
import { Switch } from "../switch/switch";
import { sortByDuraion } from "../helperFunc/helperFunc";

const Box = ({ filter }) => {

    const [rawData, setRawData] = useState(null)
    const [data, setData] = useState(null)
    const [tickets, setTickets] = useState(null)
    const [ticketCount, setTicketCount] = useState(5)
    const [filteredTickets, setFilteredTickets] = useState(null)
    const [hideButton, setHideButton] = useState(false)
    const [noTickets, setNoTickets] = useState(false)

    const MoreTicketsBtn = (
        <button type="button" className="loadMore"
            onClick={() => {
                setTicketCount(ticketCount + 5)
            }}>
            ещё билеты
        </button>)

    const NoTickets = (
        <div className="notickets">Увы, таких билетов нет</div>
    )

    const onSortingChange = (props) => {        
        if (props === 'cheap'){
            setData(rawData)
        } else {
            setData(sortByDuraion(rawData))
        }
    }

    useEffect(() => {
        const url = "https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=HKT&destination=LED&token=" + import.meta.env.VITE_API_KEY
        fetch(url)
            .then(result => result.json())
            .then((actualData) => {
                setRawData(actualData.data)
                setData(actualData.data)
                setFilteredTickets(actualData.data)
            });
    }, [])

    useEffect(() => {

        if (!data) {
            return
        }

        setTickets(filteredTickets.slice(0, ticketCount))

        if (ticketCount >= filteredTickets.length) {
            setHideButton(true)
        } else setHideButton(false)
    }, [data, filteredTickets, ticketCount])

    useEffect(() => {

        if (!data) {
            return
        }

        let newData = []

        for (let i in data) {
            if (filter.indexOf(data[i].transfers) !== -1) {
                newData.push(data[i])
            }
        }
        setFilteredTickets(newData)

    }, [data, filter])

    useEffect(() => {

        if (!tickets) {
            return
        }

        if (tickets.length <= 0) {
            setNoTickets(true)
        } else {
            setNoTickets(false)
        }
    })

    return (
        <div className="box">

            <Switch onSortingChange={onSortingChange}/>

            {noTickets ? NoTickets : <Tickets tickets={tickets} />}

            {hideButton ? null : MoreTicketsBtn}
        </div>
    )
}

export default Box