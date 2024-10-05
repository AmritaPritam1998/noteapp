import './App.css'
import image from "./assets/image.svg";
import Vector from "./assets/Vector.svg";
import Group from "./assets/Group.svg";
import { createContext, useState } from 'react';
import Modal from "react-modal";
import React from 'react';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
function Display({notes,createNotes,setActiveNotes}){
    let subtitle;
   


    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
        
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
    


    return(
        <>
        
    
        <div className="container">
            <div className="left-side">
                <h1>pocket notes</h1>
                <div className='left-footer'>
                    <button type="button"onClick={openModal}><img src={Group}/></button>
                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal">
                     <div className='modal'><strong>Create Group name:</strong></div><br></br>
                     <br></br>
                     <form>
                        <label><strong>Group Name:-</strong>  <input type="text"placeholder='Enter Group Name'/></label><br></br>
                        <div className='choose'><br></br>
                         <label><strong>Choose colour:</strong></label>
                         
                         <button style={{border: "#CCCCCC",borderRadius:"50%",width:"30px",height:"30px", margin:"10px"}}></button>
                          <button style={{background: "#FF79F2",borderRadius:"50%",width:"30px",height:"30px", margin:"10px"}}></button>
                          <button style={{background:" #43E6FC",borderRadius:"50%",width:"30px",height:"30px", margin:"10px"}}></button>
                          <button style={{background: "#F19576",borderRadius:"50%",width:"30px",height:"30px", margin:"10px"}}></button>
                          <button style={{background: "#6691FF",borderRadius:"50%",width:"30px",height:"30px", margin:"10px"}}></button>
                          <button style={{background: "#0047FF",borderRadius:"50%",width:"30px",height:"30px", margin:"10px"}}></button>
                        </div>
                        <div class="btn">
                        <button type="create"onClick={createNotes}style={{background: "#001F8B",color:"white",width:"80px",height:"30px",borderRadius:"11px",marginLeft:"300px",marginTop:"30px"}}>Create</button>
                        </div>
                          

                      </form>
                    </Modal>
                </div>
            </div>   
            <div className='right-side'>
                <div className='wrapper'>
                    <img src={image}/>
                    
                </div>
                <div className='text-wrapper'>
                    <h1>Pocket notes</h1>
                    <p>Send and receive messages without keeping your phone online.<br></br>
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
                


            </div>
    
        </div>
        

        </>
    )
}
export default Display;