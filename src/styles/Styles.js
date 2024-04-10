import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c497cf",
    alignItems: "center",
    justifyContent: "center",
  },
  Texto: {
    fontSize: 40,
    color: "purple",
    fontStyle: "italic",
  },
  Input: {
    backgroundColor: "purple",
    fontSize: 30,
    borderRadius: 10,
    borderColor: "black",
  },
  btn: {
    width: 300,
    backgroundColor: "#2a2b2b",
    borderWidth: 1,
    borderColor: "#2a2b2b",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
});
