class ResponseManager {
  //Users
  static accountNotExist(res) {
    res.writeHead(800, 'Account does not exist', {'content-type' : 'text/plain'});
    res.end('Account does not exist!');
  }

  static passwordTaken(res) {
    res.writeHead(801, 'Password taken', {'content-type' : 'text/plain'});
    res.end('Password taken');
  }

  static usernameTaken(res) {
    res.writeHead(802, 'Username taken', {'content-type' : 'text/plain'});
    res.end('Username taken');
  }

  static credentialsWrong(res) {
    res.writeHead(803, 'Username or password is incorrect!', {'content-type' : 'text/plain'});
    res.end('Username or password is incorrect!');
  }

  static successfulUserCreated(res) {
    res.writeHead(804, 'Account creation successful!', {'content-type' : 'text/plain'});
    res.end('Account creation successful!');
  }

  static successfulUserDeleted(res) {
    res.writeHead(805, 'Account deletion successful!', {'content-type' : 'text/plain'});
    res.end('Account deletion successful!');
  }

  static successfulUserUpdate(res) {
    res.writeHead(806, 'Account update successful!', {'content-type' : 'text/plain'});
    res.end('Account update successful!');
  }

  //Kingdoms
  static kingdomNotExist(res) {
    res.writeHead(900, 'Kingdom does not exist', {'content-type' : 'text/plain'});
    res.end('Kingdom does not exist!');
  }

  static ownerOwnsKingdom(res) {
    res.writeHead(901, 'Kingdom owner already has a kingdom', {'content-type' : 'text/plain'});
    res.end('Kingdom owner already has a kingdom!');
  }

  static kingdomNameTaken(res) {
    res.writeHead(902, 'Kingdom name is taken!', {'content-type' : 'text/plain'});
    res.end('Kingdom name is taken!');
  }

  static successfulKingdomCreated(res) {
    res.writeHead(903, 'Kingdom creation successful!', {'content-type' : 'text/plain'});
    res.end('Kingdom creation successful!');
  }

  static successfulKingdomDeleted(res) {
    res.writeHead(904, 'Kingdom deletion successful!', {'content-type' : 'text/plain'});
    res.end('Kingdom deletion successful!');
  }

  static successfulKingdomUpdate(res) {
    res.writeHead(905, 'Kingdom deletion successful!', {'content-type' : 'text/plain'});
    res.end('Kingdom deletion successful!');
  }

}
