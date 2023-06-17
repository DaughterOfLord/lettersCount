/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here.
import {Component} from 'react'
import './index.css'

class lettersCalculator extends Component {
  state = {word: ''}

  getWord = e => {
    this.setState({word: e.target.value})
  }

  //   getWord = () => {
  //     const {word} = this.state
  //     if (word !== '') {
  //       this.setState({count: word.length})
  //     }
  //   }

  render() {
    const {word} = this.state
    console.log(word)
    return (
      <div className="bg-container">
        <div className="container-1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="mini-container">
            <label htmlFor="Letter">Enter the phrase</label>
            <input
              onChange={this.getWord}
              id="Letter"
              type="text"
              placeholder="Enter the phrase"
              className="input-element"
            />
          </div>
          <p className="calculation-btn">No.of Letters: {word.length}</p>
        </div>
        <div className="container-2">
          <img
            className="calculator-img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default lettersCalculator
