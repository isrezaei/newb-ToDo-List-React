import React , {Component} from 'react'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {FiEdit} from 'react-icons/fi'
import {RiCheckDoubleLine} from 'react-icons/ri'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'



class EditTask extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Value : props.Value ,
            Index : props.Index,
            Boolian : false
        }
    }

    RemoveTask= () =>{
        this.props.Remove(this.state.Index)
        this.props.RemoveLocal(this.state.Index)
    }


    SubmitEdit = (event) =>{
        if (event.key == 'Enter'){
            this.props.ChangeTask(this.state.Value , this.state.Index)
            this.props.EditLocal(this.state.Value , this.state.Index)
        }
    }
    SubmitEditBoutton = () =>{
        this.props.ChangeTask(this.state.Value , this.state.Index)
        this.ChangeBoolian()
        this.props.EditLocal(this.state.Value , this.state.Index)
    }


    ChangeBoolian = () =>{
        this.setState(state=>{
            return{
                ...state ,
                Boolian : !this.state.Boolian
            }
        })

    }


    ChangeValue= (event) =>{
        const Event = event.target.value
        this.setState(state=>{
            return {
                ...state , Value : Event
            }
        })
    }


    ChangeTask= () =>{
        this.setState(state=>{
            return{
                ...state , Boolian : !this.state.Boolian
            }
        })
    }

    DoThis = (event) =>{
        const Event = event.target
        Event.parentElement.parentElement.children[0].classList.toggle('DoingTask')
        Event.classList.toggle('TickColor')
    }




    render() {




        return (

                <div className={'Tasks'}>

                    {this.props.ColorTask}
                    <div className={'TextTask'}>
                        {this.state.Boolian ? <input className={'InputEdit'} value={this.state.Value} onKeyPress={this.SubmitEdit} onChange={this.ChangeValue}/>  : <span onClick={this.ChangeTask}>{this.state.Value}</span>}
                    </div>

                    <div className={'BTNContorls'}>
                        <button onClick={this.RemoveTask}><RiDeleteBin2Line size={'30px'} color={'#ff8a65'} /></button>
                        {this.state.Boolian ? <button onClick={this.SubmitEditBoutton}> <IoMdCheckmarkCircleOutline color={'#009faf'} size={'30px'}/> </button>: <button onClick={this.ChangeBoolian}><FiEdit color={'#009faf'} size={'25px'}/></button>}
                        <RiCheckDoubleLine color={'#bbdefb'} onClick={this.DoThis}/>
                    </div>
                </div>



        );
    }

}

export default EditTask