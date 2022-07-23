import React, { useState } from "react";

const Tile = ({ name, image, specialty, weight, greased }) => {

    // const [greasy, setGreasy] = useState('')
    // setDisplayInfo = () => {
    //     if (greased = true) {
    //         return 'Greased'
    //     } else { return 'Not Greased' }
    // }

    // const [displayInfo, setDisplayInfo] = useState

    const handleClick = () => {
        return (
            <div>
                {specialty},
                {weight},
                {greased}

            </div>


        )
    }

    return (
        <div className="pigTile" onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt="lil-piggy" />
            <div>
                { }
            </div>

        </div>
    )

}


export default Tile;