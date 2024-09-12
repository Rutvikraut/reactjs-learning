function reducer(state,action){
    console.log(`In reducer ${state.count}`)
    switch(action.type){
        case 'Increment':
            return {...state,count:state.count+1}
        case 'Decrement':
            return {...state,count:state.count-1}
        default:
            return "Unrecognized"
    }
}

export default reducer