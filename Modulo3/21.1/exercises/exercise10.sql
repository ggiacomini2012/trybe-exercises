SELECT department_id, 
  AVG(salary) AS Averange_Salary,
  COUNT(department_id) AS Number_Employees
FROM hr.employees
  GROUP BY department_id
  HAVING Number_Employees > 10;
