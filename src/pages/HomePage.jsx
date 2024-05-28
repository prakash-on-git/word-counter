import { useRef, useState } from "react";

export const HomePage = () => {
    const [charLen, setCharLen] = useState(0);
    const [wordLen, setWordLen] = useState(0);
    const textRef = useRef();

    const updateData = () => {
        console.log("handlePrakash");
        const value = textRef.current.value;
        setCharLen(value.length);
        value.length ? setWordLen(value.trim().split(" ").length) : setWordLen(0);
    }

    const handleBtn = () => {
        if (!textRef.current.value) {
            alert("abbe clear hai dikh nahi raha kya!");
        }
        textRef.current.value = "";
        updateData();
    }

    return (
        <main className="mainOne">
            <div className="buttons">
                <button>Word: {wordLen}</button>
                <button>Character: {charLen}</button>
            </div>
            <div className="textAreaContainer">
                <textarea onChange={updateData} ref={textRef} data-testid="textArea" placeholder="Type/Paste your text here"></textarea>
            </div>
            <div className="clearBtnBox">
                <button onClick={handleBtn} data-testid="textBtn" className="clearBtn">Clear</button>
            </div>
        </main>
    )
}
