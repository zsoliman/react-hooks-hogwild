import React, { useState } from "react";

const Tile = ({ name, image, highestMedal, specialty, weight, greased }) => {


    const [displayInfo, setDisplayInfo] = useState(false)

    const toggleInfo = () => {
        setDisplayInfo(!displayInfo)
    }


    const infoDiv =
        <h3>
            {specialty},
            {weight},
            {greased ? 'greased' : 'not greased'},
            {highestMedal}
        </h3>

    return (
        <div className="pigTile" onClick={toggleInfo}>
            <h3>{name}</h3>
            <img src={image} alt="lil-piggy" />
            <div>
                {displayInfo ? infoDiv : null}
            </div>

        </div>
    )

}


export default Tile;