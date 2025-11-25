import { evaluate, parse } from 'mathjs';

export interface EvaluationResult {
  success: boolean;
  result: string;
  error?: string;
}

/**
 * Safe expression evaluator using mathjs library.
 * This function does NOT use eval() and properly handles:
 * - Basic operations: + - * /
 * - Operator precedence
 * - Parentheses
 * - Decimals
 * - Percent operations
 * - Unary operations
 */
export function evaluateExpression(expression: string): EvaluationResult {
  if (!expression || expression.trim() === '') {
    return { success: false, result: '0', error: 'Empty expression' };
  }

  try {
    // Clean the expression
    let cleanExpr = expression
      .trim()
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-');

    // Handle percent: convert "100%" to "100/100" or "1" based on context
    // If percent is at the end and preceded by a number, treat as division by 100
    cleanExpr = cleanExpr.replace(/(\d+\.?\d*)%/g, '($1/100)');

    // Validate expression has valid characters
    if (!/^[\d+\-*/(). ]+$/.test(cleanExpr)) {
      return { success: false, result: '0', error: 'Invalid characters' };
    }

    // Check for division by zero before evaluation
    if (/\/\s*0(?!\.)(?!\d)/.test(cleanExpr)) {
      return { success: false, result: 'Error', error: 'Division by zero' };
    }

    // Parse and evaluate using mathjs (safe, no eval())
    const result = evaluate(cleanExpr);

    // Handle different result types
    if (typeof result === 'number') {
      // Check for Infinity or NaN
      if (!isFinite(result)) {
        return { success: false, result: 'Error', error: 'Invalid result' };
      }

      // Format result to max 10 decimal places, remove trailing zeros
      const formatted = parseFloat(result.toFixed(10)).toString();
      return { success: true, result: formatted };
    }

    return { success: true, result: result.toString() };
  } catch (error) {
    // Handle parsing or evaluation errors
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, result: 'Error', error: errorMessage };
  }
}

/**
 * Validate if an expression is syntactically correct
 */
export function validateExpression(expression: string): boolean {
  try {
    const cleanExpr = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/(\d+\.?\d*)%/g, '($1/100)');

    parse(cleanExpr);
    return true;
  } catch {
    return false;
  }
}

/**
 * Format a number for display
 */
export function formatDisplay(value: string): string {
  if (value === 'Error' || value === '') return value;

  // Remove trailing zeros and unnecessary decimal point
  const num = parseFloat(value);
  if (isNaN(num)) return value;

  // Format with max 10 decimal places
  const formatted = parseFloat(num.toFixed(10));
  return formatted.toString();
}

/**
 * Toggle the sign of the current value
 */
export function toggleSign(value: string): string {
  if (value === '0' || value === '' || value === 'Error') return value;

  if (value.startsWith('-')) {
    return value.substring(1);
  } else {
    return '-' + value;
  }
}
