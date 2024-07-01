import { View, Text } from 'react-native';
import NoGroupBox from "../../components/NoGroupBox";

const Shop = () => {
    return (
        <View className=" bg-sand-accent w-full h-full">
            <Text className="text-title pl-6 pt-16 font-extrabold">Groceries</Text>
            <NoGroupBox profile={false} pressed={false}/>
        </View>
    )
}

export default Shop