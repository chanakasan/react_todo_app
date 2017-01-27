import {shallow} from 'enzyme'
import App from '../../src/components/App.jsx'

it('Displays the todo list', () => {
  const list = [{name: 'test 1'}]
  const app = shallow(<App list={list} />)

  expect(app.text()).toContain('test 1')
})
