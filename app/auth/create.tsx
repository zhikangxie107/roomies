import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, View, Pressable } from 'react-native';

const CreateAccount = () => {
    return (
        <View className="bg-[#FFFEF1] w-full h-full flex-col">
            {/* Input Boxes */}
            <View className="items-center space-y-4 mt-48 mb-8">
                <Text className="text-2xl font-bold">Create Account</Text>
                <TextInput placeholder="Full Name" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400'></TextInput>
                <TextInput placeholder="Username" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400'></TextInput>
                <TextInput placeholder="Email Address" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400'></TextInput>
                <TextInput placeholder="Password" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400' secureTextEntry></TextInput>
                <TextInput placeholder="Confirm Password" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400' secureTextEntry></TextInput>
            </View>

            {/* Button & Textbox */}
            <View className="items-center">
                <Pressable className="w-32 h-18 px-4 py-2 bg-[#D5F7C8] rounded-full border-2 items-center">
                    <Text className="text-lg">Submit</Text>
                </Pressable>

                <Text className="mt-6 text-xl text-stone-500 underline">← Continue with SSO</Text>
            </View>

            {/* Login */}
            <View className="items-center mt-28">
                <Pressable className="">
                    <Text className="text-sm underline italic">Already have an account? Log in!</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CreateAccount;