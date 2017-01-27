import {shallow} from 'enzyme'
import App from '../../src/components/App.jsx'

describe('Todos crud actions', function () {
  it('Displays the todo list', () => {
    const list = [{name: 'test 1'}]
    const app = shallow(<App list={list} />)

    expect(app.text()).toContain('test 1')
  })

  it('Can add new todo', () => {
    const list = [{name: 'test 1'}]
    const app = shallow(<App list={list} />)

    expect(app.state().list).toHaveLength(1)
    expect(app.text()).not.toContain('test 2')

    app.setState({newTodoName: 'test 2'})
    app.find('.add-btn').first().simulate('click')

    expect(app.text()).toContain('test 2')
    expect(app.state().list).toHaveLength(2)
  })

  it('Can remove todo', () => {
    const list = [{name: 'test 1'}]
    const app = shallow(<App list={list} />)

    expect(app.text()).toContain('test 1')

    app.find('.todo-item').first().find('.remove-btn').first().simulate('click')

    expect(app.text()).not.toContain('test 1')
    expect(app.state().list).toHaveLength(0)
  })

  it('Ignores duplicate entries', () => {
    const list = [{name: 'test 1'}]
    const app = shallow(<App list={list} />)

    expect(app.state().list).toHaveLength(1)

    app.setState({newTodoName: 'test 1'})
    app.find('.add-btn').first().simulate('click')

    expect(app.state().list).toHaveLength(1)
  })

  it('Ignores blank entries', () => {
    const list = [{name: 'test 1'}]
    const app = shallow(<App list={list} />)

    expect(app.state().list).toHaveLength(1)

    app.setState({newTodoName: ' '})
    app.find('.add-btn').first().simulate('click')

    app.setState({newTodoName: '    '})
    app.find('.add-btn').first().simulate('click')

    expect(app.state().list).toHaveLength(1)
  })
})
