// import {request} from './request'
import {reques} from 'network/reques'

export function getHomeMultidata(){
  return reques({
    url: '/home/multidata',
  })
}

export function getHomedata(type, page){
  return reques({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// export function getGoodsData(type,page) {
//   return request({
//     url:'/home/data',
//     params:{
//       type,
//       page
//     }
//   })
// }