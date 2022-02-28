import React, { useState } from 'react';
import styled from 'styled-components';
//Individual Panel Content
import CaloriesPanel from './CaloriesPanel';
import FaqPanel from './FaqPanel';
//Image
import logo from '../img/logo.jpg';
//Utility Styles
//Animation
import { motion } from 'framer-motion';
import { titleAnimation, containerAnim } from '../animation';

function Panel() {
  //STATES
  //STATE: Active Panel => CREATE 4 FOR EACH PANEL // Makes them asynchronous
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  //EVENT HANDLERS

  //EVENT HANDLERS #1 => Active Panel Toggle
  //4 Panel; so need 4 functions
  //Function for each
  const toggleHandler1 = () => {
    isActive1 ? setIsActive1(false) : setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };

  const toggleHandler2 = () => {
    isActive2 ? setIsActive2(false) : setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
  };

  const toggleHandler3 = () => {
    isActive3 ? setIsActive3(false) : setIsActive3(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive4(false);
  };

  const toggleHandler4 = () => {
    isActive4 ? setIsActive4(false) : setIsActive4(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };
  //EVENT HANDLER #2 => Stop event propagation into Stop children div // Won't auto toggle true/false on isActive
  const childClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <ContainerTop
        variants={containerAnim}
        initial='hidden'
        animate='show'
        className='container-top'
      >
        <StyledLogo src={logo} alt='logo' />
        <motion.h1 variants={titleAnimation}>FITNESS JOURNEY</motion.h1>
      </ContainerTop>
      <StyledContainer className='container'>
        <StyledPanel
          onClick={toggleHandler1}
          id='welcome'
          className={` panel ${isActive1 ? 'active' : ''}`}
        >
          {' '}
          <h3>Welcome</h3>
        </StyledPanel>
        <StyledPanel
          onClick={toggleHandler2}
          className={`panel ${isActive2 ? 'active' : ''}`}
          id='panel-calories'
        >
          {isActive2 && <CaloriesPanel childClick={childClick} />}

          <h3>Calories</h3>
        </StyledPanel>
        <StyledPanel
          isActive2={isActive3}
          onClick={toggleHandler3}
          className={`panel ${isActive3 ? 'active' : ''}`}
        >
          {/* New stuff today */}
          {isActive3 && <FaqPanel childClick={childClick} />}
          <h3>FAQ</h3>
        </StyledPanel>
        {/* Implement Later */}
        {/* <StyledPanel
          isActive2={isActive4}
          onClick={toggleHandler4}
          className={`panel ${isActive4 ? 'active' : ''}`}
        >
          <h3>Training</h3>
        </StyledPanel> */}
      </StyledContainer>
    </div>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  padding-left: 25%;
  padding-top: 0%;
  @media (max-width: 1000px) {
    width: 80vw;
    padding-left: 10%;
  }
`;

const StyledPanel = styled.div`
  overflow: hidden;
  border-radius: 50px;
  background-color: black;
  height: 60vh;
  position: relative;
  margin: 10px;
  cursor: pointer;
  flex: 0.5;
  //Background Image (go to GlobalStyle)

  //Initially hidden (opacity of zero)
  h3 {
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 20px;
    opacity: 0;
  }

  //Opacity Active => Added to global styles
`;

const ContainerTop = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLogo = styled.img`
  width: 30vh;
  height: 18vh;
  padding-top: 10px;
  object-fit: cover;
`;
const StyledImg = styled.img`
  width: 30vh;
  height: 18vh;
  padding-top: 10px;
  object-fit: cover;
`;

//Individual Panel Styling

export default Panel;
