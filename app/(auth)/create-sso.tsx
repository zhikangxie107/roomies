import { Image, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

const CreateSSO = () => {
    return (
        <View className="bg-[#FFFEF1] w-full h-full flex-col">
            <View className="items-center space-y-4 mt-72 mb-8">
                <Text className="text-2xl font-bold">Create Account</Text>
                <Pressable className="flex-row items-center justify-center w-80 px-2 bg-[#D5F7C8] rounded-lg border-2">
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../assets/icons/google-icon.png')}
                    />
                    <Text className="text-xl">Continue with Google</Text>
                </Pressable>
                <Pressable className="flex-row items-center justify-center w-80 px-2 bg-[#D5F7C8] rounded-lg border-2">
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../assets/icons/key.png')}
                    />
                    <Text className="text-xl">Continue with Key</Text>
                </Pressable>
                <Pressable className="flex-row items-center justify-center w-80 px-2 bg-[#D5F7C8] rounded-lg border-2">
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../assets/icons/key.png')}
                    />
                    <Text className="text-xl">Continue with Key</Text>
                </Pressable>
            </View>

            <View className="items-center">
                <Link href="/create" className="text-xl text-stone-500 underline">Continue with email →</Link>
                <Link href="/" className="mt-60 text-sm underline italic">Already have an account? Log in!</Link>
            </View>
        </View>
    )
}

export default CreateSSO;