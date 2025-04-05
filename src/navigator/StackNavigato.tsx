import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constains';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

//interface para data de usuarios
export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
}


const Stack = createStackNavigator();

export const StackNavigator=()=> {

  //arreglo usuarios (data base)
  const users: User[] = [
    {id:1, name: 'Juan', email: 'xavier@gmail.com', password:'123456'},
    {id:2, name: 'Pedro', email: 'pedro@gmail.com', password:'123456'},
];
//hook useSate para manejar el estado de los usuarios
const [usersManager, setUsersManage] = useState<User[]>(users);3
//funcion para afrgar un usuario en el usermanager
const addUser = (user:User) => {
  setUsersManage([...usersManager,user]);
}

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor: PRIMARY_COLOR
        }
    }}>
      {/* <Stack.Screen name="Login" children={()=><LoginScreen users={usersManager}/>}/>
      <Stack.Screen name="Register" children={()=><RegisterScreen users={usersManager} addUser={addUser}/>} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}