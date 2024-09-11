function solve(arr) {
  let username = arr.shift();
  let password = "";

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  let guess = arr.shift();
  let wrongCount = 0;

  while (guess !== password) {
    wrongCount++;

    if (wrongCount === 4) {
      console.log(`User ${username} blocked!`);
      return;
    }

    console.log(`Incorrect password. Try again.`);
    guess = arr.shift();
  }

  console.log(`User ${username} logged in.`);
}

// solve(["Acer", "login", "go", "let me in", "recA"]);
// solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);
