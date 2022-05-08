import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getStatusBarHeight() + 10,
		backgroundColor: theme.COLORS.backgroundColor,
		justifyContent: "center",
		alignItems: "center"
	},
	titleText: {
		color: theme.COLORS.textPrimaryColor,
		fontSize: 30,
		paddingVertical: 10
	},
	messageText: {
		color: theme.COLORS.textSecondaryColor,
		fontSize: 20,
		paddingVertical: 40,
		width: 300,
		textAlign: "center"
	},
	button: {
		width: 300,
		height: 60,
		backgroundColor: theme.COLORS.purple,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8
	},
	textButton: {
		fontSize: 20,
		color: theme.COLORS.backgroundColor
	}
});
