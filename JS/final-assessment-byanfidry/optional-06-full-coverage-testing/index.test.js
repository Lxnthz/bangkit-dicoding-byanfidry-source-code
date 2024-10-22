import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function', async (t) => {
  // Menguji dengan input valid
  assert.strictEqual(sum(2, 3), 5, '2 + 3 harus sama dengan 5');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 harus sama dengan 0');
  assert.strictEqual(sum(10, 20), 30, '10 + 20 harus sama dengan 30');

  // Menguji dengan input negatif
  assert.strictEqual(sum(-1, 1), 0, '(-1) + 1 harus sama dengan 0');
  assert.strictEqual(sum(1, -1), 0, '1 + (-1) harus sama dengan 0');
  assert.strictEqual(sum(-1, -1), 0, '(-1) + (-1) harus sama dengan 0');

  // Menguji dengan input bukan angka
  assert.strictEqual(sum('a', 1), 0, "'a' + 1 harus sama dengan 0");
  assert.strictEqual(sum(1, 'b'), 0, "1 + 'b' harus sama dengan 0");
  assert.strictEqual(sum('a', 'b'), 0, "'a' + 'b' harus sama dengan 0");

  // Menguji dengan input yang bukan angka dan negatif
  assert.strictEqual(sum(null, 2), 0, "null + 2 harus sama dengan 0");
  assert.strictEqual(sum(2, undefined), 0, "2 + undefined harus sama dengan 0");
  assert.strictEqual(sum(NaN, 2), 0, "NaN + 2 harus sama dengan 0");
});
