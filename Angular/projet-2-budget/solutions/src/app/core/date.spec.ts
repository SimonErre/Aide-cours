import { dateDuJour } from './date';

describe('dateDuJour', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('uses the local day, not the UTC day', () => {
    // 00:30 local time: in France, UTC is still the previous day.
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 16, 0, 30));

    expect(dateDuJour()).toBe('2026-10-16');
  });

  it('pads month and day with a zero', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 5, 12, 0));

    expect(dateDuJour()).toBe('2026-01-05');
  });
});
