-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
  M.*,
  T.name,
  T.location
FROM pixar.theater T
RIGHT JOIN pixar.movies M
ON M.theater_id = T.id
ORDER BY T.name;

