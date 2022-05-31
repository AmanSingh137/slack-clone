import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';

const ChatInput = ({ channelName, channelId }) => {
    const sendMessage = (e) => {
        e.preventDefault(); 
    }
  return (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #ROOM`} />
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 1.25rem;

    >form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 1.875rem;
        width: 60%;
        border: 0.063rem solid gray;
        border-radius: 0.188rem;
        padding: 1.25rem;
        outline: none;
    }

    >form > button {
        display: none !important;
    }
`;
