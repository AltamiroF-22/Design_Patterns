const sayWelcome = (name: string): string => {
  return `Welcome ${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

console.log(sayWelcome("altamiro"));
