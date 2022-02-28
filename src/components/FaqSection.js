import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

function FaqSection() {
  //Scroll Animation
  const [element, controls] = useScroll();
  //Toggle true and false to show answer; useState
  const [faqToggle, setFaqToggle] = useState(false);
  return (
    <StyledFaq
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              laudantium.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              laudantium.
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              laudantium.
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products Do You Offer'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              laudantium.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
}
const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export default FaqSection;
