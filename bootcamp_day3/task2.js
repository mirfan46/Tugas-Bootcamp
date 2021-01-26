class Cipher {
  constructor(text) {
    this.text = text;
  }

  encrypt() {
    return Buffer.from(this.text).toString("base64");
  }
}

const encryption = new Cipher("How are you today!");
console.log("hasil enkripsi = ", encryption.encrypt());
