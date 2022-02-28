import React from 'react';
import { createGlobalStyle } from 'styled-components';
//Image
import gym from '../img/gym-view.jpg';
import deadlift from '../';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing:0;
    margin: 0;
    padding: 0;
}
  body {
    font-family: 'Goldman', sans-serif;
    //hide scroll bar during loading animation
    overflow: hidden;

  }
    button{
      font-family: 'Goldman', sans-serif;


    }
    h1 {
        font-weight: bold;
        font-size: 2.5rem;
        text-align: center;
        padding-bottom:5%;
        /* text-shadow: 1px 2px 4px rgb(123,123,123); */

    }
    h3 {
        color: white;
        font-size: 1.5rem;
        padding-left: 1rem;
        text-align: center;
        transition: 0.7 ease-in;
    }
    h4 {
        font-weight: bold;
        font-size: 1rem;

        
    }
  
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150% ;
    }
    .panel {
        transition: 0.7s ease-out;
    }

    .panel.active {
    color: #fff;
    flex: 5;
    h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    }
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #welcome {
    background-image: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80');
  
  }

label {
  font-size: 0.7rem;
  
}

//RADIO STYLING
.radio {
  display: inline-flex;
  overflow: hidden;
  border-radius:15px;
  background-color: red;
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
}
.radio-input {
  display:none;
}
.radio-label {
  padding: 5px 10px;
  cursor: pointer;
  transition: background 0.1s;

 
  
}
//Will select every label not last of its type so Option 1 Option 2 but not option3
.radio-label:not(:last-of-type) {

  border-right: 1px solid #6F1515;
  
}
//When selected/checketed (input) + also add its adjacent so target also next radio label sibling(right below)
.radio-input:checked + .radio-label{
  background: #6F1515;
  
}
`;

export default GlobalStyle;
