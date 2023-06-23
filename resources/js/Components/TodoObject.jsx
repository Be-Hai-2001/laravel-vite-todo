import React, { useState } from "react";

function TodoObject( props ){

    const [check, setCheck] = useState(props.onCheckUpdateTodo)

    // console.log(props.onCheckUpdateTodo)

    const  CheckInput = () => {

        if(check){

            setCheck( !check );
        }
        else {

            setCheck( !check )
            // console.log(props.content)

        }

    }
    // console.log(props.content)
    return(

        <div className="field">

            <input onClick={CheckInput} className="fl-al-ct" type="checkbox"  /> 

            <li className="fl-al-ct"> {props.content} </li>

        </div>

    )

}
export default TodoObject