import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import * as colors from "../constants/colors";
import { lastOperationProps } from "../@types/lastOperationProps";

export default function LastOperation({category, date, value, icon}: lastOperationProps){
    return(
        <View style={styles.container}>
            <View style={styles.infosContainer}>
                <MaterialIcons name={icon} size={20} color={colors.white} />
                <Text style={styles.text}>{category}</Text>
            </View>
            <View style={styles.infosContainer}>
                <MaterialIcons name="calendar-month" size={20} color={colors.white} />
                <Text style={styles.text}>{date}</Text>
            </View>
            <View style={styles.infosContainer}>
                <MaterialIcons name="attach-money" size={20} color={colors.white} />
                <Text style={styles.text}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    infosContainer: {
        flexDirection: 'row',
        marginRight: 20
    },
    text: {
        color: colors.white
    }
});