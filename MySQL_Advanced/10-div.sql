-- create a function "SafeDiv" divides first and second number and return the values

DELIMITER $$

CREATE FUNCTION SafeDiv (a INT, b INT)
RETURNS FLOAT DETERMINISTIC
BEGIN
    IF b = 0 THEN
        Return 0;
    ELSE 
        RETURN a / b;
    END IF;
END $$

DELIMITER ;
