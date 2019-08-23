import Cookies from "js-cookie";

export default class CookieStorage  {
    constructor(args) {
      this.args = args;
    }
    getItem(key) {
      return Cookies.get(key);
    }
    setItem(key, value) {
      Cookies.set(key, value, this.args);
    }
    removeItem(key) {
      Cookies.remove(key);
    }
  }
  