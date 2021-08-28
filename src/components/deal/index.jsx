import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

const Deal=({title,price,cause,image}) =>{
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom  className={classes.label}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        view Details
      </Button>
    </CardActions>
  </Card>
  );
}

export default Deal;
