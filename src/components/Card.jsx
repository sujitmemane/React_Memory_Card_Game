import React, { useEffect } from "react";
import Hidden from "/chinchan.png";

const Card = ({ card, onCardClick }) => {
  const show = card.show;
  const cardClickHanlder = () => {
    onCardClick(card.id);
  };

  return (
    <div
      className="bg-white   flex flex-col items-center justify-center text-black cursor-pointer h-40  m-2"
      onClick={cardClickHanlder}
    >
      {show ? (
        <h1 className="text-8xl">{card.content}</h1>
      ) : (
        <img className=" object-contain w-full h-full" src={Hidden} />
      )}
    </div>
  );
};

export default Card;
