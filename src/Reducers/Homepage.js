let initialState = {

}

let homepage = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return {...state}
    default:
        return {}
  }
}

export default homepage
