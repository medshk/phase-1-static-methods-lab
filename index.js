class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9\-\'\s]/g, "");
  }
  static titleize(str) {
    const excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (i === 0 || !excludedWords.includes(word)) {
        words[i] = this.capitalize(word);
      }
    }

    return words.join(" ");
  }
}
