import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import {FaRegSmileWink} from 'react-icons/fa'
import './index.css'

export default class List extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:'',
  }

  componentDidMount(){
    console.log()
    this.token = PubSub.subscribe('findLin',(_,stateObj)=>{
      this.setState(stateObj)
      console.log(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  
  render() {
    const {users,isFirst,isLoading,err} = this.state
    console.log(this.state)
    return (
    <div>
      { 
        isFirst ? <h2 >Welcome, please enter my name. <FaRegSmileWink/></h2> :
        isLoading ? <h2>Loading......</h2> :
        err ? <h2 style={{color:'red'}}>{err}</h2>:
        users.map((userObj)=>{
          return(
            <div key={userObj.id} className="card">
              <a rel="noreferrer" href={userObj.html_url} target="_blank">
                <img alt='avatar' src={userObj.avatar_url} style={{width:'100px'}}/>
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          )
        })
      }
      </div>
    )
  }
}
