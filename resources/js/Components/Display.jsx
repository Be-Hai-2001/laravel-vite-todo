import React from "react";
import Create from "./Create";
import List from "./List";

function Display(){
    return(

        <div id="display">

            <>
            
                <div id="title-todo">TODO</div>


                <div style={{textAlign:"center"}}>

                    <Create/>

                </div>

                <div id="display-list">

                    <List/>

                </div>
            </>

        </div>

    )
}
export default Display