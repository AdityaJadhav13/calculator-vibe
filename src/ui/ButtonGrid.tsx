import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

interface ButtonGridProps {
  onPress: (value: string) => void;
  onClear: () => void;
  onAllClear: () => void;
  onEquals: () => void;
  onToggleSign: () => void;
  onPercent: () => void;
  onDelete: () => void;
  isDarkMode: boolean;
}

type ButtonType = 'number' | 'operator' | 'function' | 'equals';

interface Button {
  label: string;
  value: string;
  type: ButtonType;
  action?: string;
  span?: number;
}

export function ButtonGrid({
  onPress,
  onClear,
  onAllClear,
  onEquals,
  onToggleSign,
  onPercent,
  onDelete,
  isDarkMode,
}: ButtonGridProps) {
  const buttons: Button[][] = [
    [
      { label: 'AC', value: 'ac', type: 'function', action: 'allClear' },
      { label: 'C', value: 'c', type: 'function', action: 'clear' },
      { label: '%', value: '%', type: 'function', action: 'percent' },
      { label: '÷', value: '÷', type: 'operator' },
    ],
    [
      { label: '7', value: '7', type: 'number' },
      { label: '8', value: '8', type: 'number' },
      { label: '9', value: '9', type: 'number' },
      { label: '×', value: '×', type: 'operator' },
    ],
    [
      { label: '4', value: '4', type: 'number' },
      { label: '5', value: '5', type: 'number' },
      { label: '6', value: '6', type: 'number' },
      { label: '-', value: '-', type: 'operator' },
    ],
    [
      { label: '1', value: '1', type: 'number' },
      { label: '2', value: '2', type: 'number' },
      { label: '3', value: '3', type: 'number' },
      { label: '+', value: '+', type: 'operator' },
    ],
    [
      { label: '±', value: '±', type: 'function', action: 'toggleSign' },
      { label: '0', value: '0', type: 'number' },
      { label: '.', value: '.', type: 'number' },
      { label: '=', value: '=', type: 'equals', action: 'equals' },
    ],
  ];

  const handlePress = (button: Button) => {
    if (button.action === 'clear') {
      onClear();
    } else if (button.action === 'allClear') {
      onAllClear();
    } else if (button.action === 'equals') {
      onEquals();
    } else if (button.action === 'toggleSign') {
      onToggleSign();
    } else if (button.action === 'percent') {
      onPercent();
    } else if (button.action === 'delete') {
      onDelete();
    } else {
      onPress(button.value);
    }
  };

  const getButtonStyle = (type: ButtonType) => {
    const baseColors = isDarkMode
      ? {
          number: { bg: '#333333', text: '#ffffff' },
          operator: { bg: '#ff9500', text: '#ffffff' },
          function: { bg: '#505050', text: '#ffffff' },
          equals: { bg: '#ff9500', text: '#ffffff' },
        }
      : {
          number: { bg: '#e0e0e0', text: '#000000' },
          operator: { bg: '#ff9500', text: '#ffffff' },
          function: { bg: '#d4d4d2', text: '#000000' },
          equals: { bg: '#ff9500', text: '#ffffff' },
        };

    return baseColors[type];
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#f8f8f8' }]}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, buttonIndex) => {
            const buttonStyle = getButtonStyle(button.type);
            return (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  { backgroundColor: buttonStyle.bg },
                  button.span === 2 && styles.buttonWide,
                ]}
                onPress={() => handlePress(button)}
                activeOpacity={0.7}
              >
                <Text style={[styles.buttonText, { color: buttonStyle.text }]}>
                  {button.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const { width } = Dimensions.get('window');
const buttonSize = (width - 50) / 4;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonWide: {
    width: buttonSize * 2 + 12,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '400',
  },
});
