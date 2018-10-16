ALTER DATABASE remindmeditate CONNECTION LIMIT 0;

SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'remindmeditate';

DROP DATABASE IF EXISTS remindmeditate;

CREATE DATABASE remindmeditate;

\c remindmeditate;


CREATE TABLE meditations (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  link VARCHAR(200)
);
  -- length int



-- INSERT INTO listing (listingName, nightlyFee, serviceFee, cleaningFee, numReviews, reviewRating, 
--       numGuests, timesRecentlyViewed) VALUES ('${info.name}', ${info.nightlyFee}, ${info.serviceFee}, ${info.cleaningFee}, 
--       ${info.numReviews}, ${info.reviewRating}, ${info.numGuests}, ${info.timesRecentlyViewed})
-- Title is title of meditation
-- Link points to s3 holding an mp3
-- Length in seconds, can be converted to minutes

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     userName VARCHAR(100),
--     followers VARCHAR(7),
--     followStatus BOOLEAN,
--     numTracks SMALLINT,
--     dp VARCHAR(80),
--     premium BOOLEAN
-- );
-- https://stackoverflow.com/questions/22980068/what-is-the-maximum-length-of-varcharn-in-postgresql-9-2-and-which-is-best-to => use text instead of varchar
-- CREATE TABLE entries (
--     id SERIAL PRIMARY KEY,
--     userId VARCHAR(100),
--     followers INT,
--     followStatus BOOLEAN,
--     home VARCHAR(255),
--     dp VARCHAR(80)
-- );

-- CREATE TABLE songs (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(50),
--     artistId INT REFERENCES artists(id),
--     description VARCHAR(150)
-- );

-- CREATE TABLE comments (
--     id SERIAL PRIMARY KEY,
--     comText VARCHAR(150),
--     userId INT NOT NULL REFERENCES users(id),
--     songId INT NOT NULL REFERENCES songs(id),
--     songTimeSpot VARCHAR(5),
--     timeSincePost SMALLINT
-- );

-- CREATE TABLE replies (
--     id SERIAL PRIMARY KEY,
--     comText VARCHAR(150),
--     timeSincePost SMALLINT,
--     userId INT REFERENCES users(id),
--     commentId INT REFERENCES comments(id)
-- );
