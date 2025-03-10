import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import chatFaceItems from "./services/ChatFaceData";

const HomeScreen = () => {
  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState(null);

  useEffect(() => {
    setChatFaceData(chatFaceItems);
    setSelectedChatFaceData(chatFaceItems[2]);
  }, []);
  console.log(chatFaceData);

  return (
    <View style={{ alignItems: "center", paddingTop: 70 }}>
      <Text style={[{ color: selectedChatFaceData?.primary, fontSize: 30 }]}>
        hello
      </Text>
      <Text
        style={[
          {
            color: selectedChatFaceData?.primary,
            fontSize: 30,
            fontWeight: "bold",
          },
        ]}
      >
        I'm {selectedChatFaceData?.name}
      </Text>
      <Image source={selectedChatFaceData?.image} />
    </View>
  );
};

export default HomeScreen;
