import React, { Component } from 'react'
import './Loginpage.css'
import {login} from '../utills/index'
import {connect} from 'react-redux'
import {Login} from '../action/action.js'
import axios from 'axios'

const mapStateToProps = state => ({
    ...state
    });
    const mapDispatchToProps = dispatch => ({
        Login: (data) => dispatch(Login(data))
    })


    
 class Loginpage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handlechange=(event)=>
    {
        event.preventDefault()
      const value=event.target.value;
      
       this.setState({
           email:value,
           password:value
       })
      
    }

     gotodashboard=async ()=>
    {
        
    //   const  data={
    //         email:this.state.email,
    //         password:this.state.password
    //     }
    //    // console.log(data,'data')
    //    await axios.post('https://reqres.in/api/login',data).
    //     then(res=>{
    //         console.log(res,'data')
    //     })
     var result=await this.props.Login({ email:this.state.email,
            password:this.state.password})
           console.log(result,'result')
        
        login()

        this.props.history.push('/dashboard')
         
     }

    render() {

    
        
     

        return (
            <div className="centered">
                
                  <div className="card logincard" >
                   
                 <div className="card-body">

                      <h2>Login </h2>
                    <div class="form-outline mb-2">
                        <label  >Email address</label><br />
                        <input type="email"  onChange={this.handlechange} class="mytext" required/>

                    </div><br/><br/>

                    <div class="form-outline mb-2 ">
                        <label class="form-label">Password</label><br />
                        <input type="password"  onChange={this.handlechange} class="mytext" required/>

                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        </div>
                    </div>
                    <br/>


                    <button  type="submit" class="btn btn-primary singin" style={{"padding": "8px 34px"}} onClick={this.gotodashboard }>Sign in</button>

                    </div>
                    </div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage)