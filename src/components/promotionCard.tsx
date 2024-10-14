import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View, StyleSheet } from "react-native";
import * as colors from "../constants/colors";

export default function PromotionCard(){
    return(
        <View>
            <Image source={require("../assets/family.jpg")}/>
            <View>
                <View>
                    <MaterialIcons name="attach-money" size={30} color={colors.white}/>
                    <Text>Loan available</Text>
                </View>
                <Text>$1700</Text>
            </View>
        </View>
    )
}