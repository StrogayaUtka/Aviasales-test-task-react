import React from "react";
import {format, add} from 'date-fns'
import { timeCalc, writeTransfers } from "../helperFunc/helperFunc";

import './ticket.css'

export const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">

            <div className="price">
                {ticket.price.toString().slice(0, -3) + ' ' + ticket.price.toString().slice(-3)} Р
            </div>

            <div className="duration-label">
                В пути 
            </div>

            <div className="duration">
                {timeCalc(ticket.duration)}
            </div>

            <div className="airline">
                <img
                    src={`https://pics.avs.io/180/50/ + ${ticket.airline.toString()} +.png`}
                    alt={ticket.airline} />
            </div>

            <div className="departure">
                {format(new Date(`${ticket.departure_at}`),"H':'mm")} - {format(add(new Date(`${ticket.departure_at}`), {minutes: ticket.duration}),"H':'mm")}
            </div>

            <div className="route-path">
            {ticket.origin} &nbsp; - &nbsp; {ticket.destination}
            </div>

            <div className="transfers">
                {writeTransfers(ticket.transfers)}

            </div>
        </div>
    )
}
