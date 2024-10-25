import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('mengembalikan hasil penjumlahan yang benar dari dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('mengembalikan hasil penjumlahan yang benar dari satu angka positif dan satu negatif', () => {
  assert.strictEqual(sum(5, -3), 2);
});

test('mengembalikan hasil penjumlahan yang benar ketika kedua angka adalah nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('mengembalikan hasil penjumlahan yang benar dari dua angka negatif', () => {
  assert.strictEqual(sum(-2, -3), -5);
});
