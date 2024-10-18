import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import UserProvider from "../contexts/userContext";
import OperationInfosProvider from "../contexts/lastOperationContext";

export default function Layout(){
    return(
        <UserProvider>
            <OperationInfosProvider>
                <GestureHandlerRootView>
                    <StatusBar style="light" />
                    <Slot />
                </GestureHandlerRootView>
            </OperationInfosProvider>
        </UserProvider>
    )
}