DROP DATABASE IF EXISTS OLYMPICS18;
CREATE DATABASE OLYMPICS18;

\c OLYMPICS18;

CREATE TABLE user_profile (
  user_id  serial primary key,
  frst_nm     varchar(50),
  lst_nm      varchar(50),
  eml_tx      varchar(100),
  group_nm       varchar(50),
  password    varchar(256)
);

INSERT INTO USER_PROFILE (FRST_NM, LST_NM, EML_TX, GROUP_NM, PASSWORD) 
VALUES ('Matt', 'Timoney', 'timoney.matt@gmail.com', 'family', 'test');