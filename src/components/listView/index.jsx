import axios from 'axios';
import useStyles from './style';
import React, { useEffect, useState } from 'react';
import Deal from '../deal';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const ListView = (props) => {
  console.log(props)
  const classes = useStyles();
  let [responseData, setResponseData] = useState('');

  const fetchData = () => {
    axios({
      "method": "GET",
      "url": "https://bakesaleforgood.com/api/deals",
      "headers": {
        "content-type": "application/application.json",
      },
    })
      .then((response) => {
        console.log(response.data)
        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  useEffect(() => {
    fetchData()
  }, [])


  const searchTerm = (searchValue) => {
    axios({
      "method": "GET",
      "url": `https://bakesaleforgood.com/api/deals?searchTerm=${searchValue}`,
      "headers": {
        "content-type": "application/application.json",
      },
    })
      .then((response) => {
        console.log(response.data)
        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  useEffect(() => {
    searchTerm(props.searchValue)
  }, [props.searchValue])

  return (
    <div className={classes.root}>
      <Box className={classes.cardContainer}>
      {responseData && responseData.map((deal) => (
        <div>
          <Box>
          </Box>
          <Deal title={deal.title} price={deal.price} cause={deal.cause.name} image={deal.media[0]} />
        </div>
      ))}
     </Box>
      <Box className={classes.parent}>
            <div > <Typography gutterBottom variant="h5" component="h2">
              Details of deal here .........
            </Typography></div>
          </Box>
      </div>
    
  );
}

export default ListView;
