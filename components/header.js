
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {appStyles} from '../style/theme'
import Typography from "@material-ui/core/Typography";




export const Header = (props) => {
  // console.log(appStyles().MuiCardMediaimg)
    return (
<Box mb={2.5}>
<Paper elevation={10}>

  <Card >
    <CardActionArea>
      <CardMedia
      classes ={{
        media:appStyles().MuiCardMediaimg,
        img:appStyles().MuiCardMediaimg,
      }}
        component={'img'}
        alt={props.data.os.engine}
        image={props.data.os.icon_large}
        title={props.data.os.engine}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.data.browser.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.datatype? 
          `We think Your browser is ${props.datatype} if this is not correct, please submit below.`
         : null
         }
          
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
 </Paper>
 </Box>

    )
}

