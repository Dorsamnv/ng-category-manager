import { DatePipe } from '@angular/common';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe('en-US');
    expect(pipe).toBeTruthy();
  });
});
