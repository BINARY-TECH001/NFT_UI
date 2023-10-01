import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrie } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{ width: 46, height: 48 }}
      />

      <View>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Bid placed by {bid.name}
        </Text>
        
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small - 2,
          color: COLORS.secondary,
          marginTop: 3,
        }}>
          Bid placed by {bid.date}
        </Text>
      </View>

      <EthPrie price={bid.price} />
    </View>
  )
}

export default DetailsBid