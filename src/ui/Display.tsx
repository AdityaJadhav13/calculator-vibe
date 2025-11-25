import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

interface DisplayProps {
  value: string;
  history: Array<{ expression: string; result: string }>;
  isDarkMode: boolean;
}

export function Display({ value, history, isDarkMode }: DisplayProps) {
  const handleCopy = async () => {
    if (value && value !== 'Error') {
      await Clipboard.setStringAsync(value);
    }
  };

  const colors = isDarkMode
    ? { bg: '#1a1a1a', text: '#ffffff', historyText: '#888888', border: '#333333' }
    : { bg: '#ffffff', text: '#000000', historyText: '#666666', border: '#e0e0e0' };

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* History Section */}
      {history.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={[styles.historyTitle, { color: colors.historyText }]}>History</Text>
          <ScrollView style={styles.historyScroll} showsVerticalScrollIndicator={false}>
            {history.slice(0, 3).map((item, index) => (
              <View key={index} style={styles.historyItem}>
                <Text style={[styles.historyExpression, { color: colors.historyText }]}>
                  {item.expression}
                </Text>
                <Text style={[styles.historyResult, { color: colors.historyText }]}>
                  = {item.result}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Main Display */}
      <View style={styles.displayContainer}>
        <TouchableOpacity onPress={handleCopy} style={styles.copyButton} activeOpacity={0.7}>
          <Ionicons name="copy-outline" size={20} color={colors.historyText} />
        </TouchableOpacity>
        <Text
          style={[styles.displayText, { color: colors.text }]}
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  historyContainer: {
    marginBottom: 20,
    maxHeight: 120,
  },
  historyTitle: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  historyScroll: {
    flexGrow: 0,
  },
  historyItem: {
    marginBottom: 8,
  },
  historyExpression: {
    fontSize: 14,
    fontFamily: 'monospace',
  },
  historyResult: {
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: '600',
  },
  displayContainer: {
    position: 'relative',
    minHeight: 80,
    justifyContent: 'flex-end',
  },
  copyButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
    zIndex: 10,
  },
  displayText: {
    fontSize: 56,
    fontWeight: '300',
    textAlign: 'right',
    fontFamily: 'monospace',
    letterSpacing: -2,
  },
});
