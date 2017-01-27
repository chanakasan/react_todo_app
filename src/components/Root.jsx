import App from "./App"
import { loadState, saveState } from "./../store"

const initialState = {
  list: [
    {
      name: 'feed birds'
    },
    {
      name: 'buy cloths'
    }
  ],
}
const persistedState = loadState()
const state = persistedState === undefined ? initialState : persistedState

export default (props) => (
  <App
    {...state}
    saveState={saveState}
  />
)
