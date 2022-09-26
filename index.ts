import { interval, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const period = 500;
const szamsor = interval(period).pipe(
  map((value) => value + 2),
  filter((value) => value % 2 === 1)
);

const subject = new Subject<number>();
szamsor.subscribe(subject);

subject.subscribe({
  next: (counter) =>
    (document.querySelector('#counterDiv').textContent = counter),
});

const subscription2 = subject.subscribe({
  next: (res) => console.warn('subscription2 caught: ', res),
  error: (error) => console.error(error),
  complete: () => console.log('Observable completed...'),
});

/*
 */
