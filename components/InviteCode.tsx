import { View, Text, Image, Pressable } from "react-native";
import { useCallback , useState} from "react";
import { Link } from "expo-router";

const InviteCode = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [text, setText] = useState('Generate Invite Code');

    const press = () => {
        if (isPressed) {
            // copy invite code
        } else {
            setIsPressed(!isPressed);
            setText(`Invite Code: ${'ABCDEF'/* put invite code here */}`)
        }
    }

    return (
            <View className="bg-green-accent px-4 py-2 rounded-2xl border w-[75vw] my-2">
                <Pressable onPress={press}>
                    <Text className="text-lg text-center">{text}</Text>
                </Pressable>
            </View>
        );
};

export default InviteCode;