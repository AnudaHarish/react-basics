import {it,expect} from 'vitest';
import { formatMoney } from './formatMoney';

it('format money cents', () => {
  expect(formatMoney(1234)).toBe('$12.34');
});

it('show price value with two deimals', () => {
  expect(formatMoney(1200)).toBe('$12.00');
  expect(formatMoney(100)).toBe('$1.00');
});