
    let Cost;
    let People;
    let Duration;


    let IsTimeLocked = false;
    let PackageDuration;


    let LockedEndTime

    let PrivateRoomCost = 15;
    let HasPrivateRoom = false;

    let DiscountTotal = 0;
    let HasDiscount = false;

    let LockRoom = false;
    


    let PrivateRoomRow;
    let DiscountRow;

    let GrandTotal;






window.addEventListener('load', () => 
{
    let Package = localStorage.getItem("Package");
    document.getElementById("Package").value = Package;
    console.log(Package);
    OnPackageChange();
})

function OnActivityTypeChange()
{
    SelectedActivity = document.querySelector("#ActivityType")
    
    document.querySelector("#item").textContent = SelectedActivity.value;

    const BGCost = 5;
    const KaraokeCost = 10;

    if (SelectedActivity.value === "Boardgame")
    {
        document.querySelector("#cost").textContent = "$" + BGCost;
        Cost = BGCost;
    }
    else
    {
        document.querySelector("#cost").textContent = "$" + KaraokeCost;
        Cost = KaraokeCost;
        document.querySelector("#PrivateRoom").value = "true"
        OnPrivateRoomChange();
    }

    UpdateCost();
}

function OnNumPeopleChange(NumOfPeople)
{
    NumOfPeople = document.querySelector("#NumOfPpl")
    document.querySelector("#people").textContent = NumOfPeople.value;
    People = NumOfPeople.value
    UpdateCost();
}


function OnTimeChange()
{
    let StartTime = document.querySelector("#StartTime").value;
    let EndTime = document.querySelector("#EndTime").value;

    let CalcDuration = EndTime - StartTime;
    if (IsTimeLocked == true)
    {
        StartTime = parseInt(StartTime);
        PackageDuration = parseInt(PackageDuration)

        
        Duration = PackageDuration;
        LockedEndTime = StartTime + PackageDuration;
        document.querySelector("#EndTime").value = LockedEndTime;
        document.querySelector("#duration").textContent = PackageDuration + " Hours";
        UpdateCost();
    }
    else
    {
        if (CalcDuration <= 0)
        {
            //Invalid Time
        }
        else
        {
     
            document.querySelector("#duration").textContent = CalcDuration + " Hours";
            Duration = CalcDuration;
        }
        UpdateCost();
    }
}




function UpdateCost()
{
    let ActivityTotal = Cost * People * Duration;
    let PrivateRoomCalc = 0;
    let DiscountRateCalc = 0;

    if (ActivityTotal > 0)
    {
        document.querySelector("#total").textContent = "$" + ActivityTotal;
    }
    
    GrandTotal = ActivityTotal; //When other items are added this exists

    if (HasPrivateRoom == true)
    {
        PrivateRoomCalc = PrivateRoomCost;
    }

    if (HasDiscount == true)
    {
        DiscountRateCalc = DiscountTotal;
    }

    GrandTotal = ActivityTotal + PrivateRoomCalc + DiscountRateCalc;

    if (GrandTotal > 0)
    {
        document.querySelector("#grandtotal").textContent = "Total: $" + GrandTotal;
    }
}

let Table;

function OnPackageChange()
{
    PackageType = document.querySelector("#Package").value;
    if (PackageType.value == "None")
    {
        //Clear Discount

        if (HasDiscount == true)
        {
            DiscountTotal = 0;
            HasDiscount = false;
            if (DiscountRow)
            {
                RemoveRow(DiscountRow);
            }
            
            if (LockRoom == true)
            {
                LockRoom = false;
            }

            if (IsTimeLocked == true)
            {
                IsTimeLocked = false;
            }
        }
    }
    else if (PackageType == "FourCrowd")
    {
        //Set Activity Type
        document.querySelector("#ActivityType").value = "Boardgame";
        OnActivityTypeChange();

        //Set Number of People
        document.querySelector("#NumOfPpl").value = "4";
        OnNumPeopleChange();

        //Locks end time and sets package duration
        IsTimeLocked = true;
        PackageDuration = 3;
        OnTimeChange()

        //Creates Table element
        Table = document.getElementById("carttable");

        //Sets private room select to true
        document.querySelector("#PrivateRoom").value = "true";

        //Checks if private room is already added
        if (HasPrivateRoom == false)
        {
            //If not it makes hasprivateroom true
            HasPrivateRoom = true;

            //Creates private room row in the cart
            PrivateRoomRow = CreateRow("Private Room", " ", " ", "$15", "$15");

            //Locks room select so that it cannot be changed while package is in place
            if(LockRoom == false)
            {
                LockRoom = true;
            }
        }
        //Makes sure discount amount is correct
        if (DiscountTotal != -15)
        {
            //if it isn't it corrects discount amount
            DiscountTotal = -15;

            //sets hasdiscount to true if needed
            if (HasDiscount == false)
            {
                HasDiscount = true;
            }

            //resets row if discount row already exists
            if (DiscountRow)
            {
                RemoveRow(DiscountRow);
                DiscountRow = CreateRow("Package Discount", " ", " ", "$15", "$15");
            }
            else
            {
                DiscountRow = CreateRow("Package Discount", " ", " ", "$15", "$15");
            }
        }
    }
    else if (PackageType == "TheMarathon")
    {
       //Set Activity Type
        document.querySelector("#ActivityType").value = "Boardgame";
        OnActivityTypeChange();


        //Set Number of People
        document.querySelector("#NumOfPpl").value = "4";
        OnNumPeopleChange();


        //Locks end time and sets package duration
        IsTimeLocked = true;
        PackageDuration = 6;
        OnTimeChange()

        //Creates Table element
        Table = document.getElementById("carttable");

        //Sets private room select to true
        document.querySelector("#PrivateRoom").value = "true";

         //Checks if private room is already added
        if (HasPrivateRoom == false)
        {
            //If not it makes hasprivateroom true
            HasPrivateRoom = true;

            //Creates private room row in the cart
            PrivateRoomRow = CreateRow("Private Room", " ", " ", "$15", "$15");

            //Locks room select so that it cannot be changed while package is in place
            if(LockRoom == false)
            {
                LockRoom = true;
            }
        }
        //Makes sure discount amount is correct
        if (DiscountTotal != -30)
        {
            //if it isn't it corrects discount amount
            DiscountTotal = -30;

            //sets hasdiscount to true if needed
            if (HasDiscount == false)
            {
                HasDiscount = true;
            }

            //resets row if discount row already exists
            if(DiscountRow)
            {
                RemoveRow(DiscountRow);
                DiscountRow = CreateRow("Package Discount", " ", " ", "$30", "$30");
            }
            else
            {
                DiscountRow = CreateRow("Package Discount", " ", " ", "$30", "$30");
            }
        }
    }
    else if (PackageType == "TwoCompany")
    {
        //Set Activity Type
        document.querySelector("#ActivityType").value = "Karaoke";
        OnActivityTypeChange();


        //Set Number of People
        document.querySelector("#NumOfPpl").value = "2";
        OnNumPeopleChange();


        //Locks end time and sets package duration
        IsTimeLocked = true;
        PackageDuration = 2;
        OnTimeChange()

        //Creates Table element
        Table = document.getElementById("carttable");

        //Sets private room select to true
        document.querySelector("#PrivateRoom").value = "true";

         //Checks if private room is already added
        if (HasPrivateRoom == false)
        {
            //If not it makes hasprivateroom true
            HasPrivateRoom = true;

            //Creates private room row in the cart
            PrivateRoomRow = CreateRow("Private Room", " ", " ", "$15", "$15");

            //Locks room select so that it cannot be changed while package is in place
            if(LockRoom == false)
            {
                LockRoom = true;
            }
        }
        //Makes sure discount amount is correct
        if (DiscountTotal != -5)
        {
            //if it isn't it corrects discount amount
            DiscountTotal = -5;

            //sets hasdiscount to true if needed
            if (HasDiscount == false)
            {
                HasDiscount = true;
            }
            
            //resets row if discount row already exists
            if(DiscountRow)
            {
                RemoveRow(DiscountRow);
                DiscountRow = CreateRow("Package Discount", " ", " ", "$5", "$5");
            }
            else
            {
                DiscountRow = CreateRow("Package Discount", " ", " ", "$5", "$5");
            }
        }
    }
    else if (PackageType == "PartyTime")
    {
        //Set Activity Type
        document.querySelector("#ActivityType").value = "Karaoke";
        OnActivityTypeChange();


        //Set Number of People
        document.querySelector("#NumOfPpl").value = "8";
        OnNumPeopleChange();


        //Locks end time and sets package duration
        IsTimeLocked = true;
        PackageDuration = 3;
        OnTimeChange()

        //Creates Table element
        Table = document.getElementById("carttable");

        //Sets private room select to true
        document.querySelector("#PrivateRoom").value = "true";

         //Checks if private room is already added
        if (HasPrivateRoom == false)
        {
            //If not it makes hasprivateroom true
            HasPrivateRoom = true;

            //Creates private room row in the cart
            PrivateRoomRow = CreateRow("Private Room", " ", " ", "$15", "$15");

            //Locks room select so that it cannot be changed while package is in place
            if(LockRoom == false)
            {
                LockRoom = true;
            }
        }
        //Makes sure discount amount is correct
        if (DiscountTotal != -50)
        {
            //if it isn't it corrects discount amount
            DiscountTotal = -50;

            //sets hasdiscount to true if needed
            if (HasDiscount == false)
            {
                HasDiscount = true;
            }
            
            //resets row if discount row already exists
            if(DiscountRow)
            {
                RemoveRow(DiscountRow);
                DiscountRow = CreateRow("Package Discount", " ", " ", "$50", "$50");
            }
            else
            {
                DiscountRow = CreateRow("Package Discount", " ", " ", "$50", "$50");
            }
        }



    }
    UpdateCost();

}

function CreateRow(ItemCell, PeopleCell, DurationCell, CostCell, TotalCell)
{
    Table = document.getElementById("carttable");
    let NewRow = Table.insertRow(Table.rows.length);

    let NewItemCell = NewRow.insertCell(0);
    let NewPeopleCell = NewRow.insertCell(1);
    let NewDurationCell = NewRow.insertCell(2);
    let NewCostCell = NewRow.insertCell(3);
    let NewTotalCell = NewRow.insertCell(4);

    NewItemCell.innerHTML = ItemCell;
    NewPeopleCell.innerHTML = PeopleCell;
    NewDurationCell.innerHTML = DurationCell;
    NewCostCell.innerHTML = CostCell;
    NewTotalCell.innerHTML = TotalCell;

    return NewRow;
}

function RemoveRow(RowName)
{
    let RowIndex = RowName.rowIndex;
    Table = document.getElementById("carttable");
    Table.deleteRow(RowIndex);

}

function OnPrivateRoomChange()
{    
    if (document.querySelector("#PrivateRoom").value == "true")
    {
        if (HasPrivateRoom == false)
        {
            HasPrivateRoom = true;
            PrivateRoomRow = CreateRow("Private Room", " ", " ", "$15", "$15");
        }
    }
    else
    {
        if (HasPrivateRoom == true)
        {
            if (LockRoom == false)
            {
                if (document.querySelector("#ActivityType").value == "Karaoke")
                {

                    document.querySelector("#PrivateRoom").value = "true";
                }
                else
                {
                    HasPrivateRoom = false;
                    RemoveRow(PrivateRoomRow);
                }

            }
            else
            {
                document.querySelector("#PrivateRoom").value = "true";
            }
        }
    }
}

function Checkout()
{
    const FirstName = document.getElementById('firstname').value;
    const LastName = document.getElementById('lastname').value;
    const Email = document.getElementById('email').value;
    const PhoneNum = document.getElementById('phonenum').value;
    const AdditionalInfo = document.getElementById('additionalinfo').value;
    const StartTime = document.getElementById("StartTime").value;
    const EndTime = document.getElementById("EndTime").value;
    const Date = document.getElementById("DateDay").value + "/" + document.getElementById("DateMonth").value;

    const Table = document.getElementById('carttable')

    // to set into local storage

    localStorage.setItem("FirstName", FirstName);
    localStorage.setItem("LastName", LastName);
    localStorage.setItem("Email", Email);
    localStorage.setItem("PhoneNum", PhoneNum);
    localStorage.setItem("AdditionalInfo", AdditionalInfo);
    localStorage.setItem("Table", Table);
    localStorage.setItem("StartTime", StartTime);
    localStorage.setItem("EndTime", EndTime);
    localStorage.setItem("Date", Date);


    for (let i = 0; i < Table.rows.length;i++)
    {
        for (let j=0; j < Table.rows[i].cells.length;j++)
        {
            localStorage.setItem(i + " " + j ,Table.rows[i].cells[j].textContent);
        }
    }


    localStorage.setItem("TableRows", Table.rows.length);
    localStorage.setItem("TableColumns", Table.rows[0].cells.length);


    return;
}