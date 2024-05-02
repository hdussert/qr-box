import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Text, View } from "react-native";

const StyledView = styled(View);
export default function App() {
  return (
    <StyledView className=" flex flex-1 bg-red-500 items-center justify-center">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </StyledView>
  );
}
