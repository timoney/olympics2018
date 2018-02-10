# Olympics2018Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


TODO:
1. make forms read only after a certain point of time and remove button to edit
2. center card
3. make sure express app doesnt close when disconnect

1. tolowercase email
2. make more mobile friendly

select frst_nm, lst_nm, c.event_nm, d.participant_nm from user_profile a
inner join user_selection b
  on a.user_id=b.user_id
inner join event c
  on b.event_id=c.event_id
inner join event_participant d
  on b.event_participant_id=d.event_participant_id;

select frst_nm, lst_nm, c.event_nm, count(*) 
from user_profile a
inner join user_selection b
  on a.user_id=b.user_id
inner join event c
  on b.event_id=c.event_id
inner join event_participant d
  on b.event_participant_id=d.event_participant_id
group by frst_nm, lst_nm, event_nm
order by count(*) desc;