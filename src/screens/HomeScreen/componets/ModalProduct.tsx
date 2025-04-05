import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../theme/commons/constains';


//interface para las propiedades del componente
interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    product: Product;
    updateStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProduct = ({ isVisible, setShowModal, product, updateStockProduct }: Props) => {

    //hook useWindowDimensions para obtener el tamaño de la pantalla
    const { width } = useWindowDimensions();
    //hook useSate para manejar el estado de la cantidad
    const [quantity, setQuantity] = useState<number>(1);

    //función para agregar el producto al carrito
    const handleAddCar = () => {
        //llamar función para actualizar el stock del producto
        updateStockProduct(product.id, quantity);
        //cerrar el modal
        setShowModal();
        //reiniciar la cantidad a 1
        setQuantity(1);
    }


    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>
                            {product.name} - ${product.price.toFixed(2)}
                        </Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={20}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal}
                            />
                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        <Image source={{
                            uri: product.pathImage
                        }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.textStock}>Producto agotado!</Text>
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
                                        Total: ${(product.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.buttonAddCar}
                                    onPress={handleAddCar}>
                                    <Text style={styles.buttonTextAddCar}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
