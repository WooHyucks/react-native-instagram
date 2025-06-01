import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PostData } from "./postData";
import { Ionicons } from "@expo/vector-icons";

interface PostCardProps {
  post: PostData;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={post.user.profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.username}>{post.user.name}</Text>
          <Text style={styles.time}>{post.createdAt}</Text>
        </View>
      </View>

      <Image source={post.postImage} style={styles.postImage} />

      <View style={styles.content}>
        <View style={styles.actionsContainer}>
          <View style={styles.actions}>
            <Ionicons name="heart-outline" size={24} />
            <Ionicons name="chatbubble-outline" size={23} />
            <Ionicons name="paper-plane-outline" size={23} />
          </View>
          <Ionicons name="bookmark-outline" size={24} />
        </View>
        <Text style={styles.text}>{post.content}</Text>
        <View style={styles.tags}>
          {post.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              #{tag}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 12,
    overflow: "hidden",
    paddingBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 12,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    fontSize: 12,
    color: "#1e90ff",
    marginRight: 6,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    alignItems: "center",
    paddingBottom: 12,
  },
});
