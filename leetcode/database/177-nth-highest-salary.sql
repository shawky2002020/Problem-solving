-- ====================================================================
-- Problem: Nth Highest Salary
-- Platform: LeetCode #177
-- Link: https://leetcode.com/problems/nth-highest-salary/
-- Difficulty: Medium
-- Category: Database / SQL
-- ====================================================================

-- Table Schema:
-- Employee (id INT PK, salary INT)

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE M INT;
  SET M = N - 1;

  RETURN (
      SELECT DISTINCT salary
      FROM Employee
      ORDER BY salary DESC
      LIMIT 1 OFFSET M
  );
END;
