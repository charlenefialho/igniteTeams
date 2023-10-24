import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import theme from "@theme/index";
import Groups from "./src/screens/Groups";
import { Loading } from "@components/Loading";


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups/> : <Loading/>}
    </ThemeProvider>
    
  );
}
