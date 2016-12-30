DROP DATABASE IF EXISTS activities;
CREATE DATABASE activities;

\c activities;

CREATE TABLE activitytable (
  name VARCHAR,
  moreorless INTEGER,
  qty INTEGER,
  unit VARCHAR,
  weight INTEGER,
  howmanyunits INTEGER,
  total INTEGER
);

INSERT INTO activitytable (name, moreorless, qty, unit, weight, howmanyunits, total) VALUES
  ('run', 1, 1, 'mile', 5, 1, 0),
  ('drink', -1, 1, 'drinks', 6, 1, 0);
