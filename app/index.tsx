import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome</Text>
      <Button
        title="Go to Home"
        onPress={() => router.push("/home")}
      />
    </View>
  );
}
