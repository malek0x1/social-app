import { Container, makeStyles } from '@material-ui/core';
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
    
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,

        }
    }
}));

const Post = (props) => {
    const classes = useStyles();
    return (
        <Card sx={{ maxWidth: 800, marginTop: "40px" }} >
            <CardMedia
                className={classes.media}
                component="img"
                image={props.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Shiba Dog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque adipisci accusamus magni, voluptas deserunt commodi. Quisquam maxime provident quod? Nihil, sed consectetur officia velit quia ut labore totam libero.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post