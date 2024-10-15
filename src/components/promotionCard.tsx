import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View, StyleSheet } from "react-native";
import * as colors from "../constants/colors";

export default function PromotionCard(){
    return(
        <View style={styles.container}>
            <Image source={require("../assets/family.jpg")} style={styles.image}/>
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <MaterialIcons name="attach-money" size={30} color={colors.white}/>
                    <Text style={styles.titleText}>Loan available</Text>
                </View>
                <Text style={styles.valueText}>$1700</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: colors.lightOrange,
        borderRadius: 10,
    },
    image: {
        width: 340,
        height: 150,
        borderRadius: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        color: colors.white,
        fontSize: 15
    },
    valueText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    }
})