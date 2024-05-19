import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createGoal} from '../../features/goals/goalSlice'


function GoalForm() {
  const [text, setText] = useState("");
  const dispatch=useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({text}))
    setText('')
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
       
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Please enter goals here"
          ></input>
        </div>
        <div className="form-group">
            <button type='submit' className='btn btn-block'>Add Goal</button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;