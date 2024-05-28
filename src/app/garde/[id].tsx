import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native'; // Import RouteProp from @react-navigation/native
import { router, useLocalSearchParams, useRouter } from 'expo-router';
import PagerView from 'react-native-pager-view';
import Button from '../../components/Bouton';
import Carousel from 'react-native-snap-carousel';


const entretien = require('#/images/plante_entretien.png');

const Garde: React.FC = () => {
  const { id } = useLocalSearchParams();
  const PagerEntretien = useRef<PagerView>(null);
  const handleEntretienPress = (num: number) => {
    router.replace(`../garde/${num}`);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Garde {id}</Text>
        </View>
        <View style={styles.topline}>
          <Text style={styles.textTopline}>Prochain Entretiens</Text>
        </View>
        <View style={styles.caroussel}>
          <PagerView ref={PagerEntretien} style={styles.containercarouselentretien} initialPage={0}>
            {[1, 2, 3].map(num => (
              <View style={styles.imageContainer} key={num}>
                <Image source={entretien} style={styles.image_plante_entretien} />
                <Button title={`Entretien ${num}`} onPress={() => handleEntretienPress(num)} buttonStyle={styles.gardebutton} textStyle={styles.customButtonTextGarde} />
              </View>
            ))}
          </PagerView>
        </View>
        <View style={styles.div}>
          <View style={styles.topline}><Text style={styles.textTopline}>Notifications Botanistes</Text></View>
          <View style={styles.caroussel}></View>
        </View>
        <View style={styles.div}>
          <View style={styles.topline}><Text style={styles.textTopline}>Entretiens Précédent</Text></View>
          <View style={styles.caroussel}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F1F0',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontFamily: 'KaushanScript',
    fontSize: 30,
    color: '#47635C',
  },
  topline: {
    height: "5%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopColor: '#B5B5B5',
    borderTopWidth: 1,
    borderBottomColor: '#B5B5B5',
    borderBottomWidth: 1,
  },
  textTopline: {
    fontFamily: 'KaushanScript',
    fontSize: 20,
    color: '#47635C',
  },
  caroussel: {
    height: "25%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  containercarouselentretien: {
    height: "100%",
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image_plante_entretien: {
    width: '90%',
    height: '90%',
  },
});


export default Garde;
