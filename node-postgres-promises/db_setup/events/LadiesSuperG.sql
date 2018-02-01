INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Ladies'' Super-G', '2018-02-17', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Tina Weirather', 'LIE', 1, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Lara Gut', 'SUI', 2, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Lindsey Vonn', 'USA', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Anna Veith', 'AUT', 4, 0.0, null);