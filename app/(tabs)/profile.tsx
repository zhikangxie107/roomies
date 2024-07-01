import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import NoGroupBox from "../../components/NoGroupBox";

const Profile = () => {
  return (
    <View className=" bg-sand-accent w-full h-full">
      <View className="flex-row pl-6 pt-16 pr-5 justify-between">
        <Text className="text-title  font-extrabold">Profile</Text>
        {/* Button go to Settings*/}
        <Link href="../profile/settings" asChild>
          <Pressable>
            <Image source={require("../../assets/profile/slider.png")} />
          </Pressable>
        </Link>
      </View>

      {/*Profile Box*/}
      <View className="pt-5 pl-6 pr-5">
        <View className="flex-row rounded-xl border">
          <View className="py-2.5 pl-2.5 pr-2">
            <Image source={require("../../assets/profile/emptyprofile.png")} />
          </View>

          <View className="pt-2.5">
            <Text className="pt-2.5 text-[18px] font-bold">User</Text>
            <Text className="text-[17px]">@username</Text>
          </View>
        </View>
      </View>

      {/*No group box*/}
      <View className="pt-5 pl-6 pr-5">
        <View className="border rounded-xl pb-8">
          <NoGroupBox profile={true} pressed={false}/>
        </View>
      </View>
    </View>
  );
};

export default Profile;
