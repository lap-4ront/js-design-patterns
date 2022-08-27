class EventObserver {
  constructor() {
    this.observers = [];
  }

  getObservers() {
    console.log(this.observers);
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    return this.observers.filter((subscriber) => {
      subscriber !== fn;
    });
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => {
      subscriber(data);
    });
  }
}

const wordInput = document.querySelector('.wordInput');
const wordCount = document.querySelector('.wordCount__output');

const countWords = (text) => {
  const pureText = text.trim();
  return pureText.length ? text.trim().split(/\s+/).length : 0;
};

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
  wordCount.innerHTML = countWords(text);
});

wordInput.addEventListener('keyup', (event) => {
  const value = event.currentTarget.value;
  blogObserver.broadcast(value);
});
