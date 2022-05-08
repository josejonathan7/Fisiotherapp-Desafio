import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface Props {
	title: string;
	information: number | string;
}

export function ExerciseInformation({ information, title }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title} >{title}</Text>
			<Text style={styles.information} >{information}</Text>
		</View>
	);
}
