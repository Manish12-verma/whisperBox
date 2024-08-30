/* eslint-disable react/prop-types */
import {PrettyChatWindow} from "react-chat-engine-pretty"
const ChatsPage=(props)=>{
    return (
    <div style={{height:'100vh'}}>
         <PrettyChatWindow
         projectId='1f9017c5-43eb-4fca-b726-8903f3c2541e'
         username={props.user.username}
         secret={props.user.secret}
         style={{height:'100%'}}
         />
    </div>
    )
};

export default ChatsPage;