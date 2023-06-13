import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useState} from 'react';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Dashboard from '../pages/Dashboard';
import { Navigate } from 'react-router-dom';
// import { Fab} from "@mui/material";
// import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';


export default function ActionAreaCard({colour,com,name}) {


const navigate = useNavigate();

  return (
    <Card onClick={() => {name === 'Complaints' ? navigate('/complaint') : name === 'Requests' ? navigate('/request') : navigate('/')}} sx={{ maxWidth: 345, border: "1px solid black", backgroundColor: colour }} >
      <CardActionArea>
       
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <h2>{name}</h2>
         {com}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
