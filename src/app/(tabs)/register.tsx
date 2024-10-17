import { View, Image, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";
import InputText from "@/src/components/input";
import Button from "@/src/components/button";
import TextButton from "@/src/components/textButton";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { User } from "@/src/contexts/userContext";

export default function Register(){

    const router = useRouter();
    const {setUserEmail, setUsernameContext} = useContext(User);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const redirectLogin = () =>{
        router.replace("/(tabs)/");
    }

    const handlerUsername = (text: string) => setUsername(text);
    const handlerEmail = (text: string) => setEmail(text);
    const handlerPassword = (text: string) => setPassword(text);

    const handlerRegister = () =>{
        if(username != '' && email != '' && password != ''){
            setUserEmail(email);
            setUsernameContext(username);
            router.replace("/(tabs)/home");
        }
    }

    return(
        <View style={styles.registerContainer}>
            <Image source={require('../../assets/register.png')} style={styles.image}/>
            <InputText icon="person" placeholderText="Your Username" onChangeText={(text) => handlerUsername(text)}/>
            <InputText icon="email" placeholderText="youremail@email.com" onChangeText={(text) => handlerEmail(text)}/>
            <InputText icon="lock" placeholderText="Set a password" secureTextEntry onChangeText={(text) => handlerPassword(text)}/>
            <Button label="Register" color={colors.lightAquaGreen} onPress={handlerRegister}/>
            <TextButton label="Already have an account?" onPress={redirectLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70 * 3,
        height: 50 * 3,
        marginBottom: 15,
    },
})