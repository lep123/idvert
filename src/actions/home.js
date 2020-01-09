import { requestGet } from '@/utils/request'
import { requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'
import Apis from '@/services/api'

export const home = createActions({
    // CESHI: options => request(services.listWithPage),
<<<<<<< HEAD
    SET_DATA: options => requestPost(Apis.listData, options),
=======
    SET_DATA: options => options,
    LOADING: options => options,
>>>>>>> 0162f362e1d3f836d790d058159833f5cea312b7
  })

