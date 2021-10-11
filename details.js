function displayRecord()
{
    let detailRecords = new Array();
    let selectedEmail = localStorage.getItem("displayData");
    detailRecords = JSON.parse(localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];
    const index = detailRecords.findIndex((r) => r.email == selectedEmail);

    document.getElementById("firstName").innerText = detailRecords[index].fname;
    document.getElementById("lastName").innerText = detailRecords[index].lname;
    document.getElementById("email").innerText = detailRecords[index].email;
    document.getElementById("phone").innerText = detailRecords[index].phone;
    document.getElementById("date").innerText = detailRecords[index].date;
    document.getElementById("addr").innerText = detailRecords[index].addr;
    document.getElementById("country").innerText = "India";
    document.getElementById("department").innerText = detailRecords[index].dept;
    document.getElementById("status").innerText = detailRecords[index].status;

    localStorage.removeItem("displayData");
}