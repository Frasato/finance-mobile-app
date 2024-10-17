import { Image, StyleSheet, Text, View } from "react-native";
import * as colors from "../../constants/colors";
import Button from "@/src/components/button";
import { useContext } from "react";
import { User } from "@/src/contexts/userContext";
import { useRouter } from "expo-router";

export default function Logout(){

    const {setUserEmail, setUsernameContext} = useContext(User);
    const router = useRouter();

    const handlerLogout = () =>{
        setUserEmail('');
        setUsernameContext('');
        router.replace("/(tabs)/");
    }

    return(
        <View style={styles.container}>
            <Image source={require("../../assets/logout.png")} style={{width: 200, height: 200}}/>
            <Text style={styles.text}>Are you sure you want to log out?</Text>
            <Button color={colors.lightOrange} label="LogOut" onPress={handlerLogout}/>
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
        marginVertical: 20,
    }
})