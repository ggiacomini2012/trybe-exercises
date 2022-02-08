-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT title, rating
FROM pixar.movies M
INNER JOIN pixar.boxoffice B
ON M.id = B.movie_id
ORDER BY rating DESC;