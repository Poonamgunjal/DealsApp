import React,{useEffect,useState} from 'react';
import useStyles from './style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const SummaryView=(props) =>{
  const classes = useStyles();
  console.log(props,'')
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
  },[])


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
  },[props.searchValue])


  return (
    
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Deal ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Cause</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {responseData && responseData.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.key}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.cause.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}

export default SummaryView;
