import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import ExperimentCard from './ExperimentCard'
import './Styles/Card.css'
import { withRouter } from 'react-router-dom'
//import TextField from '@material-ui/core/TextField';

class List extends Component {
    state = {
        experiments: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getExperiments = this.getExperiments.bind(this)
    }
    componentDidMount() {
      this.setState({ experiments: this.getExperiments() })
    }
    getExperiments = () => {
        return [
          {title: 'Material UI', url: '/Material_UI', image_url: './abc.jpg', description: ''},
          {title: 'Hooks', url: '/Hooks', image_url: './abc.jpg', description: ''},
          {title: 'Singleton', url: '/Singleton', image_url: './abc.jpg', description: ''},
        ]
    }
    render() {
        return (
            <div>
                { this.state.experiments ? (
                    <div>
                        <Grid container spacing={5} style={{padding: 24}}>
                            { this.state.experiments.map(currentExp => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <ExperimentCard
                                      experiment={currentExp}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No items found" }
            </div>
        )
    }
}
export default withRouter(List)
