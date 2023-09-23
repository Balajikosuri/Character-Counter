import './index.css'
import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

class CharacterCounter extends Component {
  state = {
    CharacterList: [],
    inputValue: '',
  }

  onCLickAddBtn = () => {
    const {inputValue} = this.state
    const listItem = {
      id: uuidV4(),
      sentence: inputValue,
    }

    if (inputValue !== '') {
      this.setState(prevState => ({
        CharacterList: [...prevState.CharacterList, listItem],
        inputValue: '',
      }))
    }
  }

  onChangeInput = e => this.setState({inputValue: e.target.value})

  renderNoUserSection = () => (
    <div className="no-user">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
        alt="no user inputs"
      />
    </div>
  )

  render() {
    const {CharacterList, inputValue} = this.state
    console.log(CharacterList)

    return (
      <div className="CharacterCounter">
        <div className="char-count">
          <div className="char-count-header">
            <h1 className="char-count-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div className="char-count-content">
            {CharacterList.length !== 0 ? (
              <ul className="chars-items">
                {CharacterList.map(eachChar => (
                  <li className="chars-item" key={eachChar.id}>
                    <p className="character-its-count">
                      {eachChar.sentence}: {eachChar.sentence.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              this.renderNoUserSection()
            )}
          </div>
        </div>
        <div className="char-input">
          <h1 className="char-input-heading">Character Counter</h1>
          <form
            onSubmit={e => {
              e.preventDefault()
            }}
            className="input-section"
          >
            <input
              value={inputValue}
              onChange={e => this.onChangeInput(e)}
              className="form-control user-input"
              type="text"
              placeholder="Enter the Characters here"
            />
            <button
              onClick={() => this.onCLickAddBtn()}
              className="add-btn"
              type="button"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
