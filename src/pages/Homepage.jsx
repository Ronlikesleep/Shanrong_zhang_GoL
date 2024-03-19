import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TG from '@mui/material/Typography';
import './../style.css';
import Nav from './../Component/Nav'
export default function HomePage() {
    return (
        <div>
            <Nav />
            <CssBaseline />
            <Container maxWidth="m">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100%', padding: '20px', marginTop: '10px' }}>
                    <h1 >
                        Game of Life Explanation
                    </h1>
                    <TG>
                        The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.

                        This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a grid of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.
                    </TG>
                    <div className='intro-container'>
                        <h2 className="rule-title">
                            For a space that is populated:
                        </h2>
                        <ul>
                            <li>
                                Each cell with one or no neighbors dies, as if by solitude.
                            </li>
                            <li>
                                Each cell with four or more neighbors dies, as if by overpopulation.
                            </li>
                            <li>
                                Each cell with two or three neighbors survives.
                            </li>
                        </ul>
                        <h2 className="rule-title">
                            For a space that is empty or unpopulated:
                        </h2>
                        <ul>
                            <li>
                                Each cell with three neighbors becomes populated.
                            </li>
                        </ul>
                    </div>
                    <h2>
                        More Info
                    </h2>
                    <TG>
                        No more info...
                    </TG>
                </Box>

            </Container>
        </div>
    );
}