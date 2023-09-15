
import * as actions from './seminuevosCars.actions'
import * as getters from './seminuevosCars.getters'
import * as mutations from './seminuevosCars.mutations'
import state from './seminuevosCars.state'

export const seminuevosCars = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}

export default seminuevosCars;