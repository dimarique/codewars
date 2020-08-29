function hello(name) {
    if (name === ''){
      name = 'world';
    }
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return 'Hello, ' + nameCapitalized + '!';
  }