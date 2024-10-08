// making an object
let person={
    firstname:'kishan',
    lastname:'jaiswal',
    age:20
}

// accessing the object 
console.log(person);
console.log (person.age);
console.log(person['firstname']);

// adding element to the object
person.emp='SDE'
person['usn']=100

console.log(person);

// deleting the element
delete person.lastname
console.log(person);

// modification of the data 
person.age=22
person['usn']=1
console.log(person);

// object inside object
person.address={
    city:'hajipur',
    zip:844101
};
console.log(person.address)
console.log(person.address.zip)

// function
person.welcome=function(){
    console.log("hii, ",this.firstname,"how are you")
}
person.welcome()

// checking properties existence
console.log("has age : ",'age'in person)
console.log("has lastname : ",'lastname 'in person)
