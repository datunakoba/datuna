
// // first

function findYoungestPerson(users) {
    let youngest = users[0];
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < youngest.age) {
        youngest = users[i];
      }
    }
  
    return youngest.name;
  }
  
  const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];
  
  const youngestPersonName = findYoungestPerson(users);
  console.log(youngestPersonName); 

    //second
  function transformUser(user) {
    const transformedUser = {
      name: 'James',
      lastName: 'Bond',
      age: 30,
      nickName: '007'
      
    };
  
    return transformedUser;
  }
  
  const user = {
    name: 'Alice',
    age: 25,
    nickName: '008'
  };
  
  const transformedUser = transformUser(user);
  console.log(transformedUser);

// THIRD 


function rollDice() {
    return parseInt(Math.random() * 6) + 1;
  }
  
  function diceRollGame() {
    let rollsA = 0;
    let rollsB = 0;
  
    while (true) {
      let rollA = rollDice();
      let rollB = rollDice();
  
      rollsA++;
      rollsB++;
  
      console.log("Player A rolled:", rollA);
      console.log("Player B rolled:", rollB);
  
      if (rollA === 3 || rollB === 3) {
        if (rollA === 3 && rollB === 3) {
          if (rollsA < rollsB) {
            console.log("Player A wins with fewer attempts!");
          } else if (rollsA > rollsB) {
            console.log("Player B wins with fewer attempts!");
          } else {
            console.log("It's a tie!");
          }
        } else if (rollA === 3) {
          console.log("Player A wins!");
        } else {
          console.log("Player B wins!");
        }
  
        break;
      }
    }
  }
  
  diceRollGame();
  