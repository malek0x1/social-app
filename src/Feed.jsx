import { Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from './components/Post';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  const [Data, setData] = useState([1,2]);

  const options = {
    method: 'GET',
    url: 'http://shibe.online/api/shibes?count=8&urls=true&httpsUrls=true',

  };

  useEffect(() => {

    axios.request(options).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <Container className={classes.container}>
      {Data.map((x) => <Post img={x} /> )}
    </Container>
  )
}

export default Feed