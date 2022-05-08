import { StatusBar } from "expo-status-bar";
import { CaretLeft } from "phosphor-react-native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import handImage from "../../assets/hand.png";
import { ExerciseInformation } from "../../components/ExerciseInformation";
import { IconsContainer } from "../../components/IconsContainer";
import { exerciseInformationObject } from "../../util/exerciseInformationObject";
import { styles } from "./styles";

export function Exercise() {
	const navigate = useNavigate();

	return (
		<View style={styles.container}>
			<StatusBar translucent style='dark' backgroundColor='transparent' />

			<TouchableOpacity onPress={() => navigate("/")} style={styles.returnButton} >
				<CaretLeft size={52} color="#000000" />
			</TouchableOpacity >

			<View style={styles.mainContainer}>

				<Image source={handImage} />

				<Text style={styles.exerciseDescriptionText} >Fechar e abrir as mãos</Text>


				<TouchableOpacity style={styles.endExerciseButton}>
					<Text style={styles.endExerciseButtonText} >Feito!</Text>
				</TouchableOpacity>

				<View style={styles.exerciseInformationContainer} >
					{
						Object.entries(exerciseInformationObject).map(([key, value]) => <ExerciseInformation key={key} title={value.title} information={value.information} />)
					}
				</View>





				<IconsContainer />
			</View>




		</View>
	);
}
