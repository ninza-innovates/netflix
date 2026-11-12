import selectionFilter from './selection-filter';

test('groups series and films by genre', () => {
  const series = [
    { genre: 'comedies', title: 'A' },
    { genre: 'crime', title: 'B' },
  ];
  const films = [{ genre: 'drama', title: 'C' }];

  const result = selectionFilter({ series, films });

  expect(result.series.find((row) => row.title === 'Comedies').data).toEqual([
    { genre: 'comedies', title: 'A' },
  ]);
  expect(result.films.find((row) => row.title === 'Drama').data).toEqual([
    { genre: 'drama', title: 'C' },
  ]);
});
