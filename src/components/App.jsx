import * as Icon from "./Icon"

export default class App extends React.Component {
  render() {
    return (
      <div className="my-app">
        <h1>Todo App</h1>
        <hr/>

        <div className="list">
          {_.map(this.props.list, (item) => (<div key={item.name}><Icon.starO/> {item.name}</div>))}
        </div>
      </div>
    )
  }
}
