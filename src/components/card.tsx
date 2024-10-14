import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardItem from "./cardItem";

export default function Card(){
    return(
        <ScrollView>
            <CardItem />
        </ScrollView>
    )
}