export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('app_state')

    if (serializedState === null) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (error) {
    console.log("[DEBUG] error =", error)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('app_state', serializedState)
    console.log("[LOG]", 'persisted app state')
  } catch (error) {
    console.log("[DEBUG] error =", error)
  }
}
