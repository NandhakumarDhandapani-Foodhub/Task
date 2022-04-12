import React from 'react'
import {useSelector} from "react-redux";
//import {useLocation} from 'react-router-dom'
import {useDispatch}  from "react-redux";
import {useEffect} from "react";

const Show = () => {

    const dispatch = useDispatch()

    // const {display} = useSelector((state) => ({
    //     display: state.display,
    // }));


    const data = useSelector((state)=> ({
           display: state.tests.display
    })

    );
    console.log(data)


    // const location = useLocation();
    //
    // const myParam = location.state.params



    return (
        <>
            <div className='App'>

            <h2>{data.display.id}</h2>
            <h3>{data.display.row.name}</h3>
            <h4>{data.display.row.email}</h4>
            <h5>{data.display.row.body}</h5>
            </div>
        </>
    )
}
export default Show