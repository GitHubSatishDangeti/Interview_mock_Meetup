import React from 'react'

const Context = React.createContext({
  isRegistered: false,
  Name: '',
  option: 'Arts and Culture',
  showError: false,
  makeRegisteredTrue: () => {},
  makeShowErrorTrue: () => {},
})

export default Context
