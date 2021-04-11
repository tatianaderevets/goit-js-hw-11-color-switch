const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),

}
let intervalId = null;

const onStartBtn = () => {
    refs.start.disabled = true;
    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.background = colors[randomColor];
        
    },1000);
   
    
}
const onStopBtn = () => {
  clearInterval(intervalId);
  refs.start.disabled = false;
}

refs.start.addEventListener('click', onStartBtn)

refs.stop.addEventListener('click', onStopBtn)