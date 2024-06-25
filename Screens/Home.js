import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import moment from "moment";
import { Shows } from "../Mock/Shows";
import BottomNavigation from "../Components/BottomNavigation";

const Home = ({ navigation }) => {
  const now = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        {/* head */}
        <View style={styles.head}>
          <Text style={styles.headText}>Find events in</Text>
          <View style={styles.location}>
            <Image
              style={styles.Icon}
              source={require("../assets/icons/location.png")}
            />
            <Text style={styles.locationText}>Barcelona</Text>
            <Image
              style={styles.Icon}
              source={require("../assets/icons/downArrow.png")}
            />
          </View>
        </View>
        <View>
          <Text style={styles.popularText}>Popular in Barcelona</Text>
        </View>

        {/* card */}
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/rosalia.jpeg")}
          />
          <Text style={styles.newText}>New</Text>
          <View style={styles.cardText}>
            <Text style={styles.cardDate}>{now}</Text>
            <Text style={styles.cardTitle}>La rosalia</Text>
          </View>
          <View style={styles.cardLocation}>
            <View style={styles.textIcon}>
              <Image
                style={styles.Icon}
                source={require("../assets/icons/location.png")}
              />
              <Text style={styles.locationText}>Barcelona</Text>
            </View>
            <View style={styles.iconsSection}>
              <Image
                style={styles.Icon}
                source={require("../assets/icons/share.png")}
              />
              <Image
                style={styles.Icon}
                source={require("../assets/icons/heart.png")}
              />
            </View>
          </View>
        </View>

        {/* FlastList */}
        <View style={styles.flatListContainer}>
          <View style={styles.popular}>
            <Text style={styles.popularText}>Popular in Shows</Text>
          </View>
          <View style={styles.flatListCardContainer}>
            <FlatList
              style={styles.flatList}
              data={Shows}
              renderItem={({ item }) => (
                <View style={styles.flatListCardContainer}>
                  <View style={styles.flatListCard}>
                    <Image style={styles.imageFlatList} source={item.image} />
                    <View style={styles.flatListText}>
                      <Text>{now}</Text>
                      <Text style={styles.flatListTitle}>{item.name}</Text>
                      <View style={styles.textIcon}>
                        <Image
                          style={styles.Icon}
                          source={require("../assets/icons/location.png")}
                        />
                        <Text>{item.location}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.iconsSection}>
                    <Image
                      style={styles.Icon}
                      source={require("../assets/icons/share.png")}
                    />
                    <Image
                      style={styles.Icon}
                      source={require("../assets/icons/heart.png")}
                    />
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
              Vertical
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  subContainer: {
    padding: 20,
    gap: 17,
  },

  head: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    gap: 20,
  },

  headText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 19.2,
  },

  locationText: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 19.2,
  },

  location: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  Icon: {
    width: 18,
    height: 18,
  },

  popularText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    width: 389,
    flexDirection: "column",
    height: 250,
    borderRadius: 10,
    justifyContent: "start",
    alignItems: "start",
    backgroundColor: "#E7E7E7",
    gap: 10,
  },

  image: {
    width: 389,
    height: 150,
    borderStartEndRadius: 10,
    borderStartStartRadius: 10,
    resizeMode: "cover",
  },

  newText: {
    backgroundColor: "#0DCDAA",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    position: "absolute",
    top: 20,
    right: 10,
  },

  cardText: {
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 10,
  },
  cardLocation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 389,
    paddingHorizontal: 10,
  },

  cardTitle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
  },

  cardDate: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 19.2,
  },
  textIcon: {
    flexDirection: "row",
    gap: 5,
  },
  iconsSection: {
    flexDirection: "row",
    gap: 15,
  },

  Icon: {
    width: 18,
    height: 18,
  },

  locationText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 19.2,
  },

  flatListCardContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flatList: {
    width: 389,
    height: 355,
  },

  imageFlatList: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  flatListCard: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },

  flatListText: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 80,
  },

  flatListTitle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
  },
});
