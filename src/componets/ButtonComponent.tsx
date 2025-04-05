import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

//interface para las propiedades del componente
interface Props{
  title: string;
  handleLogin: () => void;
}

export const ButtonComponent = ({title, handleLogin}:Props) => {
  return (
    <TouchableOpacity style={styles.containerbutton}
    onPress={handleLogin}>
        <Text style={styles.buttonText}>Boton</Text>
    </TouchableOpacity>
  )
}
