import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../pages/Registration";
import UserList from "../pages/UserList";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name="UserList" component={UserList} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}