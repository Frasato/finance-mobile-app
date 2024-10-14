import { View, StyleSheet, Image } from "react-native";
import * as colors from "../../constants/colors";
import InputText from "@/src/components/input";
import Button from "@/src/components/button";
import TextButton from "@/src/components/textButton";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login(){

    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const registerRedirect = () =>{
        router.replace("/register");
    }

    const handlerEmail = (text: string) =>{
        if(text.length > 0){
            setEmail(text);
        }
    }
    const handlerPassword = (text: string) =>{
        if(text.length > 0){
            setPassword(text);
        }
    }

    const handlerLogin = () =>{
        if(email?.length > 0 && password?.length > 0){
            router.replace("/(tabs)/home");
        }
    }

    return(
        <View style={styles.homeContainer}>
            <Image source={require('../../assets/login.png')} style={styles.imageLogin}/>
            <InputText icon="email" placeholderText="financeapp@email.com" onChangeText={(text) => handlerEmail(text)}/>
            <InputText icon="lock" placeholderText="Password" onChangeText={(text) => handlerPassword(text)} secureTextEntry/>
            <Button color={colors.lightAquaGreen} label="Login" onPress={handlerLogin}/>
            <TextButton label="Register" onPress={registerRedirect}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: "center",
        alignItems: "center"
    },
    imageLogin: {
        width: 105 * 2.4,
        height: 82 * 2.4,
        marginBottom: 20
    }
});