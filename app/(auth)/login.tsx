import { Text, TextInput, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

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
                
                <Link href="./login-sso" className="mt-6 text-xl text-stone-500 underline">← Login with SSO</Link>
                <Link href="./create" className="mt-56 text-sm underline italic">Don't have an account? Sign up!</Link>
            </View>
        </View>
    )
}

export default LoginAccount;