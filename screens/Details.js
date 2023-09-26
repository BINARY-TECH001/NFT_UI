import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { CircleButton, DetailsBid, FocusedStatusbar, RectButton } from "../components";
import { COLORS, SHADOWS, SIZES } from "../constants";

function Details({ route, navigation }) {
  const { data } = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusbar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1,
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids} 
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item)=> item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge }}
        ListHeaderComponent={()=> (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}/>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

const DetailsHeader = ({ data, navigation }) =>(
  <View style={{ width: '100%', height: 373 }}>
    <Image 
      source={data.image}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  </View>
)

export default  Details 