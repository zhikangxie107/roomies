import { Image, ImageSourcePropType, View } from "react-native";

interface propType {
    source: ImageSourcePropType;
}

//icons for navbar rendering
const TabIcon: React.FC<propType> = ({source}) => {
    return (
        <View>
            <Image source={source} className=""/>
        </View>
        
    )
}

export default TabIcon