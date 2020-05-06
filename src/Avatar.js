import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';


class Avatar extends Component{
    constructor()
    {
        super();
        this.state = {
            name: "Welcome To Avatar World!!!"
        }
    }
     nameChanged()
     {
         this.setState({
             name: "You have been redirected to another page!!!"
         })
     }
        render()
        {
            const avatarListarray = 
    [
        {
        id: 1, name: "subuhi", work: "web developer"
        },
        {
        id: 2, name: "Ruhi", work: "React developer"
        },
        {
        id: 3, name: "Shehvo", work: "SQL developer"
        },
        {
        id: 4, name: "Aiyan", work: "web designer"
        }
    ]
        const avatarArray =  avatarListarray.map((avatarCard, i)=>{
        return <AvatarList key = {i} id = {avatarListarray[i].id} 
        name ={avatarListarray[i].name} 
        work ={avatarListarray[i].work} />
    })
        return ( 
                <div className = "mainPage">
                     <h1 >{this.state.name}</h1>
                        {avatarArray}
                    <button onClick = {() => this.nameChanged()}> Subscribe </button>
            </div>
            )
        }
    }
    

export default Avatar;