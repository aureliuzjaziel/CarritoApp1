import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../componets/TitleComponent'
import { PRIMARY_COLOR } from '../theme/commons/constains'
import { BodyComponets } from '../componets/BodyComponets'
import { styles } from '../theme/appTheme'
import { ImputComponets } from '../componets/ImputComponets'
import { ButtonComponent } from '../componets/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigato'

//interface para el objeto formulario
interface FormRegister {
  name: string;
  email: string;
  password: string;
}
interface Props{
  users: User[];
  addUser: (user: User) => void; // agregar nuevos usuarios

}
export const RegisterScreen = ({users, addUser}:Props) => {
  const handleChangeValue = (name: string, value: string): void => {
    setFormRegister({...FormRegister, [name]: value});
  }

//funcion para verificar que el usuario no exista
const verifyUser= (): User |undefined => {
  const existUser= users.find(user => user.email === FormRegister.email);
  return existUser;

}
//metodo para limpiar la pantalla
const clearFiles = () => {
  setFormRegister({
    name: '',
    email: '',
    password: '',
  })
}

  // hook para navegar entre pantallas
  const navigation = useNavigation();

  //funcion para registrar usuario
  const handleRegister = () => {
    //console.log(FormRegister);
    if (FormRegister.name === ''|| FormRegister.email === '' || FormRegister.password === '') {
      //mensaje de alerta
      alert('Todos los campos son obligatorios');
      return;
  }
  //validar si el usuario ya existe
  if(verifyUser()){
    clearFiles();//limpiar campos
    //mensaje de alerta
    alert('El usuario ya existe');
    return;

  }
  //agregar nuevo usuario
  //crear objeto
  const newUser: User = {
    id: users.length + 1,
    name: FormRegister.name,
    email: FormRegister.email,
    password: FormRegister.password
    
  }
  //console.log(FormRegister);
  addUser(newUser);
  navigation.goBack();//regresar a la pantalla anterior


}
  //hook usestate para manejar el estado del formulario
  const [FormRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: ''
  });

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Registrate' />
      <BodyComponets>
        <Text style={styles.titlePricipal}>Bienvenido</Text>
        <Text style={styles.titleSecundary}>Realiza Tus Compras de Manera rapida y segura</Text>
        <View style={styles.containerIpmut}>
          <ImputComponets 
            contrasena='nombre'
            handleChangeValue={handleChangeValue}
            name='name'
            teclado='default' />
          <ImputComponets contrasena='correo'
            handleChangeValue={handleChangeValue}
            name='email'
            teclado='email-address' />
          <ImputComponets contrasena='contrasena'
            handleChangeValue={handleChangeValue}
            name='password'
            teclado='default'
          />


        </View>
        <ButtonComponent title='registrar' handleLogin={handleRegister} />
        
                        <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate('Login'))}>
                            <Text style={styles.textRegister}>Ya tienes una cuenta.? Inicia sesion ahora</Text>
                        </TouchableOpacity>
                    </BodyComponets>

      
    </View>
  )
}
