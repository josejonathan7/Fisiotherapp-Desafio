import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: getBottomSpace() + 16,
		width: 300,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
});
