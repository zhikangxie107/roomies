import { View, Text, Image } from "react-native";

interface propType {
  profile: boolean;
}

const NoGroupBox: React.FC<propType> = ({ profile }) => {
  return (
    <View className="pl-[22px] pt-[22px] pr-[21px]">
      <Text className="text-grey-accent italic text-[18px]">
        To gain full access, choose to create a new household or join an
        existing one.
      </Text>
      <View className="pt-[50px] px-[30px]">
        <View className="bg-green-accent py-[8.35px] px-[10.43px] rounded-xl border-black border">
          <Text className="text-[18px] text-center">Create new household</Text>
        </View>
        <View className="pt-[8.99px]">
          <View className="bg-green-accent py-[8.35px] px-[10.43px] rounded-xl border-black border">
            <Text className="text-[18px] text-center">
              Join existing household
            </Text>
          </View>
        </View>
      </View>

      {/* show image if it is not the profile tab*/}
      <View>
        {!profile && (
          <Image source={require("../assets/nogroup/nogroupfriends.png")}/>
        )}
      </View>
      
    </View>
  );
};

export default NoGroupBox;
