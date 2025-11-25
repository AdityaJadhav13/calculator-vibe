import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Switch, Text } from 'react-native';
import { Display } from './ui/Display';
import { ButtonGrid } from './ui/ButtonGrid';
import { useCalculator } from './hooks/useCalculator';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const calculator = useCalculator();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode ? '#000000' : '#f8f8f8';
  const textColor = isDarkMode ? '#ffffff' : '#000000';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* Theme Toggle */}
      <View style={styles.themeToggle}>
        <Text style={[styles.themeText, { color: textColor }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      {/* Display */}
      <Display value={calculator.display} history={calculator.history} isDarkMode={isDarkMode} />

      {/* Button Grid */}
      <ButtonGrid
        onPress={calculator.addToExpression}
        onClear={calculator.clear}
        onAllClear={calculator.allClear}
        onEquals={calculator.calculate}
        onToggleSign={calculator.toggleSign}
        onPercent={calculator.percent}
        onDelete={calculator.deleteLastChar}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 10,
  },
  themeText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
