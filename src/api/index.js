import axios from 'axios'
const data = require('./mock-data')
const LATENCY = 150

// get data from server or mock
export function get (cb) {
  setTimeout(() => {
    axios.get('http://localhost:3000/hogehoge')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        console.log(e)
        cb(data)
      })
  }, LATENCY)
}
