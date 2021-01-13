import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should have H1 that says users", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    // define jsdom enviroment
    // this test is async return a callback function
    // need to pass done
    // to tell mocha to evaluate
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Users");
      // tell mocha that our test is done
      done();
      window.close();
    });
  });
});
