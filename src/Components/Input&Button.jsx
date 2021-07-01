import React from 'react'
import {RiPlayListAddFill} from 'react-icons/ri'


function InputButton(props){

    const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let Day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    return (
        <div className={'ParentInput'}>

            <div className={'DataSection'}>

                <section className={'DMY'}>
                    <div> {new Date().getDate()} </div>
                    <div> {Month[new Date().getMonth()]}</div>
                    <div> {new Date().getFullYear()} </div>
                </section>

                <section className={'Day'}>
                    <div>{Day[new Date().getDay()]}</div>
                </section>


            </div>




            <div className={'InputTask'}>
                <input onChange={props.onChange} value={props.value} placeholder={'Inter Your Task'}/>
                <button onClick={props.AddTask}><RiPlayListAddFill color={'#ffff'} size={'25px'}/></button>
            </div>

        </div>

    )
}

export default InputButton