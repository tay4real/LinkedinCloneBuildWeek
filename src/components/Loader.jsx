import React from 'react'
import {VscLoading} from 'react-icons/vsc'


const Loader = () =>{
    return (
        <div className="d-flex ">
            <VscLoading  className="m-auto" style={{fontSize: "3rem"}}/>
        </div>
    )
}

export default Loader