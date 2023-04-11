import { useState } from 'react'

export default function Flashcards({entries}) {
    const [index, setIndex] = useState(0);
    const [showDefinition, setShowDefinition] = useState(false);
    return (
        <div className="basecontainer">
            <div className="flashcards">
                <div className="flashcard" onClick={() => setShowDefinition(!showDefinition)}>
                    <div className="flashcardbox">
                        {entries.length === 0 && "No entries"}
                        {entries.length !== 0 && (showDefinition ? entries[index].definition : entries[index].term)}
                    </div>
                </div>
                <div className="fcbuttonbox">
                    <button disabled={index === 0} onClick={() => {
                        setIndex(index-1)
                        setShowDefinition(false)
                        }}>Prev</button>
                    <button disabled={index === entries.length-1 || entries.length === 0} onClick={() => {
                        setIndex(index+1)
                        setShowDefinition(false)
                        }}>Next</button>
                </div>
            </div>
        </div>
    )
}