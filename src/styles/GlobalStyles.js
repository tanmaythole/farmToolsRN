import { StyleSheet } from "react-native";
import colors from "../constants/colors/colors";

const globalStyles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#ffffff',
        minHeight: '100%',
        paddingHorizontal: 16
    },
    heading: {
        color: colors.primaryBlack,
        fontSize: 20,
        fontWeight: '600'
    },
    tagline: {
        color: colors.secondaryBlack,
        fontSize: 14,
        paddingTop: 8
    }
});

export default globalStyles;