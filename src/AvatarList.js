import React from 'react'
import 'tachyons'
import './Avatar.css'

const AvatarList = (props) => {
    return(
        
        <div className="avatarstyle bg-light-purple ma4 dib pa4 tc grow text-white">
            <img alt = "avatar" src={require('./'+props.im)}/>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
          
    )

}

export default AvatarList;