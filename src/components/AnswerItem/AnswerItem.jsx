import React from "react";
import classes from "./AnswerItem.module.css"

const AnswerItem = props => {
    const classNames = [classes.AnswerItem];
    if (props.answerState)
        classNames.push(classes[props.answerState]);

    return (
        <li className={classNames.join(" ")} onClick={() => props.onAnswerClick(props.answer.id)}>

            <div className="form-check" style={{margin:'5px'}}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id={props.answer.id} style={{width:'25px', height:'25px'}}/>
            <label className="form-check-label" htmlFor={props.answer.id} style={{margin:'2px 15px', position:'relative', bottom:'7px'}}>
                {props.answer.text}
            </label>
            </div>
            
        </li>
    );
};

export default AnswerItem;