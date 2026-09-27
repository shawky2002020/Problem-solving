-- ====================================================================
-- Problem: Second Highest Salary
-- Platform: LeetCode #176
-- Link: https://leetcode.com/problems/second-highest-salary/
-- Difficulty: Medium
-- Category: Database / SQL
-- ====================================================================

-- Table Schema:
-- Employee (id INT PK, salary INT)

-- Approach 1: Subquery with MAX()
-- Guaranteed to return NULL if no second highest salary exists
SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (
    SELECT MAX(salary)
    FROM Employee
);

-- Approach 2: LIMIT / OFFSET with IFNULL / Subquery wrapper
SELECT (
    SELECT DISTINCT salary
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;
