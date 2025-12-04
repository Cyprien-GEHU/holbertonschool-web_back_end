-- create a stored procedure computes and store the average score for a student 

DELIMITER $$
CREATE PROCEDURE ComputeAverageScoreForUser(in user_id INT)
BEGIN
    UPDATE users
    SET average_score = (SELECT AVG(score) From corrections WHERE corrections.user_id = user_id)
    WHERE id = user_id;

END$$
DELIMITER ;