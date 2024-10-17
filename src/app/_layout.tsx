import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import UserProvider from "../contexts/userContext";

export default function Layout(){
    return(
        <UserProvider>
            <GestureHandlerRootView>
                <StatusBar style="light" />
                <Slot />
            </GestureHandlerRootView>
        </UserProvider>
    )
}