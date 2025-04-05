import React, { useState } from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../../componets/TitleComponent'
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../../theme/commons/constains'
import { BodyComponets } from '../../componets/BodyComponets'
import { CardProduct } from './componets/CardProduct'
import { styles } from '../../theme/appTheme'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { ModalCar } from './componets/ModalCar'


//interface para el objeto productos
export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
    
}
//interface para el objeto carrito
export interface Car {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}


export const HomeScreen = () => {
//  //arreglo de productos
  const products: Product[] = [
    {id: 1, name: 'Funda de azucar', price: 2.30, stock: 20, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/159852977_G.jpg'},
    {id: 2, name: 'Funda de arroz', price: 1.50, stock: 0, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/132901353_G.jpg'},
    {id: 3, name: 'Funda de papas', price: 1.00, stock: 12, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg'},
    {id: 4, name: 'Funda de fideos', price: 0.80, stock: 30, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg'},
    {id: 5, name: 'Funda de sal', price: 0.50, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
    {id: 6, name: 'Funda de azucar', price: 2.30, stock: 20, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/159852977_G.jpg'},
    {id: 7, name: 'Funda de arroz', price: 1.50, stock: 5, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/132901353_G.jpg'},
    {id: 8, name: 'Funda de papas', price: 1.00, stock: 12, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg'},
    {id: 9, name: 'Funda de fideos', price: 0.80, stock: 30, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg'},
    {id: 10, name: 'Funda de sal', price: 0.50, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
    

  ];
  
  
  //hook useState para gestionar el estado de los productos
  const [productsState, setProductsState] = useState<Product[]>(products);

  //hook useState para gestionar el carrito de compras
  const [car, setCar] = useState<Car[]>([]);
  
  

  //hook useState para gestionar el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //función para actualizar el stock de un producto
  const updateStockProduct = (idProduct: number, quantity: number): void => {
      const newProducts = productsState.map(product => product.id === idProduct
          ? { ...product, stock: product.stock - quantity }
          : product);
      //Actualizar el estado de productsState
      setProductsState(newProducts);
      //llamar a la función para agregar el producto al carrito
      addProductCar(idProduct, quantity);
  }

  const addProductCar = (idProduct: number, quantity: number) => {
    const product = productsState.find(product => product.id === idProduct);
    // Si el producto no existe, salir de la función
    if (!product) return;
    setCar((prevCar) => {
        // Buscar si el producto ya está en el carrito
        const existingProductIndex = prevCar.findIndex(item => item.id === idProduct);
        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, actualizar la cantidad y total
            const updatedCar = [...prevCar];
            updatedCar[existingProductIndex] = {
                ...updatedCar[existingProductIndex],
                quantity: updatedCar[existingProductIndex].quantity + quantity,
                total: (updatedCar[existingProductIndex].quantity + quantity) * product.price
            };
            return updatedCar;
        } else {
            // Si el producto no está en el carrito, agregarlo
            return [
                ...prevCar,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    total: product.price * quantity
                }
            ];
        }
    });
};

  return (
    <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.headerHome}>
                <TitleComponent title='Productos' />
                <View style={{
                    ...styles.containerIcon,
                    paddingHorizontal: 30
                }}>
                    <Text style={styles.textIconCar}>{car.length}</Text>
                    <Icon name='shopping-cart'
                        size={30}
                        color={SECUNDARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <BodyComponets>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} updateStockProduct={updateStockProduct} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponets>
            <ModalCar isVisible={showModal}
                car={car}
                setShowModal={() => setShowModal(!showModal)}
                setCar={setCar} />
        </View>
    )
}
