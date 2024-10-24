"use strict";
// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.
Object.defineProperty(exports, "__esModule", { value: true });
const languagesObj1 = {
    name: "New Zealand",
    languages: "English, Māori"
};
console.log(languagesObj1.languages);
const languagesObj2 = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};
console.log(languagesObj2.languages.join(", "));
