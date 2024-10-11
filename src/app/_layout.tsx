import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

export default function Layout(){
    return(
        <GestureHandlerRootView>
            <StatusBar style="light" />
            <Slot />
        </GestureHandlerRootView>
    )
}