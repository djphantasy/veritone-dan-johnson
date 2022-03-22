import styled from "styled-components";

export const ChallengeContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px 10px;
`

export const InputSection = styled.section `
    display: flex;
    justify-content: center;
    

    input {
        margin: 5px;
        border-radius: 5px;
        padding: 0px 10px;
        border: 2px solid rgb(78, 153, 211);
    }
    
    input:focus {
        box-shadow: 0 0 3px 2px rgba(0, 0, 150, 0.7);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        box-sizing: border-box;
    }

    button.order {
        color: white;
        border: 2px solid rgb(78, 153, 211);
        background-color: rgb(78, 153, 211);
        transition-property: color, background-color, box-shadow;
        transition-duration: 0.3s;
        box-shadow: 0 0 0px 0px rgba(0, 0, 150, 0.2);
    }

    button.order:hover {
        color: rgb(78, 153, 211);
        background-color: white;
        box-shadow: 0 0 3px 2px rgba(0, 0, 150, 0.2);
    }

    button.clear {
        color: white;
        border: 2px solid maroon;
        background-color: maroon;
        transition-property: color, background-color, box-shadow;
        transition-duration: 0.3s;
        box-shadow: 0 0 0px 0px maroon;
    }

    button.clear:hover {
        color: maroon;
        background-color: white;
        box-shadow: 0 0 3px 2px rgba(150, 0, 0, 0.2);
    }
`;

export const UnorderedListSection = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    font-size: 18px;
    text-transform: capitalize;
`