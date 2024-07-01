import { View, Text, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { router, Link } from "expo-router";

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
                <View className="flex h-[80vh] justify-center items-center space-y-5">
                    <Text className="text-center text-lg leading-5 max-w-[75vw]">Name your household! This can be changed later.</Text>
                    <View>
                        <TextInput placeholder="Household Name" placeholderTextColor={'text-stone-400'} maxLength={20} className='w-[75vw] px-4 py-0 h-12 leading-6 rounded-2xl border text-lg text-black'></TextInput>
                        {/* ^^^ TODO: emojis change height of text; 
                                text height changes on focus */}
                    </View>
                    <View className="bg-green-accent px-4 py-2 rounded-2xl border">
                        <Pressable>
                            <Link replace href="group/add-group" className="text-lg">Continue</Link>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CreateGroup;