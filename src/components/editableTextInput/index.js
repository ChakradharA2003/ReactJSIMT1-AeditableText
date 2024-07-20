import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    isSave: false,
    input: '',
    savedText: '',
  }

  onInputChanges = event => {
    this.setState({input: event.target.value})
  }

  onClickedEdit = () => {
    this.setState({isSave: false})
  }

  onClickedSave = () => {
    const {input} = this.state
    this.setState({isSave: true, savedText: input})
  }

  renderView = () => {
    const {isSave, savedText, input} = this.state
    if (isSave) {
      return (
        <>
          <p className="saved-text">{savedText}</p>
          <button type="button" className="button" onClick={this.onClickedEdit}>
            Edit
          </button>
        </>
      )
    }
    return (
      <>
        <input
          type="text"
          value={input}
          className="input-field"
          onChange={this.onInputChanges}
        />
        <button type="button" className="button" onClick={this.onClickedSave}>
          Save
        </button>
      </>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="edit-card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-save-container">{this.renderView()}</div>
        </div>
      </div>
    )
  }
}
export default EditableTextInput
