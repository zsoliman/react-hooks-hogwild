import React from "react";
import Tile from "./Tile"

const TileList = ({ hogs }) => {
    return (
        <div className="ui grid container">
            {hogs.map((element, index) => {
                return (<Tile

                    name={element.name}
                    image={element.image}
                    specialty={element.specialty}
                    weight={element.weight}
                    greased={element.greased}
                    highestMedal={element["highest medal achieved"]
                    }
                    key={index}


                />

                )
            })}
        </div>
    )
}

export default TileList