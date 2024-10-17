import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import * as colors from "../constants/colors";
import { CardItemProps } from "../@types/cardItemProps";

export default function CardItem(props: CardItemProps){
    return(
        <View style={styles.cardItemContainer}>
            <MaterialIcons name={props.icon} size={30} color={colors.white} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>${props.value}</Text>
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