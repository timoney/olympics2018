INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Men''s Super-G', '2018-02-15', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Kjetil Jansrud', 'NOR', 1, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Askel Lund Svindal', 'NOR', 2, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Matthias Mayer', 'AUT', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Aleksander Aamodt Klide', 'NOR', 4, 0.0, null);