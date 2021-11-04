CREATE TABLE `greenbook`.`reading` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `bookid` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `rating` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idreading_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  INDEX `bookid_idx` (`bookid` ASC) VISIBLE,
  CONSTRAINT `userid`
    FOREIGN KEY (`userid`)
    REFERENCES `greenbook`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `bookid`
    FOREIGN KEY (`bookid`)
    REFERENCES `greenbook`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);