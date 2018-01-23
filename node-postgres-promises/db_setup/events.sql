CREATE TABLE event (
  event_id    serial primary key,
  event_nm    varchar(50),
  event_dt    date,
  stat_cd     varchar(50)
);

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Alpine Skiing- Men''s Downhill', '2018-02-11', 'NOT_STARTED');