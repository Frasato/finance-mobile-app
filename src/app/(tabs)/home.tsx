import { View, StyleSheet, Text } from "react-native";
import * as colors from "../../constants/colors";
import MoneyInfo from "@/src/components/moneyInfo";
import LastOperation from "@/src/components/lastOperation";

export default function Home(){
    return(
        <View style={styles.homeContainer}>
            <MoneyInfo label="Entries" value={1300.00} valueColor={colors.white} icon="attach-money"/>
            <MoneyInfo label="Out's" value={100.00} valueColor={colors.red} icon="output"/>
            <MoneyInfo label="Credit" value={50.00} valueColor={colors.lightOrange} icon="credit-card"/>
            <View>
                <Text style={{color: colors.grey, fontSize: 20, marginBottom: 20}}>Last Operation:</Text>
                <LastOperation />
            </View>
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