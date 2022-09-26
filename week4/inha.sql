-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Inha
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Inha
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Inha` DEFAULT CHARACTER SET utf8 ;
USE `Inha` ;

-- -----------------------------------------------------
-- Table `Inha`.`Building`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inha`.`Building` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;

INSERT INTO BUILDING VALUES (1, 'Building #1'), (2, 'Building #2'), (3, 'Building #3'), (4, 'Building #4'), (5, 'Building #5'); 

-- -----------------------------------------------------
-- Table `Inha`.`Room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inha`.`Room` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(20) NOT NULL,
  `Capacity` INT NULL,
  `Building_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Room_Building_idx` (`Building_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Room_Building`
    FOREIGN KEY (`Building_Id`)
    REFERENCES `Inha`.`Building` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO ROOM VALUES (1, '230', 30, 1), (2, '232', 30, 1), (3, '424', 40, 1), (4, '506', 40, 5), (5, '366', 30, 4); 

-- -----------------------------------------------------
-- Table `Inha`.`Student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inha`.`Student` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(20) NULL,
  `Phone number` INT NULL,
  `Major` VARCHAR(20) NOT NULL,
  `Student Id` INT NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;

INSERT INTO STUDENT VALUES (1, '이경영', 'lee@inha.edu', 01011110000, '경영학과', 12200001), (2, '김전자', 'kim@inha.edu', 01022220000, '전자공학과', 12200002), (3, '최영어', 'choi@inha.edu', 01033330000, '영어영문학과', 12200003), (4, '강생명', 'kang@inha.edu', 01044440000, '생명공학과', 12200004), (5, '박정통', 'park@inha.edu', 01055550000, '정보통신공학과', 12200005);

-- -----------------------------------------------------
-- Table `Inha`.`Department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inha`.`Department` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(20) NULL,
  `Phone number` INT NULL,
  `Room_Id` INT NOT NULL,
  `Student_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Department_Room1_idx` (`Room_Id` ASC) VISIBLE,
  INDEX `fk_Department_Student1_idx` (`Student_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Department_Room1`
    FOREIGN KEY (`Room_Id`)
    REFERENCES `Inha`.`Room` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Department_Student1`
    FOREIGN KEY (`Student_Id`)
    REFERENCES `Inha`.`Student` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO DEPARTMENT VALUES (1, '경영학과', 'manage@inha.edu', 01011110001, 1, 1), (2, '전자공학과', 'elect@inha.edu', 01022220002, 2, 2), (3, '영어영문학과', 'english@inha.edu', 01033330003, 3, 3), (4, '생명과학과', 'biology@inha.edu', 01044440004, 4, 4), (5, '정보통신공학과', 'informa@inha.edu', 01055550005, 5, 5);

-- -----------------------------------------------------
-- Table `Inha`.`Class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inha`.`Class` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(20) NOT NULL,
  `Professor` VARCHAR(20) NULL,
  `Number of participants` INT NULL,
  `Building_Id` INT NOT NULL,
  `Room_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Class_Room1_idx` (`Room_Id` ASC) VISIBLE,
  INDEX `fk_Class_Building1_idx` (`Building_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Class_Room1`
    FOREIGN KEY (`Room_Id`)
    REFERENCES `Inha`.`Room` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Class_Building1`
    FOREIGN KEY (`Building_Id`)
    REFERENCES `Inha`.`Building` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO CLASS VALUES (1, '경영학개론', '경교수', 40, 5, 4), (2, '전자기학', '전교수', 30, 1, 2), (3, 'English 1', 'harry', 30, 4, 5), (4, '일반 생물학', '생교수', 40, 1, 3), (5, '정보통신입문', '정교수', 30, 1, 1); 

-- -----------------------------------------------------
-- Table `Inha`.`Student_has_Class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inha`.`Student_has_Class` (
  `Student_Id` INT NOT NULL,
  `Class_Id` INT NOT NULL,
  PRIMARY KEY (`Student_Id`, `Class_Id`),
  INDEX `fk_Student_has_Class_Class1_idx` (`Class_Id` ASC) VISIBLE,
  INDEX `fk_Student_has_Class_Student1_idx` (`Student_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Student_has_Class_Student1`
    FOREIGN KEY (`Student_Id`)
    REFERENCES `Inha`.`Student` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_has_Class_Class1`
    FOREIGN KEY (`Class_Id`)
    REFERENCES `Inha`.`Class` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO STUDENT_HAS_CLASS VALUES (1,1), (2,2), (3,3), (4,4), (5,5);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
