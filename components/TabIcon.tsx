import { Image, ImageSourcePropType } from "react-native";

interface propType {
    source: ImageSourcePropType;
}

const TabIcon: React.FC<propType> = ({source}) => {
    return (
        <Image source={source} className="w-6 h-6"></Image>
    )
}

export default TabIcon