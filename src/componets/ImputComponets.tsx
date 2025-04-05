import React from 'react'
import { KeyboardType, KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/appTheme'
import { Icon } from 'react-native-vector-icons/Icon';

interface Props {
  contrasena: string;
  teclado: KeyboardTypeOptions;
  handleChangeValue: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean; //propiedad opcional // y colocar un valor opcional por defecto: false
}

export const ImputComponets = ({ contrasena, teclado, handleChangeValue, name, isPassword=false }: Props) => {
  return (
    <TextInput
      placeholder={contrasena}
      keyboardType={teclado}
      onChangeText={(value) => handleChangeValue(name, value)}
      secureTextEntry={isPassword}
      style={styles.input}
    />



  )
}
