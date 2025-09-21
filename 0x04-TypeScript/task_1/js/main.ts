interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Noah",
    lastName: "Tesfaye",
    age: 21,
    location: "Addis Ababa"
}

const student2: Student = {
    firstName: "Nathan",
    lastName: "Kebede",
    age: 21,
    location: "Addis Ababa"
}

let studentsLists : Student[] = [student1, student2]

const table = document.createElement('table')
const tableBody = document.createElement('tbody')

studentsLists.forEach(student => {
    const newRow = document.createElement('tr')
    const nameCol = document.createElement('td')
    const locationCol = document.createElement('td')

    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;

    newRow.appendChild(nameCol)
    newRow.appendChild(locationCol)
    tableBody.appendChild(newRow)
})

table.appendChild(tableBody)