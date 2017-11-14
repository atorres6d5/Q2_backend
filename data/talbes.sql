DROP TABLE IF EXISTS Teams;
DROP TABLE IF EXISTS Players;
DROP TABLE IF EXISTS Position;
DROP TABLE IF EXISTS Stats;



CREATE TABLE Teams(
  id INT PRIMARY KEY,
  team_name varchar(15)
);

CREATE TABLE Players(
  id INT PRIMARY KEY,
  player_name, varchar(25),
  team_id FOREIGN KEY,
  position_id FOREIGN KEY,
  stats_id FOREIGN KEY
);

CREATE TABLE  Position(
  id INT PRIMARY KEY,
  position_type varchar(20)
);

INSERT INTO Position
(id, position_type)
VALUES
(1, 'Keeper'),
(2, 'Beater'),
(3, 'Chaser'),
(4, 'Seeker');

CREATE TABLE Stats(
  player_id FOREIGN KEY,
  points_earned INT,
  Fouls INT,
  goals_saved INT
);

INSERT INTO Stats
(player_id, points_earned, Fouls, goals_saved)
VALUES
(1, 0, 0, 28)

INSERT INTO Teams
(id, team_name)
VALUES
(1, 'Gryffindor'),
(2, 'Hufflepuff'),
(3, 'Ravenclaw'),
(4, 'Slytherin');

INSERT INTO Players
(id, player_name, team_id, position_id, stats_id)
VALUES
(1, 'Oliver Wood', 1, 1,1 )
