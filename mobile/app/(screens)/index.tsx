import { Platform, StyleSheet, View, Text, Pressable } from 'react-native';
import { UIColors } from '@/constants/theme';
import { horizontalScale, moderateScale, verticalScale } from '@/constants/metrics/metrics';
import Card from '@/components/ui/Cards';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.heroBlock}>
        <Text style={styles.title}>Ready for some fun?</Text>
      </View>

      <Text style={styles.subText}>Gather your friends and let&apos;s play.</Text>

      <Pressable style={styles.primaryActionWrap}>
        <Card style={styles.quickPlayButton}>
          <View style={styles.quickPlayRow}>
            <View style={styles.iconBadge}>
              <Text style={styles.iconText}>⚡</Text>
            </View>

            <View style={styles.quickPlayTextWrap}>
              <Text style={styles.quickPlayTitle}>Quick play</Text>
              <Text style={styles.quickPlayCaption}>Jump into a random game</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </View>
        </Card>
      </Pressable>

      <Text style={styles.sectionLabel}>EXPLORE</Text>

      <View style={styles.grid}>
        <Pressable style={styles.gridItemHalf}>
          <Card style={styles.cardYellow}>
            <View style={styles.tileRow}>
              <View style={styles.tileIconBox}><Text style={styles.tileIcon}>🎲</Text></View>
              <Text style={styles.tileText}>Browse games</Text>
            </View>
          </Card>
        </Pressable>

        <Pressable style={styles.gridItemHalf}>
          <Card style={styles.cardCoral}>
            <View style={styles.tileRow}>
              <View style={styles.tileIconBox}><Text style={styles.tileIcon}>◉</Text></View>
              <Text style={styles.tileText}>Party picker</Text>
            </View>
          </Card>
        </Pressable>

        <Pressable style={styles.gridItemHalf}>
          <Card style={styles.cardTeal}>
            <View style={styles.tileRow}>
              <View style={styles.tileIconBox}><Text style={styles.tileIcon}>▣</Text></View>
              <Text style={styles.tileText}>Custom packs</Text>
            </View>
          </Card>
        </Pressable>

        <Pressable style={styles.gridItemHalf}>
          <Card style={styles.cardCream}>
            <View style={styles.tileRow}>
              <View style={styles.tileIconBox}><Text style={styles.tileIcon}>⚙</Text></View>
              <Text style={styles.tileText}>Settings</Text>
            </View>
          </Card>
        </Pressable>
      </View>

      <Text style={styles.sectionLabel}>RECENT SESSION</Text>

      <Pressable>
        <Card style={styles.sessionCard}>
          <View style={styles.sessionRow}>
            <View style={styles.sessionDot} />
            <View style={styles.sessionTextWrap}>
              <Text style={styles.sessionTitle}>Truth or dare</Text>
              <Text style={styles.sessionMeta}>12 min ago</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </Card>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: moderateScale(5, 0.5),
    paddingBottom: verticalScale(10),
    backgroundColor: UIColors.background,
  },
  heroBlock: {
    marginTop: 2,
    marginBottom: 8,
  },
  title: {
    color: UIColors.text,
    fontSize: moderateScale(30, 0.5),
    fontFamily: 'Fredoka_500Medium',
    lineHeight: moderateScale(36, 0.5),
    paddingBottom: moderateScale(4, 0.5),
    textAlign: 'left',
  },
  subText: {
    color: UIColors.muted,
    fontSize: moderateScale(14, 0.5),
    fontFamily: 'Fredoka_400Regular',
    marginBottom: 14,
  },
  primaryActionWrap: {
    marginBottom: 18,
  },
  quickPlayButton: {
    backgroundColor: UIColors.quickPlay,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  quickPlayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: UIColors.purpleSoft,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: UIColors.border,
    marginRight: 12,
  },
  iconText: {
    fontSize: 18,
    color: UIColors.text,
  },
  quickPlayTextWrap: {
    flex: 1,
  },
  quickPlayTitle: {
    color: '#fffdf8',
    fontSize: moderateScale(18, 0.5),
    fontFamily: 'Fredoka_500Medium',
    marginBottom: 2,
  },
  quickPlayCaption: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: moderateScale(12, 0.5),
    fontFamily: 'Fredoka_400Regular',
  },
  arrow: {
    color: UIColors.white,
    fontSize: 30,
    fontFamily: 'Fredoka_500Medium',
    lineHeight: 30,
    marginLeft: 8,
  },
  sectionLabel: {
    color: UIColors.text,
    fontSize: moderateScale(12, 0.5),
    fontFamily: 'Fredoka_700Bold',
    letterSpacing: 1.2,
    marginTop: 8,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  gridItemHalf: {
    width: '48%',
    marginBottom: 12,
  },
  cardYellow: {
    backgroundColor: UIColors.yellow,
    minHeight: 90,
    justifyContent: 'center',
  },
  cardCoral: {
    backgroundColor: UIColors.coral,
    minHeight: 90,
    justifyContent: 'center',
  },
  cardTeal: {
    backgroundColor: UIColors.teal,
    minHeight: 90,
    justifyContent: 'center',
  },
  cardCream: {
    backgroundColor: UIColors.cream,
    minHeight: 90,
    justifyContent: 'center',
  },
  tileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tileIconBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 2,
    borderColor: UIColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileIcon: {
    fontSize: 16,
    color: UIColors.text,
  },
  tileText: {
    color: UIColors.text,
    fontSize: moderateScale(18, 0.5),
    fontFamily: 'Fredoka_500Medium',
    flexShrink: 1,
  },
  sessionCard: {
    backgroundColor: UIColors.white,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  sessionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: UIColors.quickPlay,
    marginRight: 12,
  },
  sessionTextWrap: {
    flex: 1,
  },
  sessionTitle: {
    color: UIColors.text,
    fontSize: moderateScale(18, 0.5),
    fontFamily: 'Fredoka_500Medium',
  },
  sessionMeta: {
    color: UIColors.muted,
    fontSize: moderateScale(12, 0.5),
    fontFamily: 'Fredoka_400Regular',
    marginTop: 2,
  },
});
