const obj = {}
import Toast from './Toast'

obj.install = function(vue) {
  
  const toastContrustor = vue.extend(Toast)
  const toast = new toastContrustor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  vue.prototype.$toast = toast
}

export default obj
