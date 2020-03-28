import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

class FilmDetail extends React.Component {
  constructor(props){
      super(props)
      this.state={
        film:undefined,
        isLoading:true
      }
    }
  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
           </View>
        )}
       }
  render() {
    const idFilm=this.props.route.params.idFilm
    console.log("FilmDetail",this.props.route.params.idFilm)
    console.log("FilmDetail state",this.state)
 
    return (
      <View >
         {this._displayLoading()} 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    width:10,
    height:10 
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top:0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default FilmDetail