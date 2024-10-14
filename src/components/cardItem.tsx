import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import * as colors from "../constants/colors";

export default function CardItem(){
    return(
        <View style={styles.cardItemContainer}>
            <MaterialIcons name="airplane-ticket" size={30} color={colors.white} />
            <Text style={styles.title}>Ticket Airplane</Text>
            <Text style={styles.value}>$300</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardItemContainer: {
        marginRight: 10,
        backgroundColor: colors.darkBlue,
        padding: 10,
        height: 150,
        borderRadius: 10,
        justifyContent: 'space-around'
    },
    title: {color: colors.grey},
    value: {
        color: colors.grey,
        fontSize: 30,
    }
});