// TODO - create Level enum type containing High, Medium and Low
enum Level {
     High,
     Medium,
     Low,
     Magago
}
let level: Level;
level = Level.Magago;
console.log(level);

level = 5;

enum Day {
     Sunday = 'SUN',
     Monday = 'MON',
     Tuesday = 'TUE',
     Wednesday = 'WED',
     Thursday = 'THU',
     Friday = 'FRI',
     Saturnday = 'SAT'

}

let week: Day;
week = Day.Tuesday
console.log(week)
week = 'w'