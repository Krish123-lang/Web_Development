const language = "JavaScript";
console.log(language.substring(1, 4)); // ava
console.log(language.substring(4)); // Script

// ----------------------------------

/**
 * @param {string} text
 */
function skipFirstCharacter(text) {
    return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
