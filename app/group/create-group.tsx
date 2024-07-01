import { View, Text, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { router } from "expo-router";

const CreateGroup = () => { 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className="bg-sand-accent w-full h-full">
                <View className="flex-row pl-6 pt-16 pr-5 justify-between">
                    <Text className="text-title  font-extrabold">Create Household</Text>
                    <Pressable onPress={() => router.back()}>
                        <Image source={require("../../assets/settings/closebtn.png")} />
                    </Pressable>
                </View>
                <View className="flex h-screen justify-center items-center">
                    <Text className="text-wrap text-lg leading-tight max-w-[75w]">Name your household! This can be changed later.</Text>
                    <View>
                        <TextInput placeholder="Household Name" placeholderTextColor={'text-stone-400'} className='w-[75vw] px-6 py-2 rounded-full border-2 text-lg text-black'></TextInput>
                    </View>
                    <View className="bg-green-accent">
                        <Pressable>
                            <Text>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CreateGroup;