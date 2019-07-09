import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
const ExperimentCard = (props) => {
    return(
        <div>
            { props.experiment ? (
                <Card >
                    <CardMedia style={{height: 0, padding: '30%'}}
                      image={require('./abc.jpg')}
                      title={props.experiment.name || ''}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.experiment.title || ''}
                    </Typography>
                    <Typography component="p">
                        {props.experiment.description || ''}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" onClick={() => props.history.push(props.experiment.url)} target="_blank">
                        Go <ArrowForwardIcon/>
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default withRouter(ExperimentCard)
