function isValid(stale, latest, otjson) {
  const operations = JSON.parse(otjson);
  let cursor = 0;
  let transformed = stale;

  for (const op of operations) {
    switch (op.op) {
      case 'skip':
        cursor += op.count;
        if (cursor > stale.length) {
          return false;
        }
        break;

      case 'insert':
        if (cursor > stale.length) {
          return false;
        }
        stale = stale.slice(0, cursor) + op.chars + stale.slice(cursor);
        cursor += op.chars.length;
        break;

      case 'delete':
        const delEnd = cursor + op.count;
        if (delEnd > stale.length) {
          return false;
        }
        stale = stale.slice(0, cursor) + stale.slice(delEnd);
        break;

      default:
        return false;
    }
  }

  return stale === latest;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('isValid', () => {
    it('should return true if they are the same', () => {
      expect(
        isValid(
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          'Repl.it uses operational transformations.',
          '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
        )
      ).toEqual(true);
    });
    it('should return false delete past end', () => {
      expect(
        isValid(
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          'Repl.it uses operational transformations.',
          '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
        )
      ).toEqual(false);
    });
    it('should return false skip past end', () => {
      expect(
        isValid(
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          'Repl.it uses operational transformations.',
          '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
        )
      ).toEqual(false);
    });
    it('should return true', () => {
      expect(
        isValid(
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          'We use operational transformations to keep everyone in a multiplayer repl in sync.',
          '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
        )
      ).toEqual(true);
    });
    it('should return false', () => {
      expect(
        isValid(
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          'We can use operational transformations to keep everyone in a multiplayer repl in sync.',
          '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
        )
      ).toEqual(false);
    });
    it('should return true', () => {
      expect(
        isValid(
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
          '[]'
        )
      ).toEqual(true);
    });
  });
}
