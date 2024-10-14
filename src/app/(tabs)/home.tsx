import { View, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";
import MoneyInfo from "@/src/components/moneyInfo";

export default function Home(){
    return(
        <View style={styles.homeContainer}>
            <MoneyInfo label="Entries" value={1300.00} valueColor={colors.white} icon="attach-money"/>
            <MoneyInfo label="Out's" value={100.00} valueColor={colors.red} icon="output"/>
            <MoneyInfo label="Credit" value={50.00} valueColor={colors.lightOrange} icon="credit-card"/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.deepDarkBlue,
        paddingHorizontal: 15,
    },
})