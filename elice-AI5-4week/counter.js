const counter = {
  count: 0,
  incrementSync: function () {
    const currentTime = Date.now();
    while (currentTime + 3000 > Date.now()) {}
    this.count += 1;
    console.log("동기", counter.count);
  },

  incrementAsync: function () {
    setTimeout(() => {
      this.count += 1000;
      console.log("비동기", counter.count);
    }, 1000);
  },
};

counter.incrementSync();
counter.incrementAsync();

counter.incrementAsync();
counter.incrementSync();
