function paul(x) {
  let miseryScore = {
    kata: 5,
    "Petes kata": 10,
    life: 0,
    eating: 1,
  };

  let result = 0;

  for (let activity of x) result += miseryScore[activity];

  return result < 40
    ? "Super happy!"
    : result < 70
    ? "Happy!"
    : result < 100
    ? "Sad!"
    : "Miserable!";
}

paul([
  "Petes kata",
  "Petes kata",
  "eating",
  "Petes kata",
  "Petes kata",
  "eating",
]);
