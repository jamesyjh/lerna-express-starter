import * as dotenv from "dotenv";
import * as sinon from "sinon";
import foo from "../src/index";
import { expect } from "chai";
dotenv.config();

describe("Index", () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("Success", () => {
    it("should be able to return bar", () => {
      expect(foo()).to.be.eql("bar");
    });
  });
});
