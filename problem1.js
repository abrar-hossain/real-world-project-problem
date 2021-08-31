const persons = [{ name: 'programming', id: 100 },
{ name: 'haking', id: 300 },
    { name: 'totocompany', id: 500 }];

function getObjectValues(persons) {
    const objectValues = [];
    for (let i = 0; i < persons.length; i++) {
        let text = "";//variable null;
        const element = persons[i];
        for (let property in element) {
            //property convert string
            text = property + ":" + element[property] + "";
        }
        objectValues.push(text);

        
    }
    return objectValues;
}

    
console.log(getObjectValues(persons));