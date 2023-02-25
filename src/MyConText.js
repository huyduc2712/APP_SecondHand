import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'

export const AppContext = createContext();

const MyConText = ({children}) => {
  const [information, setInformation] = useState({})  
  return (
    <AppContext.Provider value={[information, setInformation]}>
      {children}
    </AppContext.Provider>
  )
}

export default MyConText
