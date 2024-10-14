import { Text, View, StyleSheet } from "react-native";
import { MoneyInfosProps } from "../@types/moneyInfosProps";
import * as colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function MoneyInfo(props: MoneyInfosProps){
    return(
        <View style={styles.moneyContainer}>
            <View style={styles.titleContainer}>
                <MaterialIcons name={props.icon} size={25} color={colors.grey}/>
                <Text style={{color: colors.white, fontSize: 20}}>{props.label}:</Text>
            </View>
            <Text style={{color: props.valueColor, fontSize: 30, fontWeight: 'bold'}}>R${props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    moneyContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: colors.grey,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})