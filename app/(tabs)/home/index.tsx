import Header from "@/components/common/Header";
import PeedSidebar from "@/components/home/peedSidebar";
import { FlatList } from "react-native";
import postData from "@/components/home/post/postData";
import PostCard from "@/components/home/post/PostCard";

export default function HomeScreen() {
  return (
    <FlatList
      data={postData}
      style={{ backgroundColor: "white" }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard post={item} />}
      ListHeaderComponent={
        <>
          <Header />
          <PeedSidebar />
        </>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
