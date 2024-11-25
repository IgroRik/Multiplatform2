const xorCipher = {
    // Function to check if the key is valid (between 1 and 255)
    // This method checks whether the key provided is within the valid range of 1 to 255.
    isValidKey: function (key) {
      return key >= 1 && key <= 255;
    },
  
    // Function to generate a random key (between 1 and 255)
    // This method generates a random key between 1 and 255, which can be used for XOR encryption.
    generateKey: function () {
      return Math.floor(Math.random() * 255) + 1;
    },
  
    // XOR encoding method
    // This method encodes a given text using XOR operation with the provided key.
    // Each character in the text is XOR'd with the key, resulting in an encrypted string.
    encodeXOR: function (text, key) {
      let result = '';
      for (let i = 0; i < text.length; i++) {
        // XOR operation for each character
        result += String.fromCharCode(text.charCodeAt(i) ^ key);
      }
      return result;
    },
  
    // XOR decoding method
    // Decoding is the same as encoding since XOR is a symmetric operation.
    // It takes the encrypted text and the same key and reverses the XOR operation to retrieve the original text.
    decodeXOR: function (text, key) {
      return this.encodeXOR(text, key); // Decoding is the same as encoding
    },
  
    // Caesar cipher encoding method
    // This method applies the Caesar cipher to the input text by shifting the alphabetic characters by a specified amount.
    // Non-alphabetic characters are left unchanged.
    encodeCaesar: function (text, shift) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
  
            if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter
                const code = char.charCodeAt(0);
                // Determine if the letter is lowercase or uppercase
                const start = (char.toLowerCase() === char) ? 97 : 65; // Lowercase or uppercase letter
                // Apply the Caesar shift and wrap around if necessary
                result += String.fromCharCode(((code - start + shift) % 26 + 26) % 26 + start);
            } else {
                // Non-alphabetic characters remain unchanged
                result += char;
            }
        }
        return result;
    },
  
    // Caesar cipher decoding method
    // To decode, we simply reverse the shift applied during encoding.
    decodeCaesar: function (text, shift) {
        return this.encodeCaesar(text, -shift); // To decode, just reverse the shift
    },
  
    // Base64 encoding method
    // This method encodes a given text into Base64 format using JavaScript's built-in `btoa` function.
    encodeBase64: function (text) {
      return btoa(text); // Use the built-in JavaScript function to encode to Base64
    },
  
    // Base64 decoding method
    // This method decodes a given Base64-encoded text back to its original string using JavaScript's built-in `atob` function.
    decodeBase64: function (text) {
      return atob(text); // Use the built-in JavaScript function to decode from Base64
    }
  };
  