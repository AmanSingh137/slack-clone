import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

const SideBarOption = ({ Icon, text, addChannelOption, id }) => {
 const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if(channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  const selectChannel = () => { 
    if(id){
      dispatch(enterRoom({
        roomId: id
      }));
    }
  };

  return (
    <SideBarOptionsContainer onClick={ addChannelOption ? addChannel : selectChannel } >
      {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
      {Icon ?
        (<h3>
          {text}
        </h3>) :
        (
          <SideBarOptionChannel>
            <h3><span>#</span> {text}</h3>
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
  >h3 {
    font-weight: 500;
  }
  
  >h3 >span {
    padding: 0.938rem;  
  }
`;

const SideBarOptionChannel = styled.div`
>h3 {
    font-weight: 500;
  }
  
  >h3 >span {
    padding: 0.938rem;  
  }
  padding: 10px 0;
  font-weight: 300;
  align-items: center;
`;