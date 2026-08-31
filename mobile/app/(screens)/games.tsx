import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import Card from '@/components/ui/Cards';
import { moderateScale, verticalScale } from '@/constants/metrics/metrics';
import { UIColors } from '@/constants/theme';
import { useHeaderContext } from '@/components/common/Header/HeaderContext';

const games = [
  { title: 'Truth or Dare', emoji: '🎲', color: UIColors.yellow },
  { title: 'Party Mix', emoji: '🎉', color: UIColors.coral },
  { title: 'Classic Duo', emoji: '♟️', color: UIColors.teal },
  { title: 'Quick Fire', emoji: '⚡', color: UIColors.cream },
  { title: 'Brain Brawl', emoji: '🧠', color: UIColors.purpleSoft },
  { title: 'Chill Mode', emoji: '🌙', color: '#d7e7ff' },
];

const Games = () => {
  const { headerHeight } = useHeaderContext();

  return (
    <View style={[styles.screen]}>
      <Text style={styles.heading}>Games</Text>
      <Text style={styles.subheading}>Pick a vibe and jump in</Text>

      <View style={styles.grid}>
        {games.map((game) => (
          <Pressable
            key={game.title}
            style={styles.cardWrap}
          >
            <Card style={[styles.card, { backgroundColor: game.color }]}>
              <View style={styles.tileRow}>
                <View style={styles.iconBox}>
                  <Text style={styles.icon}>{game.emoji}</Text>
                </View>
                <Text style={styles.title}>{game.title}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
      </View>
    </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardWrap: {
    width: '48%',
  },
  card: {
    minHeight: 110,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  tileRow: {
    flexDirection: 'row',
    alignItems: 'center',
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