import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Uji kasus 1: Kedua argumen adalah bilangan positif
test('penjumlahan dua bilangan positif', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 15), 25);
});

// Uji kasus 2: Salah satu atau kedua argumen bukan angka
test('penjumlahan dengan argumen bukan angka', () => {
  assert.strictEqual(sum('a', 3), 0);
  assert.strictEqual(sum(2, 'b'), 0);
  assert.strictEqual(sum(true, 5), 0);
  assert.strictEqual(sum(4, null), 0);
  assert.strictEqual(sum(undefined, 6), 0);
});

// Uji kasus 3: Salah satu atau kedua argumen negatif
test('penjumlahan dengan bilangan negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(3, -5), 0);
  assert.strictEqual(sum(-2, -3), 0);
});

// Uji kasus 4: Kedua argumen adalah nol
test('penjumlahan nilai nol', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(4, 0), 4);
});
