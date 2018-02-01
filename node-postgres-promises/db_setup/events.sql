CREATE TABLE event (
  event_id    serial primary key,
  event_nm    varchar(50),
  event_dt    date,
  stat_cd     varchar(50)
);