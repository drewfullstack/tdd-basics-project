function checkUsernames(array) {
  /* The function checkUsernames should take an array of usernames 
  and return true if they are all valid and false if any are not valid. 
  
  A valid username:
    -is at least 5 characters long
    -may only contain lowercase letters, numbers and underscores
    -is no longer than 20 characters
*/
  if (array.length === 0) {
    return false;
  }

  // array => ["12345abc_"]
  if (array.length === 1) {
    const username = array[0];
    // username => "12345abc_"
    if (username.length >= 5 && username.length <= 20) {
      return true;
    }
  }

  // array => ["12345abc_", "andrew123", "__username"]
  const allUsernamesValid = array.every((username, index) => {
    // username is between 5-20 characters
    // username only contains lower case, numbers, and underscores
    const regex = /^[a-z0-9_]{5,20}$/;

    return regex.test(username);
  });

  if (allUsernamesValid) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkUsernames;
