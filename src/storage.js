import AsyncStorage from '@react-native-community/async-storage';

const Storage = {
  storeData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  },

  getData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      // error reading value
    }
  },

  removeValue: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }
  },
  getAllData: async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const data = await AsyncStorage.multiGet(keys);
      // let result = {};
      // data.forEach((item) => (result[item[0]] = item[1]));
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Storage;
