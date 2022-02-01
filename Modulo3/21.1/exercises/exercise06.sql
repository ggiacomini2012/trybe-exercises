SELECT JOB_ID ,COUNT(*) FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

Alternative:
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";