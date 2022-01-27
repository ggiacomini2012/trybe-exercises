-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".


USE pixar;
DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE title = 'wall-e';