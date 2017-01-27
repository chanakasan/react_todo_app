import * as Icon from "./Icon"
import { saveState } from "./../store"

const styles = {
  title: {
    marginBottom: '40px',
  },
  removeBtn: {
    color: 'red',
    cursor: 'pointer',
  },
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list,
      newTodoName: '',
    }
    this._handleTextInputChange = this._handleTextInputChange.bind(this)
  }

  componentDidUpdate() {
    saveState({
      list: this.state.list,
    })
  }

  _addTodo() {
    if (this.state.newTodoName === '') return

    const newTodo = {
      name: this.state.newTodoName
    }
    const list = this.state.list.concat([newTodo])
    this.setState({ list, newTodoName: '' })
  }

  _removeTodo(todo) {
    const list = _.filter(this.state.list, (item) => (item.name !== todo.name))
    this.setState({ list })
  }

  _handleTextInputChange(event) {
    this.setState({ newTodoName: event.target.value })
  }

  render() {
    return (
      <div className="my-app">
        <h1 style={styles.title}>Todo</h1>

        <div className="new-item">
          <input type="text" value={this.state.newTodoName} onChange={this._handleTextInputChange} />
          <button className="add-btn" onClick={() => this._addTodo()}>Add</button>
        </div>
        <br/>

        <div className="list">
          {_.map(this.state.list, (item) => (
          <div key={item.name} className="todo-item">
            <Icon.starO/> {item.name} &nbsp;&nbsp;<span style={styles.removeBtn} className="remove-btn" onClick={() => this._removeTodo(item)}>x</span>
          </div>
          ))}
        </div>
      </div>
      )
  }
}
