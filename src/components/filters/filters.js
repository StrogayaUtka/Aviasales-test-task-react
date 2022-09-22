import React from "react";

import './filters.css'

export const Filters = ({onFilterCheck}) => {

        return (
            <form>
                <div className="filters">
                    <h3>Количество пересадок</h3>
                    <div className="checkbox">
                        <input type="checkbox" className="typecheckbox" id="box-all" onClick={onFilterCheck}/>
                        <label htmlFor="box-all">Все</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="typecheckbox" id="box-0" onClick={onFilterCheck}/>
                        <label htmlFor="box-0">Без пересадок</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="typecheckbox" id="box-1" onClick={onFilterCheck}/>
                        <label htmlFor="box-1">1 пересадка</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="typecheckbox" id="box-2" onClick={onFilterCheck}/>
                        <label htmlFor="box-2">2 пересадки</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="typecheckbox" id="box-3" onClick={onFilterCheck}/>
                        <label htmlFor="box-3">3 пересадки</label>
                    </div>
                </div>
            </form>
        )
}