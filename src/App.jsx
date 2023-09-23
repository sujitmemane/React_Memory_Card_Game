import { useEffect, useState } from "react";
import "./App.css";
import { Cards } from "./content";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState(() => {
    return Cards.sort(() => Math.random() - 0.5);
  });
  const [turns, setTurns] = useState(0);
  const [firstOpenCard, setFirstOpenCard] = useState(null);
  const [secondOpenCard, setSecondOpenCard] = useState(null);
  const [points, setPoints] = useState(0);
  const toggleCardHandler = (id) => {
    if (cards.every((card) => card.show)) return;
    if (firstOpenCard && secondOpenCard) return;
    const card = cards.find((card) => card.id === id);
    if (!firstOpenCard) {
      const newCards = cards.map((card) =>
        card.id === id ? { ...card, show: true } : card
      );
      setCards(newCards);
      setFirstOpenCard(card);
    } else if (!secondOpenCard) {
      const newCards = cards.map((card) =>
        card.id === id ? { ...card, show: true } : card
      );
      setCards(newCards);
      setSecondOpenCard(card);
    }

    setTurns((prev) => prev + 1);
  };
  console.log(firstOpenCard, secondOpenCard);
  useEffect(() => {
    if (firstOpenCard?.content === secondOpenCard?.content) {
      const score = cards.filter((card) => card.show).length;
      setPoints(score);
      console.log(score);
      console.log("same");
      setFirstOpenCard(null);
      setSecondOpenCard(null);
    } else {
      setTimeout(() => {
        const newCards = cards.map((card) => {
          if (card.id === firstOpenCard.id || card.id === secondOpenCard.id) {
            return {
              ...card,
              show: false,
            };
          }
          return card;
        });
        console.log(newCards);
        setCards(newCards);
        setFirstOpenCard(null);
        setSecondOpenCard(null);
      }, 1000);
    }
  }, [firstOpenCard, secondOpenCard, cards]);

  const newGameHandler = () => {
    const newCards = cards
      .map((card) => ({ ...card, show: false }))
      .sort(() => Math.random() - 0.5);
    setCards(newCards);
    setTurns(0);
  };
  console.log("Points", points);
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
        <div className="flex justify-center items-center space-x-12">
          <h2 className="text-3xl font-bold text-center">Turns : {turns}</h2>
          <h2 className="text-3xl font-bold text-center">Points : {points}</h2>
        </div>

        {points === 12 && (
          <button
            className="text-2xl mx-auto block my-5 px-6 py-2 bg-white text-black"
            onClick={newGameHandler}
          >
            New Game
          </button>
        )}
      </div>
    </>
  );
}

export default App;
