SELECT JOB_ID, AVG(salary) AS Averange_Salary FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY Averange_Salary DESC;