import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Food } from "../components/Food";

import bancoJson from '../dados.json';

export function Home() {
    const [dados, setDados] = useState(bancoJson);

    return (
        <View style={styles.container}>
            <View style={styles.listaFood}>
                <FlatList
                    data={dados}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Food lanche={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FAFAFA'
    },
    listaFood: {
        marginTop: 30
    }
})