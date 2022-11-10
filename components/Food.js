import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Food(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.contentDetail}>
                <Text style={styles.titleLanche}>{props.lanche.nome}</Text>
                <View style={styles.caloriasLanche}>
                    <FontAwesome name="fire" color="#F27676" size={17} />
                    <Text style={styles.caloriasLancheTitle}>{props.lanche.calorias} Calorias</Text>
                </View>
                <Text style={styles.valorLanche}>$ {props.lanche.valor}</Text>
            </View>
            <Image source={{ uri: props.lanche.image }} style={styles.imageLanche} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    imageLanche: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },

    titleLanche: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#393939'
    },

    caloriasLanche: {
        flexDirection: 'row',
        marginTop: 3
    },

    caloriasLancheTitle: {
        marginLeft: 5,
        color: '#B8B8B8',
        fontSize: 15
    },

    valorLanche: {
        color: '#FFE70D',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 8
    }
})