let connection;

const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    }
    switch (data) {
      case 'w':
        connection.write('Move: up');
        break;
      case 's':
        connection.write('Move: down');
        break;
      case 'a':
        connection.write('Move: left');
        break;
      case 'd':
        connection.write('Move: right');
        break;
    }
  };
  
  const setupInput = function(conn) {
    connection = conn;

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (data) => {
      handleUserInput(data);
    });
    return stdin;
  }
  
  setupInput();

  module.exports = {setupInput};