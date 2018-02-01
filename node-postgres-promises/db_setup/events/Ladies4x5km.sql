INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Ladies'' 4 x 5km Relay', '2018-02-17', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Norway', '', 1, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Sweden', '', 2, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Finland', '', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'USA', '', 4, 0.0, null);