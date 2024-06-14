import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, View, Pressable } from 'react-native';

const LoginAccount = () => {
    return (
        <View className="bg-[#FFFEF1] w-full h-full flex-col">
            {/* Input Boxes */}
            <View className="items-center space-y-4 mt-72 mb-8">
                <Text className="text-2xl font-bold">Login</Text>
                <TextInput placeholder="Username" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400'></TextInput>
                <TextInput placeholder="Password" className='w-80 px-6 py-2 rounded-full border-2 text-xl text-stone-400' secureTextEntry></TextInput>
            </View>

            {/* Button & Textbox */}
            <View className="items-center">
                <Pressable className="w-32 h-18 px-4 py-2 bg-[#D5F7C8] rounded-full border-2 items-center">
                    <Text className="text-lg">Submit</Text>
                </Pressable>

                <Text className="mt-14 text-xl text-stone-500">or sign in with</Text>
            </View>
            
            {/* SSO Buttons */}
            <View className="flex-row items-center justify-center space-x-4 mt-2">
                <Pressable className="w-16 h-16 px-3 py-3 bg-[#D5F7C8] rounded-full border-2 items-center justify-center">
                    <Image
                        style={{width: 64, height: 64}}
                        source={require('../../assets/icons/google-icon.png')}
                    />
                </Pressable>
                <Pressable className="w-16 h-16 px-3 py-3 bg-[#D5F7C8] rounded-full border-2 items-center justify-center">
                    <Image
                        style={{width: 48, height: 48}}
                        source={require('../../assets/icons/key.png')}
                    />
                </Pressable>
                <Pressable className="w-16 h-16 px-3 py-3 bg-[#D5F7C8] rounded-full border-2 items-center justify-center">
                    <Image
                        style={{width: 48, height: 48}}
                        source={require('../../assets/icons/key.png')}
                    />
                </Pressable>
            </View>

            {/* Create */}
            <View className="items-center mt-40">
                <Pressable className="">
                    <Text className="text-sm underline italic">Don't have an account? Sign up!</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginAccount;