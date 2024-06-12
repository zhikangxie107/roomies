import { View, Text } from "react-native";
import NoGroupBox from "../../components/NoGroupBox";

const Home = () => {
  return (
    <View className=" bg-sand-accent w-full h-full">
      <Text className="text-title pl-[22px] pt-[66px] font-extrabold">
        Good morning, User.
      </Text>
      <NoGroupBox profile={false}/>
    </View>
  );
};

export default Home;
