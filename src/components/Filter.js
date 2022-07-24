import React from "react";



const Filter = ({ toggleGreased }) => {



    return (
        <div>
            <label for="greaseFilter">Filter by Greased: </label>
            <select name="greaseFilter" onChange={toggleGreased}>
                <option value='All'>All</option>
                <option value='true'>Greased</option>
                <option value='false'>Not Greased</option>
            </select>


        </div>

    )
}

export default Filter;