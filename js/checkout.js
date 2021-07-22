let LocalTable

window.addEventListener('load', () => 
{
    let FirstName = localStorage.getItem("FirstName");
    let LastName = localStorage.getItem("LastName");
    let Email = localStorage.getItem("Email");
    let PhoneNum = localStorage.getItem("PhoneNum");
    let AdditionalInfo = localStorage.getItem("AdditionalInfo");
    let Table = localStorage.getItem("Table");
    let StartTime = localStorage.getItem("StartTime");
    let EndTime = localStorage.getItem("EndTime");
    let Date = localStorage.getItem("Date");




    document.getElementById("firstname").textContent = FirstName;
    document.getElementById("lastname").textContent = LastName;
    document.getElementById("email").textContent = Email;
    document.getElementById("phonenum").textContent = PhoneNum;
    document.getElementById("additionalinfo").textContent = AdditionalInfo;
    document.getElementById("starttime").textContent = StartTime + ":00";
    document.getElementById("endtime").textContent = EndTime + ":00";
    document.getElementById("date").textContent = Date;

    let TableRows = localStorage.getItem("TableRows");
    let TableColumns = localStorage.getItem("TableColumns");

    for (let i = 0; i < TableRows;i++)
    {
        for (let j=0; j < TableColumns;j++)
        {
            document.getElementById("carttable").rows[i].cells[j].textContent = localStorage.getItem(i + " " + j);
        }
    }    
}
)