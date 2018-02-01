INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Men''s 10km Sprint', '2018-02-11', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Johannes Thingnes Boe', 'NOR', 1, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Martin Fourcade', 'FRA', 2, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Emil Hegle Svendsen', 'NOR', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Simon Schempp', 'GER', 4, 0.0, null);