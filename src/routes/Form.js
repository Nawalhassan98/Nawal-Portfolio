import React,{useState, useRef} from "react";
import "./pagesstyles/Form.css"
import Button from "../components/UI/Button";
import ErrorModal from "../components/UI/ErrorModal";
import "./pagesstyles/Form.css"
import emailjs from '@emailjs/browser';


function Form(){

const form = useRef();  

  const [enteredName, setEnteredName]= useState('');
  const [enteredEmail, setEnteredEmail]= useState('');
  const [enteredSubject, setEnteredSubject]= useState('');
  const [enteredMsg, setEnteredMsg]= useState('');
  const [error, setError]=useState();


    function submitform(event){
        event.preventDefault();
        if(enteredName.trim().length===0 || enteredEmail.trim().length===0 ||
        enteredSubject.trim().length===0){
            setError({
                title:"Invalid Input",
                msg: "Please enter valid data (non-empty values)"
            });
            return;
        }
        setEnteredName('');  
        setEnteredEmail('');
        setEnteredSubject('');
        setEnteredMsg('');
        
      
        

    emailjs.sendForm('service_NH', 'template_q6vu1qk', form.current, '0gsHauKqj0nSvDVZ8')
      .then((result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });

    }

  
    function nameChangeHandler(event){
      setEnteredName(event.target.value);
    }
    function emailChangeHandler(event){
        setEnteredEmail(event.target.value);
      }
    function subjectChangeHandler(event){
        setEnteredSubject(event.target.value);
      }

    function msgChangeHandler(event){
        setEnteredMsg(event.target.value);
      }

    function errorHandler(){
         setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler}/>}
           <form ref={form} onSubmit={submitform}>
            <label>Full Name *</label>
             <input type="text" name="user_name" value={enteredName} onChange={nameChangeHandler}></input>
            <label >Email *</label>
            <input type="email" name="user_email" value={enteredEmail} onChange={emailChangeHandler}></input>
            <label>Subject *</label>
            <input type="text" name="subject" value={enteredSubject} onChange={subjectChangeHandler}></input>
            <label>Message</label>
            <textarea rows="6" name="message" type="text" value={enteredMsg} onChange={msgChangeHandler} placeholder="Type your message here"/>
            <Button className="btn" onClick={submitform}>Submit</Button>
           </form> 
          
        </div>
    )

}


export default Form;