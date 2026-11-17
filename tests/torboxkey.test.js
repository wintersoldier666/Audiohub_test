import { describe, it, expect } from 'vitest';
import { isTorboxUrl } from '../src/sources/sourceaddons.js';
import { isSourceManifest } from '../src/sources/sourceaddons.js';
import manifest from '../addons/torbox-search.json';

describe('TorBox addon key', () => {
  it('only torbox.app addresses may receive the stored key', () => {
    expect(isTorboxUrl('https://search-api.torbox.app/torrents/search/x')).toBe(true);
    expect(isTorboxUrl('https://torbox.app.evil.com/x')).toBe(false);
    expect(isTorboxUrl('https://eviltorbox.app/x')).toBe(false);
    expect(isTorboxUrl('nonsense')).toBe(false);
  });
  it('the bundled manifest is a valid source addon', () => {
    expect(isSourceManifest(manifest)).toBe(true);
  });
});
