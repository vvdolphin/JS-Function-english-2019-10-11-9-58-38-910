function countWords(message) {
    return message.match(/[\w\-]+/g).length;
}