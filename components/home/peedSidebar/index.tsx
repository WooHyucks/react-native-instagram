import { ScrollView, View } from "react-native";
import { Peed } from "./Peed";
import peedData from "./peedData";

export default function PeedSidebar() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {peedData.map((peed) => (
          <Peed key={peed.name} {...peed} />
        ))}
      </ScrollView>
    </View>
  );
}
