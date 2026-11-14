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

test('puts children films in the Children row', () => {
  const childFilm = { genre: 'children', title: 'Frozen' };
  const drama = { genre: 'drama', title: 'The Irishman' };

  const result = selectionFilter({
    series: [],
    films: [childFilm, drama],
  });

  expect(result.films.find((row) => row.title === 'Children').data).toEqual([
    childFilm,
  ]);
  expect(result.films.find((row) => row.title === 'Drama').data).toEqual([
    drama,
  ]);
});

test('leaves rows empty when no title matches that genre', () => {
  const result = selectionFilter({
    series: [{ genre: 'western', title: 'Deadwood' }],
    films: [{ genre: 'horror', title: 'Get Out' }],
  });

  expect(result.series.every((row) => row.data.length === 0)).toBe(true);
  expect(result.films.every((row) => row.data.length === 0)).toBe(true);
});
