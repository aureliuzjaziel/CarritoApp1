import React, { ReactNode } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    children:  ReactNode; //permite recibir cualquier tipo de delemento 
}

export const BodyComponets = ({children}:Props) => {
    //hook useWindowsDimencion: permite obtener las dimenciones de la pantlla'
    const {height}= useWindowDimensions();
  return (
    <View style={{
        ...styles.containerBoddy,
        height:height*0.88
        }}>
            
        {children}
        

    </View>
  )
}
