import React from 'react';
import { MdCheckBoxOutlineBlank,  MdCheckBox,  MdRemoveCircleOutline, } from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const todoListItem = ({todo, onRemove, onToggle}) => {
    const {id ,text, checked} = todo; // 비 구조화할당

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked} )} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default todoListItem;