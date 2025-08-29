CREATE DATABASE IF NOT EXISTS securespace;
USE securespace;

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `reputation_score` int DEFAULT '0',
  `profile_pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `user_chk_1` CHECK ((`reputation_score` >= 0))
);

-- ALTER TABLE `user`
--   ADD COLUMN `phone` varchar(20) DEFAULT NULL;
-- Phone column removed as per requirements