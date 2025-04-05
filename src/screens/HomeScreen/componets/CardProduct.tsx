import React, { useState } from 'react'
import { Image, Modal, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import { ModalProduct } from '../../../componets/ModalProduct';

 //interface para las propiedades del componente
 interface Props {
    product: Product;
    updateStockProduct: (idProduct: number, quantity: number) => void;
    
}

export const CardProduct = ({ product, updateStockProduct}: Props) => {
    //hook para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    

    return (
        <View>
            <View style={styles.containerCard}>

                <Image
                    source={{
                        uri: product.pathImage

                    }}
                    style={styles.imageProduct}
                />
                <View>
                    <Text style={styles.titleProduct}>{product.name}</Text>
                    <Text>Precio: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart' size={30} color='black'
                        onPress={() => setShowModal(!showModal)}
                    //para negar el modal sin usar true cuando el hook es bolean
                    />
                </View>

            </View>
            <ModalProduct
                isVisible={showModal} setShowModal={() => setShowModal(!showModal)}
                product={product}
                updateStockProduct={updateStockProduct} //pasar la funcion al modal
                
            />


        </View>

    )
}
