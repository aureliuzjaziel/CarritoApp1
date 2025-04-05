import { StyleSheet } from "react-native";
import { IMPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "./commons/constains";




export const styles = StyleSheet.create({
    title: {
        color: SECUNDARY_COLOR,
        fontSize: 25,
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontWeight: 'bold'
    },
    containerBoddy: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 45,
        paddingTop: 40
    },
    titlePricipal: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'

    },
    titleSecundary: {
        fontSize: 13,
        marginTop: 10,


    },
    input: {
        backgroundColor: IMPUT_COLOR,
        borderRadius: 5,
        marginTop: 10,
    },
    containerIpmut: {
        marginVertical: 10,

    },
    containerbutton: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        bottom: 17,
        right: 10,

    },
    textRegister: {
        marginTop: 20,
        textAlign: 'center',
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: SECUNDARY_COLOR,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 1,
        marginBottom: 15
    },
    titleProduct: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    imageProduct: {
        width: 70,
        height: 70,
        
    },
    containerIcon: {
        flex: 1,
        //backgroundColor: PRIMARY_COLOR,
        alignItems: 'flex-end',

    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    contentModal:{
        padding: 20,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 10,
    },
    hideModal:{
        flexDirection: 'row',
        borderBottomColor:'#ccc',
        borderBottomWidth: 1,
        padding: 10,
    },
    headerModal:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        padding:10
    },
    titleModal:{
        fontSize: 20,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        marginBottom: 10,
    },
    containerImage:{
        alignItems: 'center',
            
        
    },
    imageModal:{
        width: 250,
        height: 250,
    },
    containerQuality:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    buttonQuality:{
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10,
    },
    buttonTextQuality:{
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuality:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonAddCar:{
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        
    },
    buttonTextAddCar:{
        color: SECUNDARY_COLOR,
        //ontSize: 20,
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'red'
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textIconCar: {
        backgroundColor: SECUNDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDescription: {
        flexDirection: 'row',
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#000"
    },
    containerTotal:{
        marginVertical:10,
        alignItems:'flex-end',
        paddingHorizontal:10
    },
    textTotal:{
        fontSize: 16,
        fontWeight:'bold'
    }




})