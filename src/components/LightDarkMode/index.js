// Write your code here
import Component from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {click: true}
  clickButton = () => {
    const {click} = this.state
    if (click === true) {
      this.setState(prevState => ({click: false}))
    } else {
      this.setState(prevState => ({click: true}))
    }
  }
  render() {
    const {click} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Click To Change Mode</h1>
        {click ? (
          <button
            className="button-el"
            type="button"
            onClick={this.clickButton}
          >
            Light Mode
          </button>
        ) : (
          <button
            className="button-el1"
            type="button"
            onClick={this.clickButton}
          >
            Dark Mode
          </button>
        )}
      </div>
    )
  }
}
export default LightDarkMode
