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
  const [Data, setData] = useState([
    "https://cdn.shibe.online/shibes/c64a387d249909f280ebf3b2cb13b352c1539882.jpg",
    "https://cdn.shibe.online/shibes/79c7393c1c58b0b61a544b580df4e09b5507dc47.jpg",
    "https://cdn.shibe.online/shibes/8bd8f32f54eed2e81180797b700f836e176520c2.jpg",
    "https://cdn.shibe.online/shibes/92d9548be795576c3d8d3ab776b61db4aa79d3b8.jpg",
    "https://cdn.shibe.online/shibes/2a420aaadd6b77f9cd4f808ce8be5c21e90ff2b7.jpg",
    "https://cdn.shibe.online/shibes/b9408f635b1b7e752bffa3ab7d975a013cd707e9.jpg",
    "https://cdn.shibe.online/shibes/3bc07da878d558eb41212b4015320ad847e5273b.jpg",
    "https://cdn.shibe.online/shibes/7c46738485e9d9fa4348ef8551a49ae4cd62529f.jpg"
  ]
  );

  // const options = {
  //   method: 'GET',
  //   url: 'http://shibe.online/api/shibes?count=8&urls=true&httpsUrls=true',

  // };

  // useEffect(() => {

  //   axios.request(options).then(function (response) {
  //     setData(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, []);


  return (
    <Container className={classes.container}>
      {Data.map((x) => <Post img={x} />)}
    </Container>
  )
}

export default Feed