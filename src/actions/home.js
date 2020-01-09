import { requestGet } from '@/utils/request'
import { requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'
import Apis from '@/services/api'

export const home = createActions({
    // CESHI: options => request(services.listWithPage),
    LOADING: options => options,
    SET_DATA: options => requestPost(Apis.listData, options),
  })

