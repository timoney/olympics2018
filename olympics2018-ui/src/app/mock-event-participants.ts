import { EventParticipant } from './event-participant';

export const EVENT_PARTICIPANTS: EventParticipant[] = [
  { event_participant_id: 1, event_id:1 , participant_nm: 'Megan McJames', country: 'USA', points: 5, odds: 0.5, finish: 1},
  { event_participant_id: 2, event_id:1 , participant_nm: 'Mikaela Shiffrin', country: 'USA', points: 2, odds: 0.2 , finish: 3},
  { event_participant_id: 3, event_id:1 , participant_nm: 'Linsey Vonn', country: 'USA', points: 1, odds: 0.1, finish: 5},
  { event_participant_id: 4, event_id:1 , participant_nm: 'Other', country: '', points: 3, odds: 0.3, finish: 2},
  { event_participant_id: 5, event_id:2 , participant_nm: 'Bryce Bennett', country: 'USA', points: 5 , odds: 0.5, finish: 1},
  { event_participant_id: 6, event_id:2 , participant_nm: 'Ryan Cochran-Siegle', country: 'USA', points: 7 , odds: 0.3, finish: 2},
  { event_participant_id: 7, event_id:2 , participant_nm: 'Tommy Ford', country: 'USA', points: 9 , odds: 0.1, finish: 3},
  { event_participant_id: 8, event_id:2 , participant_nm: 'Other', country: 'USA', points: 9 , odds: 0.1, finish: 4}
]