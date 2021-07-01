import React , {Component} from "react";
import InputButton from "./Input&Button";
import ShowTask from "./ShowTask";



class ToDoList extends Component{
    constructor(){
        super();
        this.state={
            Task : ['Hello My Friend' , 'This is a Sample To Do List'],
            input : '' ,
            Color : <span className={'ColorTask'}></span>
        }
    }

    ChangeInput= (event) =>{
        const EventTarget = event.target.value
        this.setState({
            input : EventTarget
        })
    }

    AddNewTask = () =>{
        if (this.state.input != ''){
            this.LocalStorage()
            this.setState(state=>{
                return{
                    Task : [...state.Task , this.state.input] ,
                    input : ''
                }
            })
        }
    }

    AddNewTask_KEYPRESS = (event) =>{
        if (this.state.input != '' && event.key == 'Enter'){
            this.LocalStorage()
            this.setState(state=>{
                return{
                    Task : [...state.Task , this.state.input] ,
                    input : ''
                }
            })
        }
    }



    RemoveTask= (Value) =>{
        let Tasks = [...this.state.Task]
        Tasks.splice(Value , 1)

        this.setState({
            Task : Tasks
        })
    }

    ChangeTask = (Value , Index) =>{
        let Tasks = [...this.state.Task]
        Tasks[Index] = Value

        this.setState({
            Task : Tasks
        })
    }


    LocalStorage= ()=>{
        let Local
        if (localStorage.getItem('Task') == null){
            Local = []
        }else {
            Local = JSON.parse(localStorage.getItem('Task'))
        }
        return(
            Local.push(this.state.input),
                localStorage.setItem('Task' , JSON.stringify(Local))
        )
    }

    RemoveLocal = (value)=>{
        let Local
        if (localStorage.getItem('Task') == null){
            Local = []
        }else {
            Local = JSON.parse(localStorage.getItem('Task'))
        }
        Local.splice(value ,1)

        return(
            localStorage.setItem('Task' , JSON.stringify(Local))
        )
    }

    EditLocal =(value , index)=>{
        let Local
        if (localStorage.getItem('Task') == null){
            Local = []
        }else {
            Local = JSON.parse(localStorage.getItem('Task'))
        }
        Local[index] = value

        return(
            localStorage.setItem('Task' , JSON.stringify(Local))
        )
    }


    ShowLocal=()=>{
        let Local = JSON.parse(localStorage.getItem('Task'))
        console.log(Local)
        if (Local != null){
            return(
                this.setState({
                    Task : Local
                })
            )
        }
    }




    render(){

        const Colorsss = 'red'

        return (
            <>

                <div className={'ParentAddTask'}>
                    <InputButton onChange={this.ChangeInput} value={this.state.input} AddTask={this.AddNewTask}/>
                </div>


                <div className={'ParentToDo'}>
                    <ShowTask TaskState={this.state.Task} RemoveTask={this.RemoveTask} ChangeTask={this.ChangeTask}
                     RemoveLocal={this.RemoveLocal} EditLocal={this.EditLocal} ColorTask={this.state.Color}/>

                    {document.addEventListener('DOMContentLoaded', this.ShowLocal)}
                    {document.addEventListener('keypress' , this.AddNewTask_KEYPRESS)}
                </div>
            </>
        )
    }
}

export default ToDoList