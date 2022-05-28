import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

const SideBarOption = ({ Icon, text, addChannelOption, id }) => {
  
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if(channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  const selectChannel = () => {

  }

  return (
    <SideBarOptionsContainer onClick={ addChannelOption ? addChannel : selectChannel } >
      {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
      {Icon ?
        (<h3>
          {text}
        </h3>) :
        (
          <SideBarOptionChannel>
            <span>#</span> {text}
          </SideBarOptionChannel>
        )
      }
    </SideBarOptionsContainer>
  )
}

export default SideBarOption;

const SideBarOptionsContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
  align-items: center;
  padding-left: 0.125rem;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

`;

const SideBarOptionChannel = styled.div`
  >h3 {
    font-weight: 500;
  }
  
  >h3 >span {
    padding: 0.938rem;  
  }
`;