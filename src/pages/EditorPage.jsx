import  { useState,useRef, useEffect } from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'
import { initSocket } from '../../socket.js'
import ACTIONS from '../../Actions.js'
import {
    useLocation,
    useParams,useNavigate,Navigate
} from 'react-router-dom';
import toast from 'react-hot-toast'

const EditorPage = () => {

  const socketRef=useRef(null)
  const location=useLocation()
  const codeRef = useRef('');
  const reactNavigator=useNavigate()
  const { roomId } = useParams();

    const [clients,setClients]=useState([])
    const [language,setLanguage]=useState('javascript')

  useEffect(()=>{
    const init=async ()=>{
      socketRef.current=await initSocket()

      socketRef.current.on('connect_error',(err)=>handleErrors(err))
      socketRef.current.on('connect_failed',(err)=>handleErrors(err))

      function handleErrors(e){
        console.log('socket error',e);
        toast.error('Socket connection failed,try again later.')
        reactNavigator('/')
      }

      if(!location.state){
          reactNavigator('/');
          return;
      }


      socketRef.current.emit(ACTIONS.JOIN,{
        roomId,
        username:location.state?.username
      });

      //Listening for joined events
     socketRef.current.on(
                ACTIONS.JOINED,
                ({ clients, username, socketId }) => {
                    if (username !== location.state?.username) {
                        toast.success(`${username} joined the room.`);
                        console.log(`${username} joined`);
                    }
                    setClients(clients);
                    socketRef.current.emit(ACTIONS.SYNC_CODE, {
                        code: codeRef.current,
                        socketId,
                    });
                }
            );

        //Listening for disconnected devents

        socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,username})=>{
          toast.success(`${username} left the room`)
          setClients((prev)=>{
            return prev.filter((client)=>client.socketId!==socketId)
          })
        })
        
    }

    

    init()

      return ()=>{
             socketRef.current.disconnect();
            socketRef.current.off(ACTIONS.JOINED);
            socketRef.current.off(ACTIONS.DISCONNECTED);
        }
  },[])


  async function copyRoomId(){
    try{
      await navigator.clipboard.writeText(roomId)
      toast.success('Room ID has been copied to your clipboard')
    }catch(err){
      toast.error('Could not copy the ROOM ID')
      console.log(err);
    }
  }

  async function copyCode(){
    try{
      const code = codeRef.current
      if(!code || code.trim() === ''){
        toast.error('No code to copy')
        return
      }
      await navigator.clipboard.writeText(code)
      toast.success('Code copied to clipboard')
    }catch(err){
      toast.error('Could not copy code')
      console.log(err);
    }
  }

  async function leaveRoom() {
    reactNavigator('/')
  }
  
  return (
    <div className='mainWrap'>


      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img 
            src="\code-sync.png" 
            className="logoImage"
            alt="logo" />
           </div>

           <h3>Connected</h3>
           <div className="clientsList">
            {
              clients.map((client)=>(
                <Client className="client" username={client.username} key={client.socketId}/>
              )
              )
            }
           </div>
        </div>

        <button className='btn copyBtn' onClick={copyRoomId}>COPY ROOM ID</button>
        <button className='btn leaveBtn' onClick={leaveRoom}>Leave</button>
      </div>

      <div className="editorWrap">
        <div className="editorHeader">
          <label htmlFor="language-select" className="languageLabel">Language:</label>
          <select 
            id="language-select"
            className="languageSelect"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="sql">SQL</option>
          </select>
          <button className='btn copyCodeBtn' onClick={copyCode} title="Copy all code to clipboard">📋 Copy Code</button>
        </div>
        <Editor  socketRef={socketRef}
                    roomId={roomId}
                    language={language}
                    onCodeChange={(code) => {
                        codeRef.current = code;
                    }} />
      </div>
      
    </div>
  )
}

export default EditorPage