import { BookBookmark, ChatDots, FolderSimpleMinus } from "phosphor-react-native";
import React from "react";
import { View } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

export function IconsContainer() {
	return (
		<View style={styles.container}>

			<FolderSimpleMinus size={50} color={theme.COLORS.purple} weight='fill' />

			<ChatDots size={50} weight="fill" color={theme.COLORS.iconeBackgroundColor} />

			<BookBookmark size={50} weight="fill" color={theme.COLORS.iconeBackgroundColor} />

		</View>
	);
}
