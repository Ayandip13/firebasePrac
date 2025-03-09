import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ChatFaceData from "../Services/ChatFaceData";

const HomeScreen = () => {
  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState(null);

  useEffect(() => {
    setChatFaceData(ChatFaceData);

    setSelectedChatFaceData(ChatFaceData[0]);
  }, []);

  return (
    <View style={{ alignItems: "center", paddingTop: 70 }}>
      <Text style={[{ color: selectedChatFaceData.primary, fontSize: 30 }]}>
        hello
      </Text>
      <Text
        style={[
          {
            color: selectedChatFaceData.primary,
            fontSize: 30,
            fontWeight: "bold",
          },
        ]}
      >
        I'm {selectedChatFaceData?.name}
      </Text>

      <Image
        source={{ uri: selectedChatFaceData?.image }}
        style={{ width: 150, height: 150, marginTop: 20 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
