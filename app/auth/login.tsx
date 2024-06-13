import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, View, Pressable } from 'react-native';

const LoginAccount = () => {
    return (
        <View className="flex-1 items-center justify-center space-y-4 bg-[#FFFEF1]">
            <Image
                style={{width: 192, height: 192}}
                source={require('../../assets/icon.png')}
            />

            <Text className="text-[28px] font-bold">Login</Text>
            <TextInput placeholder="Username" className='px-28 py-2 rounded-full border-2 text-[20px] text-slate-400'></TextInput>
            <TextInput placeholder="Password" className='px-28 py-2 rounded-full border-2 text-[20px] text-slate-400' secureTextEntry></TextInput>
            
            <Pressable className="px-4 py-2 bg-[#D5F7C8] rounded-full border-2">
                <Text className="text-[18px]">Submit</Text>
            </Pressable>

            <Pressable className="">
                <Text className="text-[14px] underline italic">Don't have an account? Sign up!</Text>
            </Pressable>

            <StatusBar style="auto" />
        </View>
    )
}

export default LoginAccount;