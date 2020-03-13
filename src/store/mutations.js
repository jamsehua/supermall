export default{
  addCount(state, payload){
    payload.count ++
  },
  addTocar(state, payload){
    payload.isCheck = true
    state.carlist.push(payload)
  }
}
