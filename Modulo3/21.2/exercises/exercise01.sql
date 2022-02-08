-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT title, domestic_sales, international_sales
FROM pixar.movies AS movies
INNER JOIN pixar.boxoffice AS box_office
ON movies.id = box_office.movie_id;
