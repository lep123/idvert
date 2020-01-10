import React from 'react'
import Loadable from 'react-loadable';
import Loading from '@@/Loading'

const Loadings = () => <Loading loading />  
export default (loader, loading = Loadings) => {	
  return Loadable({
    loader: loader,
    loading,
  })
}