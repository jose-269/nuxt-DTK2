

import * as actions from './singleCar.actions'
import * as getters from './singleCar.getters'
import * as mutations from './singleCar.mutations'
import state from './singleCar.state'

export const singleCar = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}

export default singleCar;