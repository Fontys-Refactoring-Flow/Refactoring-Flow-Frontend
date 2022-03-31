import React, { Component } from 'react'

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            title: props.title,
            text: props.text
        }
    }
    
    render() {
        return (
            <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        );
    }
}

export default CardComponent;