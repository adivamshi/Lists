import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from './Components/header';
import ListItem from './Components/listItem';
import AddItem from './Components/addItem';
import Storage from './storage';

//Root Element
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingList: [],
    };
  }

  addItem(item) {
    let prevList = this.state.shoppingList;
    this.setState({
      shoppingList: [item, ...prevList],
    });
  }

  removeItem(key) {
    Storage.removeValue(key).then(console.log('Removed'));
    let updatedList = this.state.shoppingList.filter(function (item) {
      return item.key !== key;
    });
    console.log(JSON.stringify(updatedList));
    this.setState({
      shoppingList: updatedList,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Storage.getAllData().then((allData) => {
      allData.forEach((data) => this.addItem({text: data[1], key: data[0]}));
    });
  }

  renderItems({item}) {
    return <ListItem item={item} pressHandler={this.removeItem.bind(this)} />;
  }

  submitHandler(text) {
    let key = Date.now().toString();
    Storage.storeData(key, text).then(() => console.log('Stored'));
    this.addItem({key: key, text: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItem submitHandler={this.submitHandler.bind(this)} />
          <View style={styles.list}>
            <FlatList
              data={this.state.shoppingList}
              renderItem={this.renderItems.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
});

export default App;
