import 'whatwg-fetch'
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers(){
  return get('users')
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError)
}

function onSuccess(res){
  return res.json()
}

function onError(err){
  console.log(err)  // eslint-disable-line no-console
}