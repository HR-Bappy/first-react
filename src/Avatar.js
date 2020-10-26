import React from 'react'
import AvatarList from './AvatarList'
import 'tachyons'
import './Avatar.css'

const Avatar = (props) => {
    return(
        <div>
            <h1 className="tc">Welcome to avatar world</h1>
            <div>
                <AvatarList name="Neela" work="web developer" im="neela.jpg" />
                <AvatarList name="Nayeem" work="software developer" im="nayeem.jpg"/>
                <AvatarList name="Rakhi" work="web developer" im="rakhi.jpg"/>
                <AvatarList name="Shammah" work="web developer" im="shammah.jpg"/>
            </div>
            <button className="btn btn-border-pop">subscribe</button>
        </div>
    )

}

export default Avatar;