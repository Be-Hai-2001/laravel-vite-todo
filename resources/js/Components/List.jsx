import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoObject from "./TodoObject";

function List(){
    // Tạo biến lưu giá trị
    const [todos, setTodos] = useState([]);
    const [checkTodo, setCheckTodo] = useState(false);

    // Xử lý lưu giá trị
    useEffect(() => {

        axios.get('/api/todo-tanks')

        .then(function (res){

            setTodos(res.data)

        })
        .catch(function (){
            //errors
        });
        
        return () => {

            // Xu li unmount
        }

    },[])

    // const CheckUpdateTodo = () => {

    //     if(checkTodo){

    //         setCheckTodo( !checkTodo );

    //         //Xử lý update
    //     } else{

    //         setCheckTodo( !checkTodo );

    //     }

    // }

    
    console.log(checkTodo);
    return(

        <div id="lst-todo">


            {
                
                todos.map( (item) => {
                    // {console.log(index)} 
                    return(
                        
                        <TodoObject  onCheckUpdateTodo = {checkTodo} content = {item.description} key={Math.random()}/>

                    )
                })

            }

        </div>

    )

}
export default List 