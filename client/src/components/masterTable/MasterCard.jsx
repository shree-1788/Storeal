import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { Fab} from "@mui/material";
// import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from "react-router-dom";
export default function MasterCard(props) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        props.name === "Faculty"
          ? navigate("/masterFaculty")
          : props.name === "Category"
          ? navigate("/masterCategory")
          : navigate("/masterSpecification");
      }}
      sx={{
        maxWidth: 345,
        minWidth: 300,
        minHeight: 120,
        border: "1px solid black",
        backgroundColor: props.colour,
      }}
    >
      <CardActionArea>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <h2 className="py-2">{props.name}</h2>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
