import { View, Text, Image } from "react-native";



const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">Hello</Text>
      <Image
        source={require("../../assets/navbar/inactive/home.png")}
        className="w-10 h-10"
      ></Image>
    </View>
  );
};

export default Home;