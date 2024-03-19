import SingleGrid from "./SingleGrid";
import HotMapSingleGrid from "./HotMapSingleGrid";
import "./../style.css"
import { ClassNameContext } from '../State/ClassNameProvider';
import { GridSizeContext } from "../State/GridSizeProvider";
import { useContext, useState } from "react";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from "./Buttons";
import Button from '@mui/material/Button';
export default function MultiGrids(props) {
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const [gridSize, setGridSize] = useContext(GridSizeContext);
    const [isHotMapOn, setHotMap] = useState(false);
    const gridList = [];
    const gridHotMapList = [];
    const ROWNUM = gridSize[0];
    const COLNUM = gridSize[1];
    let oneGridSize = 20;
    for (let i = 0; i < ROWNUM * COLNUM; i++) {
        gridList.push(<SingleGrid className={classNameList.classNames[i]} id={i} key={i} />);
        if (classNameList.classNames[i] === 'grid-item-Clicked') {
            gridHotMapList.push(<SingleGrid className={"grid-item-Clicked-1"} id={i} key={i} />)
        } else {
            if (classNameList.counts[i] === -10) {
                gridHotMapList.push(<HotMapSingleGrid className={"grid-item-Clicked-5"} id={i} key={i} />)
            } else if (classNameList.counts[i] <= -3) {
                gridHotMapList.push(<HotMapSingleGrid className={"grid-item-Clicked-4"} id={i} key={i} />)
            } else if (classNameList.counts[i] <= 3) {
                gridHotMapList.push(<HotMapSingleGrid className={"grid-item-Clicked-3"} id={i} key={i} />)
            } else {
                gridHotMapList.push(<HotMapSingleGrid className={"grid-item-Clicked-2"} id={i} key={i} />)
            }
        }
    }

    function handleClick() {
        setHotMap(!isHotMapOn);
    }

    return (<React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <Box
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    margin: 'auto',
                    height: `${ROWNUM * oneGridSize}px`,
                    width: `${COLNUM * oneGridSize}px`,
                    gridTemplateColumns: `repeat(${COLNUM}, minmax(${oneGridSize}px, 1fr))`,
                    gridAutoRows: `${oneGridSize}px`,
                    '@media (max-width: 800px)': {
                        gridTemplateColumns: `repeat(${COLNUM}, ${oneGridSize * 0.8}px)`,
                        gridAutoRows: `${oneGridSize * 0.8}px`,
                        width: `${ROWNUM * oneGridSize * 0.8}px`,
                        height: `${ROWNUM * oneGridSize * 0.8}px`,
                    },
                    '@media (max-width: 600px)': {
                        gridTemplateColumns: `repeat(${COLNUM}, ${oneGridSize * 0.6}px)`,
                        gridAutoRows: `${oneGridSize * 0.6}px`,
                        width: `${ROWNUM * oneGridSize * 0.6}px`,
                        height: `${ROWNUM * oneGridSize * 0.6}px`,
                    },
                    '@media (max-width: 400px)': {
                        gridTemplateColumns: `repeat(${COLNUM}, ${oneGridSize * 0.3}px)`,
                        gridAutoRows: `${oneGridSize * 0.3}px`,
                        width: `${ROWNUM * oneGridSize * 0.3}px`,
                        height: `${ROWNUM * oneGridSize * 0.3}px`,
                    }
                }}
            >
                {isHotMapOn ? gridHotMapList : gridList}
            </Box>

        </Container>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
        }}><Buttons /></div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
        }}><Button variant="contained" onClick={() => handleClick()}>{isHotMapOn ? 'Hot Map Mode' : 'Regular Mode'}</Button></div>

    </React.Fragment>
    )

}