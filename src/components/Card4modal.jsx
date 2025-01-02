import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function MediaCard(props) {
    // console.log(seluser,11111)
    console.log(props.seluser,111)
   
  return (
    <>
    <Card sx={style}>
        {/* <img width={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="" /> */}
        
      {/* <CardMedia
        sx={{ height: 140 }}
        // image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADefault_pfp.jpg&psig=AOvVaw0hv18HBNDiPd2YGH9LZQDG&ust=1695531698138000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCODCn_75v4EDFQAAAAAdAAAAABAE"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          user details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <img src={props.seluser.image} alt="no image found" style={{width:100}} />
          <h2><label><b>Name:</b></label>{props.seluser.name}</h2>
          <h2><label><b>Phone:</b></label>{props.seluser.phone}</h2>
          <h2><label><b>Email:</b></label>{props.seluser.email}</h2>
          <h2><label><b>Password:</b></label>{props.seluser.password}</h2>
          <Button onClick={props.handleClose} variant='container' color='warning'>Close</Button>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    
</>
  );
}
