import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { motion } from 'framer-motion';

function FaqPanel({ childClick }) {
  //Scroll Animation
  //   const [element, controls] = useScroll();
  //Toggle true and false to show answer; useState

  return (
    <StyledFaq
    //   variants={scrollReveal}
    //   animate={controls}
    //   initial='hidden'
    //   ref={element}
    >
      <AnimateSharedLayout>
        <div onClick={childClick}>
          <Toggle title='What is My Activity Level?'>
            <div className='answer' id='activity-faq'>
              <p>
                Light: Less than 2 hours of exercise per week<br></br>
                Moderate: 3-5h of exercise per week<br></br>
                High: 6-9h of exercise per week<br></br>
                Extreme: 10h + of exercise per week
              </p>
            </div>
          </Toggle>
        </div>
        <div onClick={childClick}>
          <Toggle title='What Should Be My Goal?'>
            <div className='answer'>
              <p>
                Fast Cut: Lose 2 lbs per week<br></br>
                Slow Cut: Lose 1 lb per week<br></br>
                Maintenance: Lose/Gain 0 lb per week<br></br>
                Lean Bulk: Gain 1 lb per week<br></br>
                Dirty Bulk: Gain 2 lbs per week
              </p>
            </div>
          </Toggle>
        </div>
        {/* <Toggle title='Delivery Information'>
          <div className='answer'>
            <p>
              We offer delivery service in the Greater Area of Montreal for your
            </p>
          </div>
        </Toggle> */}
      </AnimateSharedLayout>
    </StyledFaq>
  );
}

export const StyledAbout = styled(motion.div)`
  min-height: 30vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 5rem;
  color: white;
`;
const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h4 {
    padding-bottom: 0.5rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 0.23rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1.2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      font-size: 12px;
      padding: 1rem 0rem;
      line-height: 1rem;
    }
  }
`;

export default FaqPanel;
