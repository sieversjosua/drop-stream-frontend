import React, { Component } from 'react';
import axios from 'axios';
import classes from './Content.module.css';


class Content extends Component {

    state = {
        loaded: false
    }

    componentDidMount(){
        if(!this.state.loaded){
            axios.get(`/meme/${this.props.id}`)
                .then(response => {
                    this.setState({loaded: true, img: response.data})
                });
        }
    }

    componentDidUpdate(){
        // console.log('updated Content');
    }

    render() {
        const meme = this.props.position < 3 ? 
            <img 
                alt={`Meme ${this.props.id}`} 
                className={classes.Meme} 
                src={`http://localhost:5000/meme/${this.props.id}`} /> : [];
                
        return(
            <div className={classes.Content}>
                {meme}
            </div> 
        )
    }
}

export default Content;