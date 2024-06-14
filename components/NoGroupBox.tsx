import { View, Text, Image } from "react-native";

interface propType {
  profile: boolean;
}

const NoGroupBox: React.FC<propType> = ({ profile }) => {
  return (
    <View className="pl-6 pt-6 pr-5">
      <Text className="text-grey-accent italic text-[18px]">
        To gain full access, choose to create a new household or join an
        existing one.
      </Text>
      <View className="pt-12 px-8">
        <View className="bg-green-accent py-2 px-2.5 rounded-xl border-black border">
          <Text className="text-[18px] text-center">Create new household</Text>
        </View>
        <View className="pt-2.5">
          <View className="bg-green-accent py-2 px-2.5 rounded-xl border-black border">
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
