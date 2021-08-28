import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
     
      backgroundColor: theme.palette.background.paper,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap: 'wrap',
    },
   parent:{
     width:'500px'
   },
   cardContainer:{
    display:'flex',
    width:'500px',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
  }
  }));

  export default useStyles;