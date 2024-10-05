import { useState } from "react";

function ModalShow(){
    const handleCreate=(e)=>{
        e.preventDefault();
        
    }
    
    
    return(
        <>
        <div className="overlay">
            <div className="modal">
        
            <form onCreate={handleCreate}>
                <h1>Create New group</h1>
                <label>Group Name:
                    <input type="text"placeholder="enter your group name"/>
                </label>
                <label>
                    choose colour:
                    <div className="colour">
                        <div className="colour-option"style="border: 2px solid #CCCCCC"></div>
                        <div className="colour-option"style="background: #FF79F2"></div>
                        <div className="colour-option"style="background: #43E6FC"></div>
                        <div className="colour-option"style="background: #F19576"></div>
                        <div className="colour-option"style="background: #0047FF"></div>
                        <div className="colour-option"style="background: #6691FF"></div>
                    </div>
                </label>

            </form>
    
        </div>
        </div>

        </>
    )
}
export default ModalShow;