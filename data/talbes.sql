DROP TABLE IF EXISTS Matches;
DROP TABLE IF EXISTS Stats;
DROP TABLE IF EXISTS Players;
DROP TABLE IF EXISTS Position;
DROP TABLE IF EXISTS Teams;







CREATE TABLE Teams(
  id INT PRIMARY KEY,
  team_name varchar(15),
  team_img text

);

CREATE TABLE  Position(
  id INT PRIMARY KEY,
  position_type varchar(20)
);

CREATE TABLE Players(
  id INT PRIMARY KEY,
  player_name varchar(25),
  team_id INT REFERENCES Teams(id),
  position_id INT REFERENCES Position(id),
  is_captain boolean DEFAULT false
);

CREATE TABLE Stats(
  player_id  INT REFERENCES Players(id),
  points_earned INT,
  Fouls INT,
  goals_saved INT
);

CREATE TABLE Matches(
  id INT PRIMARY KEY,
  Home_Team INT REFERENCES Teams(id),
  Away_Team INT REFERENCES Teams(id),
  match_date  varchar(50),
  result INT REFERENCES Teams(id)
);


INSERT INTO Position
(id, position_type)
VALUES
(1, 'Keeper'),
(2, 'Beater'),
(3, 'Chaser'),
(4, 'Seeker');


INSERT INTO Teams
(id, team_name)
VALUES
(1, 'Gryffindor'),
(2, 'Hufflepuff'),
(3, 'Ravenclaw'),
(4, 'Slytherin');

INSERT INTO Players
(id, player_name, team_id, position_id, is_captain)
VALUES
(1, 'Oliver Wood', 1, 1, true),
(2, 'Fred Weasley', 1, 2, false),
(3, 'George Weasley', 1, 2, false),
(4, 'Angelina Johnson', 1, 3, false),
(5, 'Alicia Spinnet', 1, 3, false),
(6, 'Kaite Bell', 1, 3, false),
(7, 'Harry Potter', 1, 4, false);


INSERT INTO Stats
(player_id, points_earned, Fouls, goals_saved)
VALUES
(1, 0, 0, 28),
(2, 0, 6, 10),
(3, 0, 6, 11),
(4, 90, 10, 7),
(5, 45, 4, 3),
(6, 75, 7, 2),
(7, 450, 2, 0);


INSERT INTO Matches
(id, Home_Team, Away_Team, match_date, result)
VALUES
(1, 1, 3, '09/11/2010', 1),
(2, 2, 4, '09/18/2010', 4),
(3, 1, 2, '10/11/2010', 1),
(4, 3, 4, '10/18/2010', 4),
(5, 1, 4, '01/17,2010', 1),
(6, 3, 2, '01/24/2011', 2);
