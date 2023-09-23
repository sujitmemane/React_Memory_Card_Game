import { useState } from "react";
import "./App.css";
import { Cards } from "./content";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState(() => {
    return Cards;
  });
  const [turns, setTurns] = useState(0);
  const [firstOpenCard, setFirstOpenCard] = useState(null);
  const [secondOpenCard, setSecondOpenCard] = useState(null);
  const toggleCardHandler = (id) => {
    setTurns((prev) => prev + 1);
  };

  return (
    <>
      <div className="my-8 mx-auto">
        <h1 className="text-4xl font-bold text-center">Memory Card Game</h1>
        <div className="w-[45%] mx-auto my-6 ">
          <div className=" grid grid-cols-3    justify-center justify-items-stretch  ">
            {cards.map((card) => (
              <Card key={card.id} card={card} onCardClick={toggleCardHandler} />
            ))}
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center">Turns : {turns}</h2>
      </div>
    </>
  );
}

export default App;
