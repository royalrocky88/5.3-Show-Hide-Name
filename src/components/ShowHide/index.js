// Write your code here

import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {fName: true, lName: true}

  firstName = () => {
    this.setState(oldState => ({fName: !oldState.fName}))
  }

  lastName = () => {
    this.setState(oldState => ({lName: !oldState.lName}))
  }

  render() {
    const {fName, lName} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-card-container">
            <div className="btn-container">
              <button type="button" className="btn" onClick={this.firstName}>
                Show/Hide Firstname
              </button>
              {!fName && <p className="describe">Joe</p>}
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={this.lastName}>
                Show/Hide Lastname
              </button>
              {!lName && <p className="describe">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
