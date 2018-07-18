import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SideBar from './sideBar';
import { Drawer } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  closeDrawer(){
    this._drawer._root.close()
  };
  openDrawer(){
    this._drawer._root.open()
  };
  render() {
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} >
      <View style={styles.container}>
      <View style={styles.header}>
            <Icon
              name='md-menu'
              size={20}
              style={{ color: '#a8a8a8' }}
              onPress={()=> this.openDrawer()} />
          </View>

      </View>
      </Drawer>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: 'red'
  },
});
