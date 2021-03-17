import React from "react";
import { BookCard } from "../STRETCH_Cards/BookCard";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import "./FeedComponent.css";

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({responseData}) => {
  if (!responseData) return null;
  console.log(responseData)
  return (
    <div className={"feed"}>


      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}

      {
           responseData && responseData.data.map((d, index) => {

                    return <div key={d.name + '-' + index}>
                        {responseData.category === 'Characters' && <CharacterCard character={d}/>}
                        {responseData.category === 'Houses' && <HouseCard house={d} />}
                        {responseData.category === 'Books' && <BookCard book={d} />}

                    </div>
                })

        }


    </div>

  );
};
