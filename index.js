function introduction (name) {
console.log(`hello my name is ${name}`); 

}
function introductionwithlanguage (name, language){
    console.log(`hi,my name is ${name} and i am learning to code ${language}.`);

}
function introductionwithlanguageOptional(name ,language = "javas"){
    console.log(`hello, my name is ${name}! and i am learning to code ${language}`);

}



introduction("melvin")
introductionwithlanguage("Melvin","javascript")
introductionwithlanguageOptional("melvin")