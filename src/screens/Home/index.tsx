import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import personImage from "../../assets/person.png";
import { styles } from "./styles";
import { useNavigate } from "react-router-native";
import { IconsContainer } from "../../components/IconsContainer";

export function Home() {
	const navigate = useNavigate();

	return (
		<View style={styles.container}>
			<StatusBar translucent style='dark' backgroundColor='transparent' />


			<Image source={personImage}  />

			<Text style={styles.titleText} >Olá, José!</Text>

			<Text style={styles.messageText} >Vamos iniciar o seu tratamento? :)</Text>

			<TouchableOpacity style={styles.button} onPress={() => navigate("/exercise")}>
				<Text style={styles.textButton} >Iniciar tratamento</Text>
			</TouchableOpacity>

			<IconsContainer />

		</View>
	);
}
