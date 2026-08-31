import { StyleSheet, Text, View, type ViewProps } from 'react-native'
import React from 'react'
import { horizontalScale } from '@/constants/metrics/metrics'
import { UIColors } from '@/constants/theme'

export const screenHorizontalPadding = horizontalScale(20)

const Screen = ({style, children, ...props} : ViewProps) => {
  return (
    <View
        {...props}
        style={[styles.mainContainer, style]}
    >
        {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: screenHorizontalPadding,
        backgroundColor: UIColors.background,
    }
})