DELETE FROM Pixar.Movies
WHERE id > 15;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
-- WHERE id > 15;
UPDATE Pixar.BoxOffice
SET movie_id = 9
WHERE movie_id = 8;

DELETE FROM Pixar.Movies 
WHERE 1 = 
CASE 
  WHEN id = 13
    THEN 1 
    ELSE 0 
  END