import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabLayout() {
    return (
    
          <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 64,
                    paddingBottom: 8,
                    borderTopWidth: 0,
                    elevation: 8,
                },
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={
                    {
                        title: "Calculateur",
                        tabBarIcon: ({ size, color }) => (
                            <AntDesign name="calculator" size={size} color={color} />
                        )
                    }
                } />
            <Tabs.Screen
                name="tarif"
                options={
                    {
                        title: "Tarif",
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="price-change" size={size} color={color} />
                        )
                    }
                } />
            <Tabs.Screen
                name="history"
                options={
                    {
                        title: "Historique",
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="history" size={size} color={color} />
                        )
                    }
                } />
        </Tabs>
       
    )
}