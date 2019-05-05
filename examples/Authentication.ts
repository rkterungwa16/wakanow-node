import {
  Wakanow
} from '../src'

const wakanowNode = new Wakanow()

wakanowNode.Authentication.generateToken(
  {
    username: '0c23133664b74ef7b9a45a2286a27b24',
    password: 'yez=1_t07D',
    grant_type: 'password'
 }
).then((response) => {
  console.log('response', response)
})
