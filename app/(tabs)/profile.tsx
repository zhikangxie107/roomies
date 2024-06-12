import { View, Text, Image } from "react-native";
import NoGroupBox from "../../components/NoGroupBox";

const Profile = () => {
  return (
    <View className=" bg-sand-accent w-full h-full">
      <View className="flex-row pl-[22px] pt-[66px] pr-[21px] justify-between">
        <Text className="text-title  font-extrabold">Profile</Text>
        <Image source={require("../../assets/profile/slider.png")} />
      </View>

      {/*Profile Box*/}
      <View className="pt-[19px] pl-[22px] pr-[21px]">
        <View className="flex-row rounded-xl border">
          <View className="py-[9.46px] pl-[9.46px] pr-[8.51px]">
            <Image source={require("../../assets/profile/emptyprofile.png")} />
          </View>

          <View className="pt-[9.46px]">
            <Text className="pt-[9.46px] text-[18px] font-bold">User</Text>
            <Text className="text-[17px]">@username</Text>
          </View>
        </View>
      </View>

      {/*No group box*/}
      <View className="pt-[19.41px] pl-[22px] pr-[21px]">
        <View className="border rounded-xl pb-[33.63px]">
          <NoGroupBox profile={true} />
        </View>
      </View>
    </View>
  );
};

export default Profile;
