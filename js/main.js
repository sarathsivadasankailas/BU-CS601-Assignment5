let tableBody = document.getElementById('details');
// JSON file hosted in public web server
let educationDetails = "https://precious-fenglisu-124582.netlify.app/education_background.json";

function getMyEducationBackground() {
    fetch(educationDetails).then(response => {
        return response.json();
    }).then( jsonData => {
        console.log(jsonData);
        let tableData = '<caption><h2>Education Background</h2></caption>';
        tableData += `
        <thead>
            <tr>
                <th>School/College</th>
                <th>Program/Major</th>
                <th>Type</th>
                <th>Year Conferred</th>
            </tr>
        </thead>
        <tbody>
        `;

        for(let data of jsonData) {
            console.log(data);
            let rowData = '<tr>';
            rowData += `<td>${data.school}</td>`;
            rowData += `<td>${data.program}</td>`;
            rowData += `<td>${data.type}</td>`;
            rowData += `<td>${data.yearOfCompletion}</td>`;
    
            tableData += rowData;
        }
        tableData += '</tbody>';
    
        tableBody.innerHTML = tableData;
    });
}
