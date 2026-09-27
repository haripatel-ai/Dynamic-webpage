const studentRecords = [
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 76 },
    { name: "Neha", marks: 93 }
];

let studentOutput = "";

studentRecords.forEach(record => {

    studentOutput += `
        <div class="student-card">
            <h3>${record.name}</h3>
            <p>Score Obtained: ${record.marks}/100</p>
        </div>
    `;
});

document.getElementById("studentData").innerHTML = studentOutput;