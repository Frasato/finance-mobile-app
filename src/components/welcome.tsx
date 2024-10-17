import { useContext } from "react";
import { Text, View } from "react-native";
import { User } from "../contexts/userContext";

export default function Welcome(){

    const {username} = useContext(User);

    return(
        <View>
            <Text>{username}</Text>
        </View>
    )
}