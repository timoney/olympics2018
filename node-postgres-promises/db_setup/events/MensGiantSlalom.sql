INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Men''s Giant Slalom', '2018-02-18', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Marcel Hirscher', 'AUT', 1, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Henri Kristoffersen', 'NOR', 2, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Alexis Pinturault', 'FRA', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Ted Ligety', 'USA', 4, 0.0, null);