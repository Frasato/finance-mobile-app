import { StyleSheet, Text, View } from "react-native";
import * as colors from "../../constants/colors";
import Button from "@/src/components/button";

export default function Logout(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Are you sure you whant to log out?</Text>
            <Button color={colors.lightOrange} label="LogOut" onPress={()=>{}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.deepDarkBlue,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        color: colors.white,
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 20,
    }
})