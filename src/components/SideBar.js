import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBarOption from './SideBarOption';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../firebase';
import { useCollection } from "react-firebase-hooks/firestore";

const SideBar = () => {

    const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SideBarContainer>
        <SideBarHeader>
            <SideBarInfo>
                <h2>Aman</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Aman Kumar Singh
                </h3>
            </SideBarInfo>
            <CreateIcon />
        </SideBarHeader>

        <SideBarOption Icon={InsertCommentIcon} text="Threads" />
        <SideBarOption Icon={InboxIcon} text="Mentions & Reactions" />
        <SideBarOption Icon={DraftsIcon} text="Drafts" />
        <SideBarOption Icon={BookmarkBorderIcon} text="Channel Browser" />
        <SideBarOption Icon={PeopleAltIcon} text="People and User Groups" />
        <SideBarOption Icon={AppsIcon} text="Apps" />
        <SideBarOption Icon={FileCopyIcon} text="File Browser" />
        <SideBarOption Icon={ExpandLessIcon} text="Show Less" />
        <hr />
        <SideBarOption Icon={ExpandMoreIcon} text="Channels" />
        <hr />
        <SideBarOption Icon={AddIcon} addChannelOption text="Add Channel" />

        {
            channels?.docs.map((doc)=>{
                return <SideBarOption key={doc.id} addChannelOption text={doc.data().name} />
                
            })
        }
    </SideBarContainer>
  )
}

export default SideBar;

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 0.063rem solid #49274b;
    max-width: 16.25rem;
    margin-top: 3.75rem;

    > hr{
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;  
        border: 0.063rem solid #49274b;
    }
`;


const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 0.063rem solid #49274b;
    /* padding-bottom: 0.625rem; */
    padding: 0.813rem;

    > .MuiSvgIcon-root {
        padding: 0.5rem;
        color: #49274b;
        font-size: 1.125rem;
        background-color: white;
        border-radius: 999px;
        cursor: pointer;
        :hover {
            opacity: 0.9;
            background-color: #49274b;
            color: white;
        }
    }

`;


const SideBarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 0.9rem;
        font-weight: 900;
        margin-bottom: 0.313rem;
    }
    > h3 {
        display: flex;
        font-size: 0.813em;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 0.875rem;
        margin-top: 0.063rem;
        margin-right: 0.125rem;
        color: green;
    }
`;
