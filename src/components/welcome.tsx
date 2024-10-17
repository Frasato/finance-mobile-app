import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../contexts/userContext";
import * as colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Welcome(){

    const {usernameContext, userEmail} = useContext(User);

    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome Back</Text>
                <View style={{borderBottomColor: colors.grey, borderBottomWidth: 1, marginVertical: 10}}></View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <MaterialIcons name="person-pin" size={45} color={colors.lightOrange}/>
                <View>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>{usernameContext}</Text>
                    <Text style={{color: colors.grey}}>{userEmail}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    }
})