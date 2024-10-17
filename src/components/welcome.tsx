import { Text, View } from "react-native";
import { WelcomeProps } from "../@types/welcomeProps";

export default function Welcome(props: WelcomeProps){
    return(
        <View>
            <Text>{props.username}</Text>
        </View>
    )
}