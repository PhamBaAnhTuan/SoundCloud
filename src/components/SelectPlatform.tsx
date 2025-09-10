import { Platform } from "react-native";
import { ThemedText } from "./ThemedText";

{
  Platform.select({
    ios: (
      <ThemedText>
        The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
        component provides a parallax effect for the header image.
      </ThemedText>
    ),
  })
}