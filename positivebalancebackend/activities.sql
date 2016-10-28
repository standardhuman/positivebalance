DROP DATABASE IF EXISTS activities;
CREATE DATABASE activities;

\c activities;

CREATE TABLE activity (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  moreorless INTEGER,
  unitName VARCHAR,
  weight INTEGER,
  minQty INTEGER,
  didIDo VARCHAR,
  howManyUnits INTEGER
);

INSERT INTO activity (name, moreorless, unitName, weight, minQty, didIDo, howManyUnits)
  VALUES ('run', 1, 'mile', 8, 1, 'yep', 2);
