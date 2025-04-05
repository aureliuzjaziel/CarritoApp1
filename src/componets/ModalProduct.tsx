import React, { useState } from 'react'
import { Image, Modal, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Product } from '../screens/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../theme/commons/constains';

//interface para poder el modal
interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    product: Product;
    updateStockProduct: (idProduct: number, quantity: number) => void;  
}


export const ModalProduct = ({ isVisible, setShowModal, product, updateStockProduct }: Props) => {

    //hook para manejar el modal
    const { width } = useWindowDimensions();
    //hook para manejar el estado de la cantidad
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80,
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>
                            {product.name} - ${product.price.toFixed(2)}

                        </Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={30}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal}
                            />
                        </View>

                    </View>
                    <View style={styles.containerImage}>
                        <Image
                            source={{
                                uri: product.pathImage
                            }}
                            style={styles.imageModal}
                        />
                    </View>
                    {
                        (product.stock == 0)
                            ? <Text style={styles.textQuality}>No hay stock</Text>
                            :
                            <View>
                                <View style={styles.containerQuality}>
                                    <TouchableOpacity style={styles.buttonQuality}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}>
                                        <Text style={styles.buttonTextQuality}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textQuality}>{quantity}</Text>
                                    <TouchableOpacity style={styles.buttonQuality}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity === product.stock}>
                                        <Text style={styles.buttonTextQuality}>+</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuality}>
                                        Total: ${(product.price * quantity).toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonAddCar}>
                                    <Text style={styles.buttonTextAddCar}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View >

            </View>

        </Modal>

    )
}
