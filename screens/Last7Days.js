import React, { Component } from "react";
import {
  Platform,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { List, ListItem } from "react-native-elements";

var doc = [
  { planet: "Mars", system: "Aenean condimentum tellus nec lobortis volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at erat tempus, vehicula tortor non, finibus augue.", inhabited: false },
  { planet: "Earth", system: "Duis pulvinar, mauris in consectetur dictum, nibh nibh tincidunt ipsum, et luctus tellus elit nec nisi. Morbi sit amet aliquet urna, sed tempus mi. ", inhabited: true },
  { planet: "Jupiter", system: "In augue orci, dictum ut neque vitae, sagittis auctor elit. Nam vel ultrices sem. Sed iaculis tristique augue ut mattis. Nullam quis lobortis nulla, quis dictum ipsum.", inhabited: false },
  { planet: "Omicron Persei 8", system: "futurama", inhabited: true }
];

class Last7Days extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`
    };
  };

  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  componentDidMount() {
    console.log("Mongodb mounted");
    // Type 3: Persistent datastore with automatic loading
    var Datastore = require("react-native-local-mongodb"),
      db = new Datastore({ filename: "asyncStorageKey", autoload: true });
    // You can issue commands right away
    console.log("db made");
    db.insert(doc, (err, newDoc) => {
      if (err) console.warn(err);
      else {
        console.log("HI");
        this.setState({ content: newDoc });
        console.log(this.state.content);
      }
    });
  }

  getInitialState() {
    return {};
  }

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <ScrollView>
        <List containerStyle={styles.list}>
          {/* Check if state.content is empty or not */}
          {this.state.content.length > 0 ? (
            this.state.content.map((item, i) => (
              <ListItem
                key={i}
                title={item.planet}
                subtitle={item.system}
                //onPress={() => navigate("All", { screen: "All" })}
                //leftIcon={{ name: "book" }}
                wrapperStyle={{ paddingLeft: 0 }}
                underlayColor="#dedede"
                titleStyle={styles.listitem_t}
                containerStyle={styles.listitem_c}
              />
            ))
          ) : null}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: "#ffffff"
  },
  listitem_t: {
    fontSize: 16,
    color: "black"
  },
  listitem_c: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    marginLeft: 0
  },
  h1: {
    fontSize: 35,
    fontWeight: "800",
    marginLeft: 20
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default Last7Days;