import { ClassNameContext } from '../State/ClassNameProvider';
import { BlackGridCountContext } from "../State/BlackGridCountProvider";
import { GridSizeContext } from '../State/GridSizeProvider';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useContext, useState, useEffect } from 'react';

export default function AutoClick(props) {
    const [isAutoClickOn, setAutoClick] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const [gridSize, setGridSize] = useContext(GridSizeContext);
    const ROWNUM = gridSize[0];
    const COLNUM = gridSize[1];

    const direction = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]];
    function handleClick() {
        setGridClassListName((currList) => {
            const tempList = [...currList.classNames];
            const tempCountList = [...currList.counts];
            setBlackGridNumber((currentBlackGridNumber) => {
                let tempNum = currentBlackGridNumber;
                for (let i = 0; i < ROWNUM * COLNUM; i++) {
                    let numOfNeighborChecked = 0;
                    let x = Math.floor(i / COLNUM);
                    let y = Math.floor(i % COLNUM);
                    for (let j = 0; j < direction.length; j++) {
                        let newX = x + direction[j][0];
                        let newY = y + direction[j][1];
                        if (newX >= 0 && newX < ROWNUM && newY >= 0 && newY < COLNUM && currList.classNames[newX * COLNUM + newY] === 'grid-item-Clicked') {
                            numOfNeighborChecked++;
                        }
                    }
                    if (currList.classNames[x * COLNUM + y] === 'grid-item-Clicked') {
                        if (numOfNeighborChecked < 2) {
                            tempList[i] = 'grid-item-unClicked';
                            tempCountList[i] = tempCountList[i] <= -10 ? -10 : tempCountList[i] - 1;
                            tempNum--;
                        } else if (numOfNeighborChecked <= 3) {
                            continue;
                        } else {
                            tempList[i] = 'grid-item-unClicked';
                            tempCountList[i] = tempCountList[i] <= -10 ? -10 : tempCountList[i] - 1;
                            tempNum--;
                        }
                    } else {
                        if (numOfNeighborChecked === 3) {
                            tempList[i] = 'grid-item-Clicked';
                            tempCountList[i] = tempCountList[i] >= 10 ? 10 : tempCountList[i] + 1;
                            tempNum++;
                        }
                    }
                }
                return tempNum;
            });
            return {
                classNames: tempList,
                counts: tempCountList
            };
        });
    }


    function handleAutoClick() {
        setAutoClick(prevIsAutoClickOn => {
            if (!prevIsAutoClickOn) {
                const newIntervalId = setInterval(handleClick, 100);
                setIntervalId(newIntervalId);
                return true;
            } else {
                clearInterval(intervalId);
                return false;
            }
        });
    }

    return (
        <Button variant="contained" onClick={() => handleAutoClick()}>{isAutoClickOn ? 'Stop' : 'Start'}</Button>

    );


}