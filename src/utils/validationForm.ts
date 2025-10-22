import { Alert } from "react-native";
import { UserInfo } from "../types/common";

export const isFormChange = (initForm: UserInfo, currentForm: UserInfo): boolean => {
	if (
		!currentForm.userName.trim() ||
		!currentForm.city.trim() ||
		!currentForm.country.trim() ||
		!currentForm.bio.trim()
	) {
		Alert.alert("There is nothing", "Please fill your infomations!");
		return false;
	}
	if (
		currentForm.userName === initForm.userName &&
		currentForm.city === initForm.city &&
		currentForm.country === initForm.country &&
		currentForm.bio === initForm.bio
	) {
		Alert.alert("Nothing changed", "Please fill your infomations!");
		return false;
	}
	return initForm !== currentForm;
};
