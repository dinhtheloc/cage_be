
const removeProperty = prop => ({ [prop]: _, ...rest }) => rest
//                     ----       ------
//                          \   /
//                dynamic destructuring

// const removePassword = removeProperty('password')
// removePassword(user1) //=> { id: 100, name: 'Howard Moon' }

module.exports = { removeProperty };