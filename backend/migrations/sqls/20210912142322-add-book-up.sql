CREATE TABLE `greenbook`.`book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NOT NULL,
  `title` VARCHAR(90) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `page` INT NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
