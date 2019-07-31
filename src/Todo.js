import React from 'react'

function Todo(props){
    const mySty= {
        display: "inline-block"
    }
    const otherSty= {
        display: "inline-block",
        textDecoration: "line-through",
        fontStyle: "italic"
    }
    return(
        <div>
            <input type="checkbox" checked={props.completed} onChange={()=>props.handleClick(props.id)}></input>
            <h2 style={props.completed ? otherSty : mySty}>{props.desc}</h2>
        </div>
    )
}

export default Todo