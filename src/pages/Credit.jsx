import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './../style.css';
import Nav from './../Component/Nav'
import myDogImage from '../assets/mydog.jpg';

export default function Credit() {
    return (
        <div>
            <Nav />
            <div className='cards-container'>
                <div className='credit-container'>
                    <Card sx={{ minWidth: '300px', maxWidth: '600px', minHeight: '400px' }}>
                        <CardMedia
                            sx={{ height: '200px' }}
                            image={myDogImage}
                            title="my dog"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Credit for this game
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                All made by myself.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href='https://github.com/Ronlikesleep/Shanrong_zhang_GoL'>Github Link</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='credit-container'>
                    <Card sx={{ minWidth: '300px', maxWidth: '600px', minHeight: '400px' }}>

                        <CardContent>
                            <Typography sx={{ marginTop: "20px" }} gutterBottom variant="h5" component="div">
                                Contact:
                            </Typography>
                            <Typography sx={{ marginTop: "80px" }} variant="body2" color="text.secondary">
                                Email:zhangshanrong@outlook.com
                            </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="body2" color="text.secondary">
                                EDU Email:zhang.shanr@northeastern.edu
                            </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="body2" color="text.secondary">
                                Github:https://github.com/Ronlikesleep
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    );
}