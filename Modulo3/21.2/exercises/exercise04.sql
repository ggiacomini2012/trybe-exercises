-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM pixar.theater T
LEFT JOIN pixar.movies M 
ON T.id = M.theater_id
ORDER BY T.name;