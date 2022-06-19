import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class GitSearch extends Component {
  
    search = () =>{
        //get user input
        console.log(this.keywordElement.value);

        const{keywordElement:{value:keyword}} = this
        PubSub.publish('findLin',{isFirst:false,isloading:true})

        //send axios request
         axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
        // axios.get(`https://data.winnipeg.ca/resource/nh34-5ztm.json`).then(     //or get json from winnipeg open data
            response => {
                console.log(response.data)
                PubSub.publish('findLin',{isloading:false,users:response.data.items,err:''})
            },
            error => {
                PubSub.publish('findLin',{isloading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className='jumbotron-heading'>Search Github Users</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder='Search for "QLIN-LIU"'/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
                <hr/>
            </section>
        )
  }
}