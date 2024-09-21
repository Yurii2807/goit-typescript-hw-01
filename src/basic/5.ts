enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  console.log(day);
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
console.log(isWeekend(DayOfWeek.Sunday));
