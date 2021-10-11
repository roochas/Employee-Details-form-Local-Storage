function onSubmit()
{
    var records = new Array();
    records = JSON.parse(localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];
    let edited = localStorage.getItem("edited");
    let emailExisted = records.some ((r) => {return r.email == (document.getElementById("email").value)});
    if( emailExisted && edited == "false")
    {
        alert("Duplicate data");
        document.getElementById("detailform").addEventListener("submit",function(event){
            event.preventDefault(); 
        });
    }
    else
    {
        if(localStorage.getItem("edited"))
        {
            //Delete the record
            var empEmail = localStorage.getItem("returnData");
            console.log(empEmail);
            for(let i = 0; i < records.length; i++)
            {
                if(records[i].email == empEmail)
                {
                    console.log(records[i].email);
                    records.splice(i,1);
                    break;
                }
            }       
        }
        records.push({
            fname: document.getElementById("firstName").value,
            lname: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            date: document.getElementById("dateofbirth").value,
            addr: document.getElementById("address").value,
            dept: document.getElementById("department").value,
            status: document.querySelector( 'input[name="status"]:checked').value
        });
       
        localStorage.setItem("employees",JSON.stringify(records));
        localStorage.setItem("edited",false);
        localStorage.removeItem("returnData");  
        document.getElementById("detailform").target = "_blank";
        location.href = "list.html";
    }
}

function setData()
{
    if(localStorage.getItem("edited"))
    {
        let records = new Array();
        let key = localStorage.getItem("returnData");
        records = JSON.parse(localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];
        const index = records.findIndex((r) => r.email == key);

        document.getElementById("firstName").value = records[index].fname;
        document.getElementById("lastName").value = records[index].lname;
        document.getElementById("email").value = records[index].email;
        document.getElementById("phone").value = records[index].phone;
        document.getElementById("dateofbirth").value = records[index].date;
        document.getElementById("address").innerText = records[index].addr;
        document.getElementById("department").value = records[index].dept;
        radiobtn = document.getElementById(records[index].status);
        radiobtn.checked = true;
    }
}

