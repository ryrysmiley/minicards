import { useState } from "react";

export default function Matching({entries}) {
    const [shuffledArray, setShuffledArray] = useState([]);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [prevValue, setPrevValue] = useState(-1);
    const [gameStarted, setGameStarted] = useState(false);

    /*
    Matching Game
    - Backend: Take max 20 words and put them into a list with the index as a value
    - Frontend: Display cards in a random order
    */
    //shuffle array with Fisher-Yates algorithm
    function shuffle(array) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const tempkey1 = array[i].term;
            let tempobj1 = {"special": 0};
            tempobj1[tempkey1] = i;

            const tempkey2 = array[i].definition;
            let tempobj2 = {"special": 0};
            tempobj2[tempkey2] = i;

            tempArray.push(tempobj1);
            tempArray.push(tempobj2);
        }
        for (let i = tempArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }
        return tempArray;
    }
    function handleSelect(index, value){
        //deselect
        if(index === selectedIndex){
            setSelectedIndex(-1);
            setPrevValue(-1);
            shuffledArray[index]["special"] = 0;
            return;
        }
        //check match
        if(selectedIndex === -1){
            setSelectedIndex(index);
            setPrevValue(value);
            shuffledArray[index]["special"] = 1;
        }else{
            if(prevValue === value){
                setCorrectCount(correctCount+1);
                setShuffledArray(shuffledArray.filter((card, i) => i !== selectedIndex && i !== index));
            }else{
                setIncorrectCount(incorrectCount+1);
                shuffledArray[selectedIndex]["special"] = 0;
                shuffledArray[index]["special"] = 0;
            }
            setSelectedIndex(-1);
            setPrevValue(-1);
        }
    }
    return (
        <div className="basecontainer">
            <div className="matchingcontainer">
                <button onClick={() => 
                    {
                        setShuffledArray(shuffle(entries));
                        setIncorrectCount(0);
                        setCorrectCount(0);
                        setGameStarted(true);
                    }}
                    disabled={entries.length===0}>Start Game</button>
                <p className="correct">Correct: {correctCount}</p>
                <p className="incorrect">Incorrect: {incorrectCount}</p>
                <div className="cardscontainer">
                    {shuffledArray.map((card, index) => (
                        <div key={index} className={card["special"] ?  "cardactive" : "card"} onClick={() => handleSelect(index, Object.values(card)[1])}>
                            <p>{Object.keys(card)[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
            {gameStarted && shuffledArray.length === 0 && <h1 className="gameover">You Win!</h1>}
        </div>
    )
}