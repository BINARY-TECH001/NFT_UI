import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "react-native";

const FocusedStatusbar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated {...props} /> : null;
}

export default FocusedStatusbar