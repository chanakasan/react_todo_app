import App from "./App"
import { loadState } from "./../store"

const initialState = {
  list: [ { name: 'feed birds' } ],
}
const persistedState = loadState()
const state = persistedState === undefined ? initialState : persistedState

export default (props) => (
  <App
    {...state}
  />
)
