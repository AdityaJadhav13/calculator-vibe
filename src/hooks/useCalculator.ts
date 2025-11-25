import { useState } from 'react';
import { evaluateExpression, toggleSign } from '../logic/evaluator';

export interface HistoryEntry {
  expression: string;
  result: string;
}

export interface CalculatorState {
  display: string;
  expression: string;
  history: HistoryEntry[];
  lastResult: string;
  isNewCalculation: boolean;
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    expression: '',
    history: [],
    lastResult: '',
    isNewCalculation: true,
  });

  const addToExpression = (value: string) => {
    setState((prev) => {
      if (prev.display === 'Error') {
        // Start fresh after error
        return {
          ...prev,
          display: value,
          expression: value,
          isNewCalculation: false,
        };
      }

      if (prev.isNewCalculation && /\d/.test(value)) {
        // Start new calculation with a number
        return {
          ...prev,
          display: value,
          expression: value,
          isNewCalculation: false,
        };
      }

      // Handle operators
      if (['+', '-', '×', '÷'].includes(value)) {
        const newExpression = prev.isNewCalculation
          ? prev.lastResult + value
          : prev.expression + value;
        return {
          ...prev,
          expression: newExpression,
          display: newExpression,
          isNewCalculation: false,
        };
      }

      // Handle decimal point
      if (value === '.') {
        // Check if current number already has a decimal
        const parts = prev.expression.split(/[+\-×÷]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) {
          return prev; // Don't add another decimal
        }
      }

      const newExpression = prev.expression + value;
      return {
        ...prev,
        display: newExpression,
        expression: newExpression,
        isNewCalculation: false,
      };
    });
  };

  const clear = () => {
    setState((prev) => ({
      ...prev,
      display: '0',
      expression: '',
      isNewCalculation: true,
    }));
  };

  const allClear = () => {
    setState({
      display: '0',
      expression: '',
      history: [],
      lastResult: '',
      isNewCalculation: true,
    });
  };

  const calculate = () => {
    setState((prev) => {
      if (!prev.expression || prev.expression.trim() === '') {
        return prev;
      }

      const result = evaluateExpression(prev.expression);

      const newHistory = [
        { expression: prev.expression, result: result.result },
        ...prev.history.slice(0, 9), // Keep last 10 entries
      ];

      return {
        ...prev,
        display: result.result,
        expression: result.success ? '' : prev.expression,
        lastResult: result.success ? result.result : prev.lastResult,
        history: newHistory,
        isNewCalculation: true,
      };
    });
  };

  const handleToggleSign = () => {
    setState((prev) => {
      // If we have a full expression, apply to last number
      if (prev.expression && !prev.isNewCalculation) {
        // Find the last number in the expression
        const match = prev.expression.match(/(\d+\.?\d*)$/);
        if (match) {
          const lastNum = match[1];
          const toggled = toggleSign(lastNum);
          const newExpression = prev.expression.slice(0, -lastNum.length) + toggled;
          return {
            ...prev,
            expression: newExpression,
            display: newExpression,
          };
        }
      }

      // Otherwise toggle the display value
      const toggled = toggleSign(prev.display);
      return {
        ...prev,
        display: toggled,
        expression: toggled,
        lastResult: toggled,
      };
    });
  };

  const handlePercent = () => {
    setState((prev) => {
      if (prev.display === '0' || prev.display === 'Error') {
        return prev;
      }

      // Add % to the current expression
      const newExpression = prev.expression + '%';
      return {
        ...prev,
        expression: newExpression,
        display: newExpression,
      };
    });
  };

  const deleteLastChar = () => {
    setState((prev) => {
      if (prev.expression.length === 0 || prev.isNewCalculation) {
        return { ...prev, display: '0', expression: '', isNewCalculation: true };
      }

      const newExpression = prev.expression.slice(0, -1);
      return {
        ...prev,
        expression: newExpression,
        display: newExpression || '0',
      };
    });
  };

  return {
    display: state.display,
    history: state.history,
    addToExpression,
    clear,
    allClear,
    calculate,
    toggleSign: handleToggleSign,
    percent: handlePercent,
    deleteLastChar,
  };
}
