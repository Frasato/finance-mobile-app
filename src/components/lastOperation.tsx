import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import * as colors from "../constants/colors";

export default function LastOperation(){
    return(
        <View style={styles.container}>
            <View style={styles.infosContainer}>
                <MaterialIcons name="arrow-back" size={20} color={colors.white} />
                <Text style={styles.text}>Hamburguer</Text>
            </View>
            <View style={styles.infosContainer}>
                <MaterialIcons name="calendar-month" size={20} color={colors.white} />
                <Text style={styles.text}>10/10/2024</Text>
            </View>
            <View style={styles.infosContainer}>
                <MaterialIcons name="attach-money" size={20} color={colors.white} />
                <Text style={styles.text}>50</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.darkBlue,
    },
    infosContainer: {
        flexDirection: 'row'
    },
    text: {
        color: colors.white
    }
});