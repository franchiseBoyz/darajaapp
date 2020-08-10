import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import TabNavigator from "./navigation/mainTabNavigator"

class ExpoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1.5,
          borderColor: "white",
          marginTop: 20,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "green",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: "red",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10",
              height: 70+"%",
              backgroundColor: "#D2EA9B"
            }}
          >
            <Text>TR</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              flex: 9,
              marginHorizontal: 10,
              height: 70+"%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 10
            }}
          >
            <Text>Search Item</Text>
          </View>
        </View>

       <View
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start"
          }}
        >
          <View
            style={{
              width:20+"%",
              height: 50+"%",
              borderWidth:1,
              marginRight: 20,
              borderRadius: 15,
              flexDirection: "column",
              backgroundColor: "#E5F1DB"
            }}
          >
            <View
              style = {{
                height:85+"%",
                borderWidth:1,
                justifyContent:"center",
                alignItems:"center",
                borderColor: "red"
              }}
            >
                <Text>IC</Text>
            </View>

            <View
              style={{
                height:15+"%",
                borderWidth:1,
                justifyContent:"center",
                alignItems:"center",
                borderColor: "red"
              }}
            >
              <Text>Clothes</Text>
            </View>
        </View>

        <View
        style={{
          width:20+"%",
          height: 50+"%",
          borderWidth:1,
          marginRight: 20,
          borderRadius: 15,
          backgroundColor: "#FEF6E1",
          flexDirection: "column"
        }}
          
        >
          <View
            style={{
              height:85+"%",
              borderWidth:1,
              justifyContent:"center",
              alignItems:"center",
              borderColor: "red"
              }}
            >
            <Text>IC</Text>
          </View>

          <View
            style={{
              height:15+"%",
              borderWidth:1,
              justifyContent:"center",
              alignItems:"center",
              borderColor: "red"
              }}
          >
            <Text>Footwear</Text>
        </View>
        </View>

        <View
          style={{
            width:20+"%",
            height: 50+"%",
            borderWidth:1,
            marginRight: 20,
            borderRadius: 15,
            backgroundColor: "#E5F1DB",
            alignItems:"center",
            flexDirection: "column",
            borderColor:"red"
            }}
        >
          <View>
            <Text>IC</Text>
          </View>
          <Text>Eatery</Text>
        </View>
        </View>
          <View> 
          </View>

    
      <View 
          style={{ 
            flex: 3.5,
            borderWidth: 1,
            borderColor: "black",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center" 
            }}
        >
          <View 
              style={{
                flex:1, 
                borderWidth:1,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                width: 100+"%"
                }}
                >
            <TouchableOpacity style={{backgroundColor:"#FC5455"}}>
              <Text style={{color:"white"}}>NEW PRODUCTS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color:"#FC5455"}}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View 
              style={{
                flex:9,
                borderWidth:1,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                marginRight:10
                }}
                >
                  <View 
                    style={{
                      flex:1,
                      borderWidth:1, 
                      flexDirection:"column",
                      height: 80 +"%",
                      alignItems: "center",
                      justifyContent: "space-between"
                      }}
                      >
                        <View
                          style={{
                            flex:1,
                            borderWidth:1,
                            justifyContent:"flex-end",
                            flexDirection:"row",
                            width: 100+"%"
                            }}
                            >                             
                              </View>
                              <View style={{width:20+"%"}}>
                                <Text>!3</Text>
                              </View>
                              <View
                                style={{
                                  flex:4,
                                  borderWidth:1,
                                  justifyContent:"flex-start",
                                  alignItems:"center",
                                  width:80+"%"                            
                                  }}
                              >
                              <Text>Image</Text>
                              </View>
                              <View
                              style={{
                                flex:3.0,
                                borderWidth:1,
                                justifyContent:"flex-start",
                                flexDirection:"column",
                                alignItems:"center"
                                }}
                              >
                                <Text style={{fontWeight:"bold"}}>Flannel Shirt</Text>
                                <Text>KShs. 700</Text>
                                <Text>2</Text>
                              </View>
                              <View 
                              style={{
                                flex:2.0,
                                borderWidth:1,
                                justifyContent:"center",
                                alignItems:"center",
                                flexDirection:"row",
                                width: 100 + "%",
                                backgroundColor: "#FCBF00",
                                marginTop:5
                                }}
                              >
                              <Text>ADD TO CART</Text>
                              </View>
                            
                          </View>
                  <View
                      style={{
                        flex:1,
                        borderWidth:1, 
                        flexDirection:"column",
                        height: 80 +"%",
                        alignItems: "center",
                        justifyContent: "space-between"
                        }}
                        >
                    <Text>Box 2</Text>
                  </View>
            </View>
          </View>
          
      <View style={{ flex: 4, borderWidth: 1, borderColor: "black" }}>
        <Text> Box 4 </Text>
      </View>
      </View>

  )
  }  
}

export default ExpoApp;
