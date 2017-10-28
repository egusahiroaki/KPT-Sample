import axios from 'axios'
const data = require('./mock-data')
const LATENCY = 150

// get data from server or mock
export const getInitialState = (cb) => {
  setTimeout(() => {
    axios.get('http://localhost:3000/hogehoge')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        console.log('getInitialData')
        console.log(e)
        console.log(data)
        cb(data)
      })
  }, LATENCY)
}
