import { View, Text, Image, Pressable } from "react-native";
import { useCallback , useState} from "react";
import { Link } from "expo-router";

interface propType {
  profile: boolean;
  pressed: boolean;
}

const NoGroupBox: React.FC<propType> = ({ profile }) => {
  const [isPressed, setIsPressed] = useState(false);

  const changeColor = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View className="pl-6 pt-6 pr-5">
      <Text className="text-grey-accent italic text-[18px]">
        To gain full access, choose to create a new household or join an
        existing one.
      </Text>
      <View className="pt-12 px-8">
        <Link href="../group/create-group" asChild>
          <Pressable onPress={changeColor}>
            <View className={`${isPressed ? 'bg-green-accent' : 'bg-green-focused'} py-2 px-2.5 rounded-xl border-black border`}>
              <Text className={`text-[18px] text-center`}>
                Create new household
              </Text>
            </View>
          </Pressable>
        </Link>
      <View className="pt-2.5">
        <Pressable className="py-2 px-2.5 rounded-xl border-black border">
          <Text className="text-[18px] text-center">
            Join existing household
          </Text>
        </Pressable>
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
