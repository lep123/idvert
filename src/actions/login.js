import { requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'

export const login = createActions({
    // CESHI: options => request(services.listWithPage),
    USER_LOGIN: options => options,
  })
