import { StyleSheet } from "react-native";
import colors from "../constants/colors/colors";

const globalStyles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#ffffff'
    },
    heading: {
        color: colors.primaryBlack,
        fontSize: 20,
        fontWeight: '600'
    },
    tagline: {
        color: colors.secondaryBlack,
        fontSize: 14
    }
});

export default globalStyles;