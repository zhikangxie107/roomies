import { Tabs } from "expo-router";
import TabIcon from "../../components/TabIcon";
import { ImageSourcePropType, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingTop: 13,
          position: "absolute",
        },
        tabBarBackground: () => (
          <View className="bg-green-accent w-full h-full">
            <View className="absolute top-0 w-full h-[1px] bg-black" />
          </View>
        ),
        headerShown: false,
      }}
    >
      {/*Start Screen named index or app*/}
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            {
              /*If icon is pressed switch icon image*/
            }
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
          title: "",
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
          title: "",
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
          title: "",
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
          title: "",
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
