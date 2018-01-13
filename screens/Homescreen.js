import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import CustomListItem from "../components/CustomListItem";

const listitems = [
  {
    key: "All",
    title: "All",
    leftIcon: "notebook",
    underlayColor: "#dedede"
  },
  {
    key: "Last7Days",
    title: "Last 7 Days",
    leftIcon: "clock",
    underlayColor: "#dedede"
  },
  {
    key: "Trash",
    title: "Trash",
    leftIcon: "trash",
    underlayColor: "#dedede"
  }
];

// initiate counter
const arr = [];
for (var i = 0; i < listitems.length; i++) {
  arr.push(i);
}

class Homescreen extends Component {
  constructor() {
    super();
    this.animatedvalues = [];
    arr.forEach(value => {
      this.animatedvalues[value] = new Animated.Value(0);
    });
  }

  static navigationOptions = {
    title: "Library"
  };

  componentWillMount() {
    this.animate();
  }

  animate() {
    const slidein_timer = arr.map(item => {
      return Animated.timing(this.animatedvalues[item], {
        toValue: 1,
        duration: 200,
        easing: Easing.ease
      });
    });

    Animated.stagger(20, slidein_timer).start();
  }

  render() {
    const { navigate } = this.props.navigation;
    const slidein = arr.map((a, i) => {
      return (
        <CustomListItem
          key={i}
          title={listitems[i].title}
          leftIcon={listitems[i].leftIcon}
          animVals={this.animatedvalues[a]}
          onPress={() =>
            navigate(listitems[i].key, { screen: listitems[i].key })
          }
        />
      );
    });
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>Library</Text>
        <Text style={styles.h2}>Notes</Text>
        <View>{slidein}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginTop: 100
  },
  h1: {
    fontSize: 35,
    fontWeight: "800",
    marginLeft: 20,
    marginBottom: 30
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginBottom: 20
  }
});
export default Homescreen;
