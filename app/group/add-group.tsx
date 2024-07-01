import { View, TouchableWithoutFeedback, Keyboard, Text, Pressable, Image } from "react-native";
import { router } from "expo-router";

const AddGroup = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className="bg-sand-accent w-full h-full">
                <View className="flex-row pl-6 pt-16 pr-5 justify-between">
                    <Text className="text-title  font-extrabold">Create Household</Text>
                    <Pressable onPress={() => router.back()}>
                        <Image source={require("../../assets/settings/closebtn.png")} />
                    </Pressable>
                </View>
                <View>
                    <Text className="text-lg">Add up to 10 people to your household.</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AddGroup;