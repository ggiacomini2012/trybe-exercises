-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT title, (domestic_sales + international_sales) 
FROM pixar.movies M
INNER JOIN pixar.boxoffice B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;