import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Animated,
  StyleSheet
} from "react-native";
import Icon from "../node_modules/react-native-vector-icons/SimpleLineIcons";

const _width = Dimensions.get("window").width;

class CustomListItem extends Component {
  render() {
    const { title, leftIcon, animVals, onPress } = this.props;

    return (
      <Animated.View
        style={{
          marginLeft: animVals.interpolate({
            inputRange: [0, 1],
            outputRange: [_width, 0]
          })
        }}
      >
        <TouchableHighlight
          style={styles.listitem_cont}
          onPress={onPress}
          underlayColor="#f2f2f2"
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View>
              <Icon name={leftIcon} size={25} color="#4F8EF7" />
            </View>
            <View
              style={{
                justifyContent: "center",
                height: "100%",
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "#f2f2f2"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "black"
                }}
              >
                {title}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  listitem_cont: {
    height: 45,
    width: _width,
    paddingLeft: 20,
    marginRight: 0,
    marginLeft: 0,
    justifyContent: "center"
  },
  listitem: {}
});

export default CustomListItem;
