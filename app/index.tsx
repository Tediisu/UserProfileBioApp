import { StyleSheet, View, Pressable } from "react-native";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withSequence, 
  withTiming, 
  withDelay,
  Easing 
} from "react-native-reanimated";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";

export default function Index() {
  // Shared values for scale + opacity
  const scale1 = useSharedValue(1);
  const opacity1 = useSharedValue(1);

  const scale2 = useSharedValue(1);
  const opacity2 = useSharedValue(1);

  const scale3 = useSharedValue(1);
  const opacity3 = useSharedValue(1);

  React.useEffect(() => {
    scale1.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
    opacity1.value = withRepeat(
      withSequence(
        withTiming(0.3, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    scale2.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      )
    );
    opacity2.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(0.3, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      )
    );

    scale3.value = withDelay(
      800,
      withRepeat(
        withSequence(
          withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      )
    );
    opacity3.value = withDelay(
      800,
      withRepeat(
        withSequence(
          withTiming(0.3, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      )
    );
  }, []);

  const animatedCircle1 = useAnimatedStyle(() => ({
    transform: [{ scale: scale1.value }],
    opacity: opacity1.value,
  }));
  const animatedCircle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
    opacity: opacity2.value,
  }));
  const animatedCircle3 = useAnimatedStyle(() => ({
    transform: [{ scale: scale3.value }],
    opacity: opacity3.value,
  }));

  const handlePress = () => {
    router.push("/profile");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.circleWrapper} onPress={handlePress}>
        <Animated.View style={[styles.circle3, animatedCircle3]} />
        <Animated.View style={[styles.circle, animatedCircle1]} /> 
        <Animated.View style={[styles.circle2, animatedCircle2]} />
        <Image 
          source={require("@/assets/images/pfp.jpg")}
          style={styles.profileImage}
        />
      </Pressable>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  circleWrapper: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: "#8bdcff",
  },
  circle2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#234ee7",
  },
  circle3: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#a3e0ff",
  },
  profileImage: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
  },
});
