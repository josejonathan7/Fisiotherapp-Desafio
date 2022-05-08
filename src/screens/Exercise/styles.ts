import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		paddingTop: getStatusBarHeight() + 17,
		backgroundColor: theme.COLORS.backgroundColor
	},
	returnButton: {
		padding: 10
	},
	mainContainer: {
		flex: 1,
		alignItems: "center"
	},
	exerciseDescriptionText: {
		color: theme.COLORS.textPrimaryColor,
		fontSize: 20,
		paddingVertical: 20,
		width: 200,
		textAlign: "center"
	},
	endExerciseButton: {
		width: 300,
		height: 60,
		backgroundColor: theme.COLORS.purple,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8
	},
	endExerciseButtonText: {
		fontSize: 20,
		color: theme.COLORS.backgroundColor
	},
	exerciseInformationContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 350,
		paddingVertical: 80
	}
});
