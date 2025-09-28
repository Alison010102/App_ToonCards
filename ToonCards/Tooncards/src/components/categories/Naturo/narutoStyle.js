import { StyleSheet } from "react-native";  
import { Colors } from "../../../styles/colors";

export const NarutoStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.cinzaEscuro,
        paddingTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { 
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.branco
    }
})