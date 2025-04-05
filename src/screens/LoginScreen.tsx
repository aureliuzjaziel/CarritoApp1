import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../componets/TitleComponent'
import { PRIMARY_COLOR } from '../theme/commons/constains'
import { BodyComponets } from '../componets/BodyComponets'
import { styles } from '../theme/appTheme'
import { ImputComponets } from '../componets/ImputComponets'
import { ButtonComponent } from '../componets/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigato'

//interface para el objeto formulario
interface FormLogin {
    email: string;
    password: string;
}

//interface props del stack navigator
interface Props{
    users: User[];
}


export const LoginScreen = ({users}: Props) => {

    //hook usestate para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook usestate para manejar el estado del password
    const [hidenPassword, setHidenPassword] = useState<boolean>(true);

    //hook navigation para navegar entre pantallas
    const navigation = useNavigation();

    

    //funcion para el cambio de valores del objeto del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //console.log(name,"",value);
        //actualizamos el estado del formulario
        setFormLogin({ ...formLogin, [name]: value }); //name: emai o password 
        // value : valor del input
    }
    //funcion para validad si existe el usuario
    const verifyUser = (): User | undefined=> {
        const existUser = users.find(user => user.email === formLogin.email && user.password === formLogin.password);
        return existUser;
    }

    //funcion para iniciar sesion
    const handleLoginForm = () => {
        //validamos que los campos no esten vacios
        if(formLogin.email === '' || formLogin.password === ''){
            //mensaje de alerta
            alert('Todos los campos son obligatorios');
            return;
            //el return termina la ejecucion de la funcion
        }
        //validamos si existe el usuario
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
            return;
        }
        //inicio de sesion correcto
        navigation.dispatch(CommonActions.navigate('Home'));
        //console.log(formLogin);

    }
    





    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesion' />
            <BodyComponets>
                <Text style={styles.titlePricipal}>Bienvenido</Text>
                <Text style={styles.titleSecundary}>Realiza Tus Compras de Manera rapida y segura</Text>
                <View style={styles.containerIpmut}>
                    <ImputComponets contrasena='correo'
                        handleChangeValue={handleChangeValue}
                        name='email'
                        teclado='email-address' />
                    <ImputComponets contrasena='contrasena'
                        handleChangeValue={handleChangeValue}
                        name='password'
                        teclado='default'
                        isPassword={hidenPassword} />
                        <Icon style={styles.icon} 
                        name={(hidenPassword)?'visibility-off':'visibility'}
                        size={20}
                        color={PRIMARY_COLOR}
                        //!hidenPassword= negacion de hidenPassword
                        onPress={()=>setHidenPassword(!hidenPassword)}/>
                </View>
                <ButtonComponent title='iniciar' handleLogin={handleLoginForm}/>

                <TouchableOpacity onPress={()=>navigation.dispatch(CommonActions.navigate('Register'))}> 
                <Text style={styles.textRegister}>No tienes una cuenta.? registrate</Text>
            </TouchableOpacity>
            </BodyComponets>
            

        </View>
    )
}
