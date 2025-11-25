import {
  evaluateExpression,
  validateExpression,
  formatDisplay,
  toggleSign,
} from '../src/logic/evaluator';

describe('Calculator Evaluator', () => {
  describe('Basic Operations', () => {
    test('should add two numbers: 2+2 = 4', () => {
      const result = evaluateExpression('2+2');
      expect(result.success).toBe(true);
      expect(result.result).toBe('4');
    });

    test('should subtract two numbers: 10-3 = 7', () => {
      const result = evaluateExpression('10-3');
      expect(result.success).toBe(true);
      expect(result.result).toBe('7');
    });

    test('should multiply two numbers: 6×7 = 42', () => {
      const result = evaluateExpression('6×7');
      expect(result.success).toBe(true);
      expect(result.result).toBe('42');
    });

    test('should divide two numbers: 15÷3 = 5', () => {
      const result = evaluateExpression('15÷3');
      expect(result.success).toBe(true);
      expect(result.result).toBe('5');
    });
  });

  describe('Operator Precedence', () => {
    test('should respect operator precedence: 1+2*3 = 7', () => {
      const result = evaluateExpression('1+2*3');
      expect(result.success).toBe(true);
      expect(result.result).toBe('7');
    });

    test('should handle parentheses: (1+2)*3 = 9', () => {
      const result = evaluateExpression('(1+2)*3');
      expect(result.success).toBe(true);
      expect(result.result).toBe('9');
    });

    test('should handle complex expressions: 2+3*4-5 = 9', () => {
      const result = evaluateExpression('2+3*4-5');
      expect(result.success).toBe(true);
      expect(result.result).toBe('9');
    });

    test('should handle nested parentheses: ((2+3)*4)÷2 = 10', () => {
      const result = evaluateExpression('((2+3)*4)÷2');
      expect(result.success).toBe(true);
      expect(result.result).toBe('10');
    });
  });

  describe('Decimal Support', () => {
    test('should handle decimal addition: 0.1+0.2', () => {
      const result = evaluateExpression('0.1+0.2');
      expect(result.success).toBe(true);
      // Check if result is approximately 0.3 (handling floating point precision)
      const numResult = parseFloat(result.result);
      expect(numResult).toBeCloseTo(0.3, 10);
    });

    test('should handle negative decimals: -0.5+1.5 = 1', () => {
      const result = evaluateExpression('-0.5+1.5');
      expect(result.success).toBe(true);
      expect(result.result).toBe('1');
    });

    test('should handle decimal multiplication: 2.5×4 = 10', () => {
      const result = evaluateExpression('2.5*4');
      expect(result.success).toBe(true);
      expect(result.result).toBe('10');
    });
  });

  describe('Error Handling', () => {
    test('should handle division by zero: 3÷0 = Error', () => {
      const result = evaluateExpression('3/0');
      expect(result.success).toBe(false);
      expect(result.result).toBe('Error');
    });

    test('should handle empty expression', () => {
      const result = evaluateExpression('');
      expect(result.success).toBe(false);
    });

    test('should handle invalid characters', () => {
      const result = evaluateExpression('2+abc');
      expect(result.success).toBe(false);
      expect(result.result).toBe('Error');
    });

    test('should handle mismatched parentheses', () => {
      const result = evaluateExpression('(2+3');
      expect(result.success).toBe(false);
    });
  });

  describe('Percent Operations', () => {
    test('should handle percent: 100% = 1', () => {
      const result = evaluateExpression('100%');
      expect(result.success).toBe(true);
      expect(result.result).toBe('1');
    });

    test('should handle percent in expressions: 50%+0.5 = 1', () => {
      const result = evaluateExpression('50%+0.5');
      expect(result.success).toBe(true);
      expect(result.result).toBe('1');
    });

    test('should handle multiple percents: 200%×50 = 100', () => {
      const result = evaluateExpression('200%*50');
      expect(result.success).toBe(true);
      expect(result.result).toBe('100');
    });
  });

  describe('Exponentiation', () => {
    test('should handle power operation: 2^3 = 8', () => {
      const result = evaluateExpression('2^3');
      expect(result.success).toBe(true);
      expect(result.result).toBe('8');
    });

    test('should handle decimal exponents: 4^0.5 = 2', () => {
      const result = evaluateExpression('4^0.5');
      expect(result.success).toBe(true);
      expect(result.result).toBe('2');
    });
  });

  describe('Toggle Sign', () => {
    test('should negate positive numbers', () => {
      const result = toggleSign('5');
      expect(result).toBe('-5');
    });

    test('should negate negative numbers', () => {
      const result = toggleSign('-5');
      expect(result).toBe('5');
    });

    test('should not change zero', () => {
      const result = toggleSign('0');
      expect(result).toBe('0');
    });

    test('should handle decimals', () => {
      const result = toggleSign('3.14');
      expect(result).toBe('-3.14');
    });
  });

  describe('Format Display', () => {
    test('should format integers', () => {
      const result = formatDisplay('42');
      expect(result).toBe('42');
    });

    test('should remove trailing zeros', () => {
      const result = formatDisplay('5.00000');
      expect(result).toBe('5');
    });

    test('should keep significant decimals', () => {
      const result = formatDisplay('3.14159');
      expect(result).toBe('3.14159');
    });

    test('should handle Error', () => {
      const result = formatDisplay('Error');
      expect(result).toBe('Error');
    });
  });

  describe('Expression Validation', () => {
    test('should validate correct expressions', () => {
      expect(validateExpression('2+2')).toBe(true);
      expect(validateExpression('(1+2)*3')).toBe(true);
      expect(validateExpression('10÷2-3')).toBe(true);
    });

    test('should invalidate incorrect expressions', () => {
      expect(validateExpression('2++')).toBe(false);
      expect(validateExpression('(2+3')).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      const result = evaluateExpression('999999999*999999999');
      expect(result.success).toBe(true);
      expect(parseFloat(result.result)).toBeGreaterThan(0);
    });

    test('should handle very small decimals', () => {
      const result = evaluateExpression('0.0001+0.0001');
      expect(result.success).toBe(true);
      expect(result.result).toBe('0.0002');
    });

    test('should handle negative results', () => {
      const result = evaluateExpression('5-10');
      expect(result.success).toBe(true);
      expect(result.result).toBe('-5');
    });

    test('should handle chained operations: 1+2+3+4+5 = 15', () => {
      const result = evaluateExpression('1+2+3+4+5');
      expect(result.success).toBe(true);
      expect(result.result).toBe('15');
    });
  });
});
