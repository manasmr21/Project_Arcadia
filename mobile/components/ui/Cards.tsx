import React from 'react';
import {
  StyleSheet,
  View,
  type StyleProp,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { moderateScale } from '@/constants/metrics/metrics';
import { UIColors } from '@/constants/theme';

export const CARD_BORDER_RADIUS = 5;
export const CARD_BORDER_WIDTH = 2;
export const CARD_SHADOW_OFFSET = 4;
export const CARD_PADDING = moderateScale(12, 0.5);

export type CardProps = ViewProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  shadow?: boolean;
  borderRadius?: number;
  shadowOffset?: number;
};

export default function Card({
  children,
  style,
  wrapperStyle,
  shadow = true,
  borderRadius = CARD_BORDER_RADIUS,
  shadowOffset = CARD_SHADOW_OFFSET,
  ...props
}: CardProps) {
  const geometry = getCardGeometry(borderRadius, shadowOffset);

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {shadow ? <View style={[styles.shadow, geometry.shadow]} /> : null}
      <View style={[styles.surface, geometry.surface, style]} {...props}>
        {children}
      </View>
    </View>
  );
}

function getCardGeometry(borderRadius: number, shadowOffset: number) {
  return {
    shadow: {
      borderRadius,
      top: shadowOffset,
      right: -shadowOffset,
      bottom: -shadowOffset,
    },
    surface: {
      borderRadius,
    },
  };
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    left: 0,
    backgroundColor: UIColors.border,
  },
  surface: {
    position: 'relative',
    zIndex: 1,
    borderWidth: CARD_BORDER_WIDTH,
    borderColor: UIColors.border,
    borderRadius: CARD_BORDER_RADIUS,
    padding: CARD_PADDING,
    backgroundColor: UIColors.white,
  },
});
