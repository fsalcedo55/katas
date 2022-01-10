function paul(x) {
  let miseryScore = {
    kata: 5,
    "Petes kata": 10,
    life: 0,
    eating: 1,
  };

  let result = 0;

  for (let activity of x) result += miseryScore[activity];

  if (result < 40) {
    return "Super happy!";
  } else if (result < 70 && result >= 40) {
    return "Happy!";
  } else if (result < 100 && result >= 70) {
    return "Sad!";
  } else return "Miserable!";
}
