import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../databse';
export default class Homescreen extends  React.Component{
  constructor(){
    super();
    this.state={
         text: '',
      isSearchPressed: false,
      isLoading: false,
      word: ' ..loading',
      lexicalCategory: ' ..loading',
      definition: ' ..loading',

    }
    
  }
 getWord=(text)=>{{
   var text=text.toLowerCase();
   try{
     var word=dictionary[text]["word"]
     var lexicalCategory=dictionary[text]["lexicalCategory"]
     var definition=dictionary[text]["definition"];
      
     this.setState({
       word:word,
       lexicalCategory:lexicalCategory,
 definition: definition,
     
     })


   }
   catch(err){
alert("Sorry This Word is Not available right now");
this.setState({
  text:'',
  isButtonPressed:false,
})
   }

 }}

 
  render(){

    return(
      <View style={styles.container}>
  
      <Header  backgroundColor={'teal'}
      centerComponent={{text:"POCKET DICTIONARY APP"}}>
      </Header>
       <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({  text: text,
              isSearchedPressed: false,
             
              lexicalCategory: ' ..loading',
              examples: [],
              defiinition: ''
              });
          }}
          
        />
         <TouchableOpacity style={{backgroundColor:"teal",width:170,marginLeft:80,marginTop:40}}><Text style={{color:"black",fontSize:20,textAlign:"center",borderWidth:10,borderColor:"black"}}
         onPress={()=>{
           this.setState({
             isSearchedPressed:true
             
           })
           this.getWord(this.state.text)
         }}
         
         >Search</Text></TouchableOpacity>
           <Text style={styles.textStyle}>WORD:{this.state.word}</Text>
        <Text style={styles.textStyle}>Definition:{this.state.definition}</Text>
        
          <Text style={styles.textStyle}>Type:{this.state.lexicalCategory}</Text>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
   backgroundColor:"teal"
  },
    inputBox: {
    marginTop: 150,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textStyle:{
marginTop:40,
fontSize:20,
fontWeight:"bold",
color:'black',
fontFamily:"sans-serif"
  }
});
