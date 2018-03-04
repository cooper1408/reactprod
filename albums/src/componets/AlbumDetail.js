//import dependencies
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
//functional component
const AlbumDetail = ({ record }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
   } = record;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumnailContainerStyle,
    headerTextStyle,
    imageStyle
    } = styles;
  return (
    <Card>
      <CardSection>
      <View style={thumnailContainerStyle}>
        <Image
        style={thumbnailStyle}
        source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>

      <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
        Buy Now !!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
