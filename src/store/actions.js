export default {
  addCart(context, payload){
    // let oldProduct = null
    // for(let item of context.state.carlist){
    //   if(item.iid == payload.iid){
    //     oldProduct = item
    //   }
    // }
    return new Promise((resolve) => {
      let oldProduct = context.state.carlist.find(item => {
        return item.iid === payload.iid
      })
      if(oldProduct){
        context.commit('addCount', oldProduct)
        resolve('添加商品成功')
      }else{
        payload.count = 1
        context.commit('addTocar', payload)
        resolve('添加商品成功')
      }
    })
  }
}
