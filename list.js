window.addEventListener('load',(e) => {
    readFormData();
    displayData();
});


function readFormData()
{
    let emp_records = new Array();
    emp_records = JSON.parse(localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];
    localStorage.setItem("employees",JSON.stringify(emp_records));
}

function displayData(empData)
{
   if(localStorage.getItem("employees"))
    {
        var output = document.querySelector('tbody');

        if(output!= null)
        {
            output.innerHTML = "";
            JSON.parse(localStorage.getItem("employees")).forEach((data) => {
                output.innerHTML += `
                    <tr>
                        <td>${data.fname}</td>
                        <td>${data.lname}</td>
                        <td>${data.email}</td>
                        <td>
                            <input type="button" value="Edit" onclick="updateData('${data.email}')" />
                            <input type="button" value="Delete" onclick="removeData('${data.email}')" />
                            <input type="button" value="Show" onclick="showData('${data.email}')" />
                        </td>
                    </tr>
                `;
            });
        }
      
    }
}

function updateData(email)
{
    console.log("In Update data");
    localStorage.setItem('returnData',email);
    localStorage.setItem('edited',true);
    location.href = "index.html"; 
}

function showData(email)
{
    console.log("In show Data");
    localStorage.setItem("displayData",email);
    location.href = "details.html";
}

function removeData(empEmail)
{
    var record = JSON.parse(localStorage.getItem("employees"));
    for(let i = 0; i < record.length; i++)
    {
        if(record[i].email == empEmail)
        {
            console.log(record[i].email);
            record.splice(i,1);
            localStorage.setItem("employees",JSON.stringify(record));
            break;
        }
    }
    displayData();
}
