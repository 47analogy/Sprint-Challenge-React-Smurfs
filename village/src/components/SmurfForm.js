import React, { Component } from 'react'
import axios from 'axios'

class SmurfForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // addSmurf = event => {
  // removed this and event.preventDefault() to allow page to render

  addSmurf = () => {
    // add code to create the smurf using the api

    // create smurf object to post
    const addNewSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    // POST smurf to API
    axios
      .post(`http://localhost:3333/smurfs`, addNewSmurf)
      .then(response => {
        console.log('reponse', response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => {
        console.log(`There was an error posting a new smurf`)
      })
  }

  // TODO
  /*
  // grab id to know which smurf to edit
  editSmurf = id => {
    // EDIT smurf
    const updateSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    axios
      .put(`http://localhost:3333/smurfs/${id}`, updateSmurf)
      .then(response => {
        console.log('reponse', response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => {
        console.log(`There was an error updating a smurf`)
      })
  }

  deleteSmurf = id => {
    // DELETE smurf
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log('reponse', response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => {
        console.log(`There was an error updating a smurf`)
      })
  }
*/

  // // REMOVE
  // handleNameChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // //
  // handleAgeChange = event => {
  //   this.setState({ [event.target.age]: event.target.value });
  // };
  // //
  // handleHeightChange = event => {
  //   this.setState({ [event.target.height]: event.target.value });
  // };

  render () {
    return (
      <div>
        <div className='SmurfForm'>
          {/* form to add a smurf */}
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder='name'
              value={this.state.name}
              name='name'
            />
            <input
              onChange={this.handleInputChange}
              placeholder='height'
              value={this.state.height}
              name='height'
            />
            <input
              onChange={this.handleInputChange}
              placeholder='age'
              value={this.state.age}
              name='age'
            />
            <button type='submit'>Add to the village</button>
            <button onClick={this.addSmurf}>Add Smurf to the village</button>
            {/* <button onClick={() => this.editSmurf(this.state.id)}>
              Edit smurf
            </button>
            <button onClick={() => this.deleteSmurf(this.state.id)}>
              Delete smurf
            </button> */}

          </form>
        </div>
      </div>
    )
  }
}

export default SmurfForm
