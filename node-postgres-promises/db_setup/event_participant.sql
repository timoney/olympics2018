CREATE TABLE event_participant (
  event_participant_id    serial primary key,
  event_id                int references event(event_id),
  participant_nm          varchar(50),
  country                 varchar(50),
  points                  int,
  odds                    decimal,
  finish                  int  
);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES (1, 'Bode Miller', 'USA', 8, 0.8, 1);