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
          title: "dashboard",
          tabBarIcon: () => (
            <TabIcon
              source={require("../../assets/navbar/inactive/home.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chores"
        options={{
          title: "chores",
          tabBarIcon: () => (
            <TabIcon
              source={require("../../assets/navbar/inactive/list.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "shopping",
          tabBarIcon: () => (
            <TabIcon
              source={require("../../assets/navbar/inactive/cart.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="money"
        options={{
          title: "money",
          tabBarIcon: () => (
            <TabIcon
              source={require("../../assets/navbar/inactive/finance.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: () => (
            <TabIcon
              source={require("../../assets/navbar/inactive/profile.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
