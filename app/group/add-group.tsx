import { View, TouchableWithoutFeedback, Keyboard, Text, TextInput, Pressable, Image } from "react-native";
import { router } from "expo-router";
import InviteCode from "../../components/InviteCode";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AddGroup = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className="bg-sand-accent w-full h-full space-y-6">
                <View className="flex-row pl-6 pt-16 pr-5 justify-between">
                    <Text className="text-title font-extrabold">Create Household</Text>
                    <Pressable onPress={() => router.back()}>
                        <Image source={require("../../assets/settings/closebtn.png")} />
                    </Pressable>
                </View>
                <View className="justify-center items-center space-y-5">
                    <Text className="text-lg pb-4">Add up to 10 people to your household.</Text>
                    <InviteCode/>
                    <View className="flex-row items-center px-4 py-2 rounded-2xl border w-[90vw]">
                        <MaterialIcons name="search" size={20}></MaterialIcons>
                        <TextInput className="text-lg ml-2" placeholder="Search by username"></TextInput>
                    </View>
                </View>
                <View className="items-center space-y-6">
                    <View className="flex-row items-center justify-between w-[90vw]">
                        <Text className="text-lg font-bold">Current Roommates</Text>
                        <Text className="text-lg text-grey">0/10{/* TODO: make variable */}</Text>
                    </View>
                    <View className="self-start pl-[5vw]">{/* list of roommates here */}
                        <Text className="text-lg">
                            You currently have no roommates.
                        </Text>
                    </View>
                    <Pressable className="bg-green-accent py-2 px-2.5 rounded-xl border-black border">
                        <Text className="text-lg">Create Household</Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AddGroup;