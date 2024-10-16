import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as colors from "../../constants/colors";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function TabsLayouts(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.darkBlue,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: colors.lightOrange,
                tabBarInactiveTintColor: colors.darkOrange,
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen name="index" options={{
                href: null,
                tabBarStyle: {
                    display: 'none',
                }
            }} />
            <Tabs.Screen name="register" options={{
                href: null,
                tabBarStyle: {
                    display: 'none',
                }
            }} />
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({size, color}) => {
                    return <MaterialIcons name="home" size={size} color={color} />
                },
            }}/>
            <Tabs.Screen name="entries" options={{
                tabBarIcon: ({size, color}) => {
                    return <MaterialIcons name="attach-money" size={size} color={color} />
                },
            }}/>
            <Tabs.Screen name="outs" options={{
                tabBarIcon: ({size, color}) => {
                    return <MaterialIcons name="outbox" size={size} color={color} />
                },
            }}/>
            <Tabs.Screen name="logout" options={{
                tabBarIcon: ({size, color}) => {
                    return <MaterialIcons name="person-off" size={size} color={color} />
                }
            }}/>
        </Tabs>
    )
}