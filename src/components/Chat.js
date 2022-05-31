import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';

const Chat = () => {
  const roomId = useSelector(selectRoomId);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong>#Room-name</strong></h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>

          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>

        </ChatMessages>

        <ChatInput 
          channelId={roomId}
        />
      </>
    </ChatContainer>
  )
}

export default Chat;

const ChatMessages = styled.div`

`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 0.063rem solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 0.625rem;
  }

  >h4 > .MuiSvgIcon-root {
    margin-left: 1.25rem;
    font-size: 1.125rem;
  }
`;

const HeaderRight = styled.div`
  >p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }

  >p > .MuiSvgIcon-root {
    margin-right: 0.313rem !important;
    font-size: 1rem;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 3.75rem;
`;