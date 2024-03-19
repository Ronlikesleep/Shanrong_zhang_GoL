import React, { useContext } from 'react'
import './../style.css';
import { useState } from 'react';
import { ClassNameContext } from '../State/ClassNameProvider';
import { BlackGridCountContext } from '../State/BlackGridCountProvider';
export default function SingleGrid(props) {

    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const newList = [...classNameList.classNames];
    const newCount = [...classNameList.counts];
    const id = props.id;
    function handleClick() {
        if (newList[id] === 'grid-item-unClicked') {
            setBlackGridNumber(BlackGridNumber + 1);
            newList[id] = "grid-item-Clicked";
            newCount[id] = newCount[id] >= 10 ? 10 : newCount[id] + 1;
        } else {
            setBlackGridNumber(BlackGridNumber - 1);
            newList[id] = "grid-item-unClicked";
            newCount[id] = newCount[id] <= -10 ? -10 : newCount[id] - 1;
        }
        setGridClassListName({
            classNames: newList,
            counts: newCount
        });
    }
    return (<div className={newList[props.id]} onClick={handleClick}>
    </div>)
}