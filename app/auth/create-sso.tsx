import { Image, Text, View, Pressable } from 'react-native';

const CreateSSO = () => {
    return (
        <View className="bg-[#FFFEF1] w-full h-full flex-col">
            <View className="items-center space-y-4 mt-48 mb-8">
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

            <View>
                <Pressable className="items-center">
                    <Text className="text-xl text-stone-500 underline">Continue with email →</Text>
                </Pressable>

                <Pressable className="items-center mt-80">
                    <Text className="text-sm underline italic">Already have an account? Log in!</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CreateSSO;