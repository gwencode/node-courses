const getUserAsync = (userId, callback) => {
  const users = {
    1: { name: 'Joe', age: 20 },
    2: { name: 'Jane', age: 21 }
  };
  setTimeout(() => {
    callback(users[userId]);
  }, 2000);
}

getUserAsync(1, (user) => {
  console.log(user);
});

console.log('end of script');
