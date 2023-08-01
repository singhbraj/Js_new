const sdkAnalytics = function () {
  this.logs = [];
  this.count = 1;

  this.logEvent = function (event) {
    this.logs.push(event);
  };

  this.wait = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });
  };

  this.sendAnalytics = async function () {
      
      // base condition
      if (this.logs.length === 0) {
          return;
        }
     let current = this.logs.shift();

    try {
      await this.wait();
      console.log("Analytics sent is", current);
      this.count++;
    } catch (e) {
      console.log("Failed to send", current);
      console.log("Retrying sending ", current);
      this.logs.unshift(current);
      this.count = 1;
    } finally {
      this.sendAnalytics();
    }
  };
};


let sdk = new sdkAnalytics()
sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.sendAnalytics()