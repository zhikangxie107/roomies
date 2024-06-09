import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TabIcon from "../../components/TabIcon";


const TabLayout = () => {
  return (
    <Tabs>
      {/*Start Screen named index or app*/}
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: () => (
            <TabIcon
              source={require("../../assets/navbar/inactive/profile.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chores"
        options={{
          title: "chores",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={38} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "shopping",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={38} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="money"
        options={{
          title: "money",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={38} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={38} name="home" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
