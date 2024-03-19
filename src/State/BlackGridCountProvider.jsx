import { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import { ClassNameContext } from "./ClassNameProvider";
import { GridSizeContext } from "./GridSizeProvider";
export const BlackGridCountContext = createContext();
export default function BlackGridCountProvider(props) {
    const [classNameList] = useContext(ClassNameContext);
    const [gridSize] = useContext(GridSizeContext);
    const [BlackGridNumber, setBlackGridNumber] = useState(0);
    useEffect(() => {
        function initialize() {
            const clickedCount = classNameList.classNames.filter(className => className === 'grid-item-Clicked').length;
            return clickedCount;
        }
        setBlackGridNumber(initialize());
    }, [classNameList, gridSize]);

    return (<BlackGridCountContext.Provider value={[BlackGridNumber, setBlackGridNumber]}>
        {props.children}
    </BlackGridCountContext.Provider>)
}