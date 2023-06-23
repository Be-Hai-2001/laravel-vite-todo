import axios from "axios";
import React, { useState } from "react";

function Create(){
    const [description, setDescription] = useState('');



    // onChange thay đổi giá trị ô input
    const onChangeTodo = (e) => setDescription( e.target.value ) 
    // console.log(description);

    // onClick cập nhật dữ liệu lên db
    const onClickSaveTodo = () => {

       return axios.post('/api/todo-tanks',{
        
            'user_id':'',

            'description': description,

            'is_completed': 1
        })
        .then(function(res){

            alert('Thêm mới Todo thành công..!')

            location.reload();

        })
        .catch(function (error) {

            console.log(error);

        });
    }

    return(

        <div id="imput-craet">

            <input id="description" onChange={onChangeTodo} type="text" name="todo_name" placeholder="Create a new todo..."/>
            
            <button onClick={onClickSaveTodo} className="navbar"> <i className="fa-solid fa-download"></i> </button>

        </div>

    )

}
export default Create