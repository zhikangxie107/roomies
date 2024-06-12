import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

const Settings = () => {
  return (
    <View className=" bg-sand-accent w-full h-full">
      <View className="flex-row pl-[22px] pt-[66px] pr-[21px] justify-between">
        <Text className="text-title  font-extrabold">Settings</Text>
        {/*Close Button back to Profile*/}
        <Link href="profile" asChild>
          <Pressable>
            <Image source={require("../../assets/settings/closebtn.png")} />
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default Settings;
