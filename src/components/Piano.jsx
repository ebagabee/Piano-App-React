import styled from "styled-components";
import Key from "./Key";

const PianoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const Piano = () => {
    const playNote = (note) => {
        const audio = new Audio(`/sounds/${note}.mp3`);
        audio.play();
    };

    return (
        <PianoWrapper>
            {notes.map(note => (
                <Key key={note} note={note} playNote={playNote} />
            ))}
        </PianoWrapper>
    )
}

export default Piano;