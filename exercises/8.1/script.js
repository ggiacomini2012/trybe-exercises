
// Estudo de HOF - Higher Order Functions

const wakeUp = () => console.log('Acordando!!')
const coffeTime = () => console.log('Bora tomar café!!')
const sleepTime = () => console.log('Partiu dormir!!')
const doingThings = (param) => param();

doingThings(wakeUp);
