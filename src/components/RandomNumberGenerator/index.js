// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
    state= {number: 0}

    randomGenerator = () => {
        const randomNumber = Math.ceil(Math.random() * 100)
        this.setState(prevState => ({number: prevState.number + randomNumber}))
    }

    render() {
        const {number} = this.state
        return (
            <div className="container">
                <div className="counter-container">
                    <h1>Random Number</h1>
                    <p className="description">
                       Generate a random number in the range of 0 to 100
                    </p>
                    <button type="button" onClick={this.randomGenerator}>
                       Generate
                    </button>
                    <p className="count">{number}</p>
                </div>
            </div>
        )
    }
}

export default RandomNumberGenerator