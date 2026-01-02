import { describe, it, expect } from 'vitest';

describe('smoke tests', () => {
  it('should pass a basic assertion', () => {
    expect(true).toBe(true);
  });

  it('should verify a lib module can be imported', async () => {
    const lib = await import('../src/lib/index.js');
    expect(lib).toBeDefined();
  });
});
