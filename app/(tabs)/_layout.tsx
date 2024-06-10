import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TabIcon from "../../components/TabIcon";
import { ImageSourcePropType } from "react-native";

const TabLayout = () => {
  return (
    <Tabs>
      {/*Start Screen named index or app*/}
      <Tabs.Screen
        name="index"
        options={{
          title: "dashboard",
          tabBarIcon: ({ focused }) => {
            let active: ImageSourcePropType = focused
              ? require("../../assets/navbar/active/home.png")
              : require("../../assets/navbar/inactive/home.png");
            return <TabIcon source={active} />;
          },
        }}
      />
      <Tabs.Screen
        name="chores"
        options={{
          title: "chores",
          tabBarIcon: ({ focused }) => {
            let active: ImageSourcePropType = focused
              ? require("../../assets/navbar/active/list.png")
              : require("../../assets/navbar/inactive/list.png");
            return <TabIcon source={active} />;
          },
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "shopping",
          tabBarIcon: ({ focused }) => {
            let active: ImageSourcePropType = focused
              ? require("../../assets/navbar/active/cart.png")
              : require("../../assets/navbar/inactive/cart.png");
            return <TabIcon source={active} />;
          },
        }}
      />
      <Tabs.Screen
        name="money"
        options={{
          title: "money",
          tabBarIcon: ({ focused }) => {
            let active: ImageSourcePropType = focused
              ? require("../../assets/navbar/active/finance.png")
              : require("../../assets/navbar/inactive/finance.png");
            return <TabIcon source={active} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ focused }) => {
            let active: ImageSourcePropType = focused
              ? require("../../assets/navbar/active/profile.png")
              : require("../../assets/navbar/inactive/profile.png");
            return <TabIcon source={active} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
