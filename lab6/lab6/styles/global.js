import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB499',
  },

  container2: {
    flex: 1,
    backgroundColor: '#FFB499',
    resizeMode: 'cover',
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
  text2:{
    justifyContent: 'right',
    alignItems: 'right',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'#ff6869',
    paddingTop: 2,
    paddingBottom: 2,
  },
  text3:{
    backgroundColor: '#ff9582',
    justifyContent: 'right',
    alignItems: 'right',
    fontFamily: "Cochin",
    fontWeight: "bold",
    color:'#ff6869',
    paddingTop: 2,
    paddingBottom: 2,
  },
  image:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5
    },
  picture:{
    height: 200,
    width:200,
    position: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'dotted',
    borderColor: '#ff6a4f',

  },
  iconTitle:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'stretch',
    alignItems: 'stretch',
    textAlign: 'center',
  },
})