import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB499',
  },

  text:{
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'white',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
  image:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5
    },
})