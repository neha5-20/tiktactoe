import React from "react"
import { FaTimes, FaRegCircle } from "react-icons/fa"  
import "./Icon.css"

const Icon = ({choice}) => {
    switch(choice){
        case "cross":
            return <FaTimes className="cross"/>;
        case "circle":
            return <FaRegCircle className="circle"/>;
        default:
            return ""
    }

}

export default Icon;



