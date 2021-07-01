import React from 'react'
import EditTask from "./EditTask";
import MakeKey from "./Key";


function ShowTask (props){
    const AllTask = props.TaskState.map((Task , index)=>{
        return(

                <div className={'ShowTask'} key={MakeKey()}>
                    <EditTask Value={Task} Remove={props.RemoveTask} Index={index} ChangeTask={props.ChangeTask} RemoveLocal={props.RemoveLocal} EditLocal={props.EditLocal} ColorTask={props.ColorTask}/>
                </div>


        )
    })
    return(
        <>
            {AllTask}
        </>
    )
}

export default ShowTask