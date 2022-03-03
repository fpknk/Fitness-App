import React, { useState } from 'react';
import styled from 'styled-components';

//Need to display if active class from parent

function CaloriesPanel({ childClick }) {
  //Values Weight, Activity Level, Goal
  //STATE: for weight, activity level, goal (as their values change)
  const [valueWeight, setValueWeight] = useState('');
  const [valueActivity, setValueActivity] = useState('');
  const [valueGoal, setValueGoal] = useState('');
  //Show/Display Calculator text only if "show" is true
  // const [showCalories, setShowCalories] = useState(false);
  //Formula
  const [formula, setFormula] = useState('');

  //Event Handlers
  //1) Update Values Checked/Inserted
  const updateWeight = (e) => {
    setValueWeight(e.target.value);
  };
  const updateActivity = (e) => {
    setValueActivity(e.target.value);
  };
  const updateGoal = (e) => {
    setValueGoal(e.target.value);
  };

  //Alternative Solution => No button but display Daily Calories Consumption
  //Only if weight is not zero, and if calories is not zero

  //2)Calculate on Click; reset weight to default
  //Use State instead?
  //Retry

  const updateFormula = () => {
    setFormula(Number(valueActivity * valueWeight + valueGoal));
    console.log(formula);
  };

  // const updateFormula = () => {
  //   formula = Number(valueWeight);
  //   setFormula(formula);
  // };
  // console.log(formula);

  // console.log(valueActivity);
  // console.log(valueGoal);

  //Need to display if active class from parent -> => Solution: do this on Panel.js
  //Cannot use If statement in JSX => have to use ternary operator

  //1)Weight -> Input text
  //2)Activity level => radio button
  // lightly active =13 / Moderately active = 14 / Highly active = 15 / Extremely Active = 16
  //3)Goal => radio button // fast Cut(1000),slow cut (500), Maintenance(0), Lean Bulk(500) , Dirty Bulk (100)
  //4)Button Calculate => button
  //Formula ->
  //Text field => "Your daily calories consumption: {totalCalories}

  return (
    <StyledCalories>
      {/* 1)WEIGHT CONTAINER */}
      {/* <div className='large-container'> */}
      <div onClick={childClick} className='weight-container'>
        <h1>Weight</h1>
        <input
          onChange={updateWeight}
          type='text'
          name='weight'
          placeholder='Current Weight in lbs'
          id='text-field'
        />
      </div>
      {/* 2)ACTIVITY CONTAINER */}
      <div onClick={childClick} className='activity-container'>
        <h1>Activity Level</h1>
        <div className='radio'>
          <input
            onChange={updateActivity}
            className='radio-input'
            type='radio'
            name='activity-radio'
            id='light-radio'
            value='14'
          />
          <label className='radio-label' htmlFor='light-radio'>
            Light
          </label>
          <input
            onChange={updateActivity}
            className='radio-input'
            type='radio'
            name='activity-radio'
            id='moderate-radio'
            value='15'
          />
          <label className='radio-label' htmlFor='moderate-radio'>
            Moderate
          </label>
          <input
            onChange={updateActivity}
            className='radio-input'
            type='radio'
            name='activity-radio'
            id='high-radio'
            value='16'
          />
          <label className='radio-label' htmlFor='high-radio'>
            High
          </label>
          <input
            onChange={updateActivity}
            className='radio-input'
            type='radio'
            name='activity-radio'
            id='extreme-radio'
            value='17'
          />
          <label className='radio-label' htmlFor='extreme-radio'>
            Extreme
          </label>
        </div>
      </div>
      {/* 3)GOAL CONTAINER */}
      <div onClick={childClick} className='goal-container'>
        <h1>Goal</h1>
        <div className='radio'>
          <input
            onChange={updateGoal}
            className='radio-input'
            type='radio'
            name='goalradio'
            id='fastcut-radio'
            value='-1000'
          />
          <label className='radio-label' htmlFor='fastcut-radio'>
            Fast Cut
          </label>
          <input
            onChange={updateGoal}
            className='radio-input'
            type='radio'
            name='goalradio'
            id='slowcut-radio'
            value='-500'
          />
          <label className='radio-label' htmlFor='slowcut-radio'>
            Slow Cut
          </label>
          <input
            onChange={updateGoal}
            className='radio-input'
            type='radio'
            name='goalradio'
            id='maintenance-radio'
            value='0'
          />
          <label className='radio-label' htmlFor='maintenance-radio'>
            Maintenance
          </label>
          <input
            onChange={updateGoal}
            className='radio-input'
            type='radio'
            name='goalradio'
            id='leanbulk-radio'
            value='500'
          />
          <label className='radio-label' htmlFor='leanbulk-radio'>
            Lean Bulk
          </label>
          <input
            onChange={updateGoal}
            className='radio-input'
            type='radio'
            name='goalradio'
            id='dirtybulk-radio'
            value='1000'
          />
          <label className='radio-label' htmlFor='dirtybulk-radio'>
            Dirty Bulk
          </label>
        </div>
      </div>
      {/* 4)BUTTON */}

      {/* <StyledButton onClick={updateFormula} onClick={childClick}>
        Calculate
      </StyledButton> */}
      {/* 4)Alternative: Display directly  */}

      <h1>
        Daily Calories:
        <br />
        {valueWeight !== '0' ||
        valueWeight !== '' ||
        valueActivity !== '' ||
        valueGoal !== ''
          ? Number(valueWeight) * Number(valueActivity) + Number(valueGoal)
          : ''}
      </h1>
    </StyledCalories>
  );
}

export default CaloriesPanel;

//Styled Calories Panel Container and Sub Container(elements)

const StyledCalories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  h1 {
    font-size: 21px;
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
  label {
    font-size: 15px;
  }
  #text-field {
    padding: 0.25rem 0.5rem;
    background-color: red;
    border: none;
  }
  input {
    color: white;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    ::placeholder {
      text-align: center;
      color: white;
      font-weight: bold;
      border: none;
    }
    button {
      border-radius: 20px;
    }
  }

  .weight-container {
    padding-bottom: 10%;
    h1 {
      margin-bottom: 10px;
    }
    @media (max-width: 1000px) {
      input {
        width: 50%;
        margin-left: 20%;
      }
    }
    @media (max-width: 600px) {
      margin: 0 1px;
      input {
        font-size: 10px;
      }
    }
  }

  .activity-container {
    padding-bottom: 10%;
    h1 {
      margin-bottom: 10px;
    }
    @media (max-width: 600px) {
      margin: 0 1px;
      label {
        font-size: 8px;
      }
    }
    //Radio Styling
  }
  .goal-container {
    padding-bottom: 10%;
    @media (max-width: 1000px) {
      margin: 0 5px;
    }
    @media (max-width: 600px) {
      margin: 0 1px;
      label {
        font-size: 8px;
      }
    }
  }
`;

//Button
const StyledButton = styled.button`
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0.25rem 1rem;
  background-color: white;
`;

//Radio STYLING
