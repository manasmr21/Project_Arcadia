import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import Card from '@/components/ui/Cards';
import { horizontalScale, moderateScale, verticalScale } from '@/constants/metrics/metrics';
import { UIColors } from '@/constants/theme';
import { useHeaderContext } from '@/components/common/Header/HeaderContext';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Href, router, useFocusEffect } from 'expo-router';

type Game = {
  title: string
  color: string
  route: Href

}

const games : Game[] = [
  { title: 'Truth or Dare', color: UIColors.yellow, route:"/games/truthOrDare" },
  { title: 'Would you rather', color: UIColors.coral, route:"/" },
  { title: 'Who most likely to', color: UIColors.teal, route:"/" },
  { title: 'Never have I ever', color: UIColors.cream, route:"/" },
  { title: 'Dare roulette', color: UIColors.purpleSoft, route:"/" },
  { title: 'Rapid Truth', color: '#d7e7ff', route:"/" },
];

const Games = () => {
  const { setHeaderName, setBack } = useHeaderContext();

  const configHeader = useCallback(() => {
    setHeaderName('Games');
    setBack(true);
  }, [setHeaderName, setBack]);

  useFocusEffect(
    useCallback(() => {
      configHeader();
    }, [configHeader]),
  );

  return (
    <ScrollView style={[styles.screen]}>
      <Text style={styles.subheading}>Pick a vibe and jump in</Text>

      <View style={styles.grid}>
        {games.map((game) => (
          <Pressable
            key={game.title}
            style={styles.cardWrap}
            onPress={()=>router.navigate(game.route)}
          >
            <Card style={[styles.card, { backgroundColor: game.color }]}>
              <View style={styles.tileRow}>
                {/* <View style={styles.iconBox}>
                  <Text style={styles.icon}>{gamxt>
                </View> */}
                <Text style={styles.title}>{game.title}</Text>
                <FontAwesome5 name="greater-than" size={24} color="black" />
              </View>
            </Card>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Games;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: UIColors.background,
    paddingHorizontal: moderateScale(5, 0.5),
    paddingBottom: verticalScale(24),
  },
  heading: {
    color: UIColors.text,
    fontSize: moderateScale(30, 0.5),
    fontFamily: 'Fredoka_500Medium',
    marginTop: 8,
    marginBottom: 4,
  },
  subheading: {
    color: UIColors.muted,
    fontSize: moderateScale(14, 0.5),
    fontFamily: 'Fredoka_400Regular',
    marginBottom: 18,
  },
  grid: {
    gap: 15,
    width: "100%"
  },
  cardWrap: {
    width: '100%'
  },
  card: {
    minHeight: moderateScale(80, 0.5),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tileRow: {
    padding: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 2,
    borderColor: UIColors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
  },
  title: {
    color: UIColors.text,
    fontSize: moderateScale(18, 0.5),
    fontFamily: 'Fredoka_500Medium',
    flexShrink: 1,
  },
});
