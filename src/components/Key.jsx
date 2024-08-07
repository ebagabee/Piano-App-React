import styled from "styled-components";

const KeyWrapper = styled.div`
    width: 60px;
    height: 600px;
    margin: 2px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:active {
        background-color: lightgray;
    }
`

const Key = ({ note, playNote }) => {
    return (
        <KeyWrapper onClick={() => playNote}>
            {note}
        </KeyWrapper>
    )
}

export default Key;