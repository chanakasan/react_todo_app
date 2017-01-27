import {shallow} from 'enzyme'
import App from '../../src/components/App.jsx'

it('Displays the todo list', () => {
  const list = [{name: 'test 1'}]
  const app = shallow(<App list={list} />)

  expect(app.text()).toContain('test 1')
})

it('Can add new todo', () => {
  const list = [{name: 'test 1'}]
  const app = shallow(<App list={list} />)

  expect(app.text()).not.toContain('test 2')

  app.setState({newTodoName: 'test 2'})
  app.find('.add-btn').first().simulate('click')

  expect(app.text()).toContain('test 2')
})
