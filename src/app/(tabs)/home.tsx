import { View, StyleSheet, Text } from "react-native";
import * as colors from "../../constants/colors";
import MoneyInfo from "@/src/components/moneyInfo";
import LastOperation from "@/src/components/lastOperation";
import Card from "@/src/components/card";
import PromotionCard from "@/src/components/promotionCard";
import { ScrollView } from "react-native-gesture-handler";

export default function Home(){
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.homeContainer}>
                <MoneyInfo label="Entries" value={1300.00} valueColor={colors.lightAquaGreen} icon="attach-money"/>
                <MoneyInfo label="Out's" value={100.00} valueColor={colors.white} icon="output"/>
                <MoneyInfo label="Credit" value={50.00} valueColor={colors.grey} icon="credit-card"/>
                <View>
                    <Text style={{color: colors.grey, fontSize: 20, marginBottom: 20, marginTop: 30}}>Last Operation:</Text>
                    <LastOperation />
                </View>
                <PromotionCard />
                <View style={{marginTop: 10}}>
                    <Text style={{color: colors.grey, fontSize: 20, marginBottom: 20, marginTop: 20}}>Promotions:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Card />
                    </View>
                </View>
            </View>
        </ScrollView>
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