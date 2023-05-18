import React from "react";
import { Ticket } from "../ticket/ticket";
import './tickets.css'

export const Tickets = ({ tickets }) => {

    if (tickets) {
        return (
            <div className="tickets">
                {
                    tickets.map((ticket) => <Ticket key={ticket.link} ticket={ticket} />)
                }
            </div>
        )
    }
}