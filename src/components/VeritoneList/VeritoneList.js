import React from "react";
import { ChallengeContainer, InputSection, UnorderedListSection } from "./VeritoneList.style";
import { useState } from "react";

const VeritoneList = () => {

    // This sets the state of the listArray variable with the default being an empty array.
    const [listArray, setListArray] = useState([]);

    // This sets the state of the itemInput with the default being an empty string.
    const [itemInput, setItemInput] = useState("");

    // This sets the state of the descending boolean with the default being 'true'.
    const [descending, setDescending] = useState(true);

    // Function used to add an item to the listArray when the user presses down on Enter key and the itemInput is not empty.
    const addItem = (e) => {
        if (e.code == "Enter" && itemInput.trim()) {
            setListArray(listArray.concat(itemInput));
            setItemInput("");
        }
    }

    // Function used to set the listArray to an empty array and set the itemInput to an empty string.
    const clearList = () => {
        setListArray([]);
        setItemInput("");
    }

    return (
        <ChallengeContainer>
            <InputSection>
                <input 
                    type="text" 
                    id="listInput" 
                    placeholder="Enter a new list item" 
                    value={itemInput} 
                    onChange={(e) => { setItemInput(e.target.value) }} 
                    onKeyDown={(e) => addItem(e)} 
                />
                {descending ?
                    <button className="order" onClick={() => setDescending(false)} title="Reverse Order">
                        <span className="material-icons-outlined">arrow_downward</span>
                    </button> :
                    <button className="order" onClick={() => setDescending(true)} title="Reverse Order">
                        <span className="material-icons-outlined" >arrow_upward</span>
                    </button>
                }
                <button className="clear" onClick={() => clearList()} title="Clear List">
                    <span className="material-icons-outlined">clear</span>
                </button>
            </InputSection>
            <UnorderedListSection>
                {descending ? listArray.sort().map((item, index) => {
                    return <li item={item} key={index}>{listArray[index]}</li>;
                }) : listArray.sort().reverse().map((item, index) => {
                    return <li item={item} key={index}>{listArray[index]}</li>;
                })}
            </UnorderedListSection>
        </ChallengeContainer>
    )
}

export default VeritoneList;