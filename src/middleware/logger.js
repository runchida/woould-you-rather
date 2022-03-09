const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('Action: ', action)
    const returnValue = next(action)
    console.log('New State: ', store.returnValue)
    console.groupEnd()
    return returnValue
}

export default logger