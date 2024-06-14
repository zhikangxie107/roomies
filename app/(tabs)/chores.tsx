import { View, Text } from 'react-native';
import NoGroupBox from "../../components/NoGroupBox";
const Chores = () => {
    return (
        <View className=" bg-sand-accent w-full h-full">
            <Text className="text-title pl-6 pt-16 font-extrabold">Chores</Text>
            <NoGroupBox profile={false}/>
        </View>
    )
}

export default Chores