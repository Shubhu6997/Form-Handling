import {React, Component} from "react";

const emailvalidation = RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      fullname : "",
      email : "",
      role : "react",
      termsAndCond : false,
      errors : {
        fullname : "",
        email : "",
        termsAndCond : ""

      }

    }
  }

  handleChange = ({target : {name, type, value, checked}}) =>{
    if(type === "checkbox")
      value = checked;
    
    const errors = this.state.errors;

    switch(name){
      case "fullname" : {
        if(value.length<=5)
          errors.fullname = "fullname should be atleast 6 characters";
        else
          errors.fullname = "";
        break;
      }
      case "email" : {
        if(value.name<=5)
          errors.email = "email should be atleast 6 characters";
        else if (!emailvalidation.test(value)){
          errors.email = "Invalid Email";
        }else{
          errors.email = "";
        }
        break;
      }
      case "termsAndCond" : {
        if(!value)
          errors.termsAndCond = "Please accept Terms and condition to submit";
        else  
          errors.termsAndCond = "";
        break;
      }
    }
    console.log()
    this.setState({[name] : value, errors});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }
  
  render(){
    return(<>
      <form onSubmit = {this.handleSubmit}>
        <input type = "text" 
          name = "fullname" 
          value = {this.state.fullname}
          onChange = {this.handleChange} 
          placeholder = "fullname"/>
        
        <span>{this.state.errors.fullname}</span>
        <br/><br/>

        <input type = "email" 
          name = "email" 
          value = {this.state.email}
          onChange = {this.handleChange} 
          placeholder = "email"/>
                
        <span>{this.state.errors.email}</span>
        <br/><br/>

        Role <select name = "role" onChange = {this.handleChange}>
          <option value = "react">React Developer</option>
          <option value = "front_end">Front End Developer</option>
          <option values = "backend">Backend Developer</option>
        </select>
        <br/><br/>

        <input type = "checkbox"
           name = "termsAndCond" 
           value = {this.state.termsAndCond} 
           onChange = {this.handleChange}/>Accepts Tearms and Conditions
                   
        <span>{this.state.errors.termsAndCond}</span>
        <br/><br/>

        <input type = "submit" />
      </form>
    </>);
  }
}

export default App;




