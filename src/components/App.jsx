import * as Icon from "./Icon"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list,
      newTodoName: '',
    }
    this._handleTextInputChange = this._handleTextInputChange.bind(this)
  }

  _addTodo() {
    if (this.state.newTodoName === '') return

    const newTodo = {
      name: this.state.newTodoName
    }
    const list = this.state.list.concat([newTodo])
    this.setState({ list, newTodoName: '' })
  }

  _handleTextInputChange(event) {
    this.setState({ newTodoName: event.target.value })
  }

  render() {
    return (
      <div className="my-app">
        <h1>Todo App</h1>
        <hr/>

        <div className="new-item">
          <input type="text" value={this.state.newTodoName} onChange={this._handleTextInputChange} />
          <button className="add-btn" onClick={() => this._addTodo()}>Add</button>
        </div>
        <br/>

        <div className="list">
          {_.map(this.state.list, (item) => (<div key={item.name}><Icon.starO/> {item.name}</div>))}
        </div>
      </div>
      )
  }
}
