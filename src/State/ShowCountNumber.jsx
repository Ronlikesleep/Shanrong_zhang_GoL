import React, { useEffect, useState, useContext } from 'react';
import { BlackGridCountContext } from "./BlackGridCountProvider";
import { ClassNameContext } from './ClassNameProvider';
import { GridSizeContext } from './GridSizeProvider';
export default function ShowCoundNumber() {
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const [gridSize, setGridSize] = useContext(GridSizeContext);
    useEffect(() => {
        const newBlackGridNumber = calculateBlackGridNumber(classNameList.classNames);
        setBlackGridNumber(newBlackGridNumber);
    }, [gridSize, classNameList]);


    function calculateBlackGridNumber(list) {
        const clickedCount = list.filter(className => className === 'grid-item-Clicked').length;
        return clickedCount;
    }
    return (<h1>
        Current Living Cells:{BlackGridNumber}
    </h1>)
}