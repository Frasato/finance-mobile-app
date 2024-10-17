import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardItem from "./cardItem";

export default function Card(){
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 10}}>
            <CardItem icon="airplane-ticket" title="Airplane Ticket" value={300}/>
            <CardItem icon="house" title="Your house" value={1000}/>
            <CardItem icon="yard" title="Build a Garden" value={150}/>
            <CardItem icon="travel-explore" title="World Travel Tour" value={640}/>
            <CardItem icon="computer" title="Your Own PC" value={50}/>
        </ScrollView>
    )
}