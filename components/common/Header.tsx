import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Image
      source={require("@/assets/images/common/main_logo.png")}
      style={styles.image}
    />
    <View style={styles.actions}>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search" size={24} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
});

export default Header;
