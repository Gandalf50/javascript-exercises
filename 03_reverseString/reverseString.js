const reverseString = function(text) {
    if (!text) {
        return '';
    } else {
        let reversed = text[text.length-1];
        for (i=text.length-2;i>=0;i--) {
            reversed += text[i];
        }
        return reversed;
    }
};

// Do not edit below this line
module.exports = reverseString;
