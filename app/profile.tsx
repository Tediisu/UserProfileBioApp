import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Image } from "expo-image";
import React from "react";

const { height: screenHeight } = Dimensions.get("window");

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Box 1 with Full Image */}
      <View style={styles.box}>
        <Image
          source={require("@/assets/images/skele.jpg")}
          style={styles.bgImage}
          contentFit="cover"
        />
      </View>

      {/* Box 2 */}
      <View style={styles.box2}>
        <Text style={styles.title}>Siegfred Noel M. Ungui</Text>
        <Text style={styles.bio}>
          {"\n\n"}Hi, I’m Siegfred 👋{"\n\n"}
          I’m a tech enthusiast and lifelong learner passionate about
          programming, problem-solving, and building meaningful projects. Over
          the past years, I’ve explored different areas of technology — from
          low-level C programming and data structures to modern web development
          with React and Supabase.
        </Text>
        <Text style={styles.bio}>
          I see myself as someone who keeps improving, experimenting, and never
          afraid to learn new tools. Whether it’s debugging tricky C pointer
          issues, designing clean UI/UX layouts, or diving into database
          schemas, I enjoy the process as much as the results.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: "#eee",
  },
  box: {
    height: screenHeight * 0.93, 
    width: "100%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  box2: {
    minHeight: screenHeight * 0.5, 
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30, 
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
    textAlign: "center",
  },
  bio: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
    marginBottom: 12,
    textAlign: "justify",
  },
});
