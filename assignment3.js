var count = 1;
  var flagName = false;
  var flagDest = false;
  var flagStartDate = false;
  var flagEndDate = false;
  var flagPrice = false;


  function checkName(htmlObj) {
    var strtourName = htmlObj.value;
    if (strtourName == "") {
      flagName = false;
      document.getElementById("divTourName").innerHTML = "Please Enter Tour Name.";
    } else {
      flagName = false;
      var valid = /^[a-zA-Z ]+$/;
      if (!strtourName.match(valid)) {
        document.getElementById("divTourName").innerHTML = "Invalid tour name. Only alphabets and space allowed.";
        document.getElementById("txtTourName").className = "error-text";
        flagName = false;
      } else {
        flagName = true;
        document.getElementById("divTourName").innerHTML = "<img src=images/tick.jpg>";
        document.getElementById("txtTourName").className = "";
      }
    }
  }

  function checkDest(htmlObj) {
    var strDest = htmlObj.value;
    if (strDest == "") {
      flagDest = false;
      document.getElementById("divDestName").innerHTML = "Please Enter Destination.";
    } else {
      flagDest = false;
      var valid = /^[a-zA-Z, ]+$/;
      if (!strDest.match(valid)) {
        document.getElementById("divDestName").innerHTML = "Invalid Destination. Only alphabets, comma(',') and space allowed.";
        document.getElementById("txtDestination").className = "error-text";
        flagDest = false;
      } else {
        flagDest = true;
        document.getElementById("divDestName").innerHTML = "<img src=images/tick.jpg>";
        document.getElementById("txtDestination").className = "";
      }
    }
  }

  function checkStartDate() {
    var strStDate = document.getElementById("startDate").value;
    var stdate = new Date(strStDate).setHours(0, 0, 0, 0);
    var today = new Date().setHours(0, 0, 0, 0);
    console.log(strStDate);
    if (strStDate == "") {
      flagStartDate = false;
      document.getElementById("divStartDate").innerHTML = "Please enter start date";
    } else {
      flagStartDate = false;
      if (stdate < today) {
        document.getElementById("divStartDate").innerHTML = "Invalid Date.Please enter valid date. Minimum date is today.";
        document.getElementById("startDate").className = "error-text";
        flagStartDate = false;
      } else {
        flagStartDate = true;
        document.getElementById("divStartDate").innerHTML = "<img src=images/tick.jpg>";
        document.getElementById("startDate").className = "";
      }
    }
  }
  function activateEndDate() {
    if (flagStartDate == true)
      document.getElementById("endDate").disabled = false;
  }
  function checkEndDate() {
    var strStDate = document.getElementById("startDate").value;
    var stdate = new Date(strStDate);
    var strEndDate = document.getElementById("endDate").value;
    var endDate = new Date(strEndDate);
    var minDate = new Date(stdate.getFullYear(), stdate.getMonth(), stdate.getDate() + 1);
    var maxDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + 90);
    if (strEndDate == "") {
      flagEndDate = false;
      document.getElementById("divEndDate").innerHTML = "Please enter end date";
    } else {
      flagEndDate = false;
      if (!(minDate <= endDate && endDate <= maxDate)) {
        document.getElementById("divEndDate").innerHTML = "Invalid Date.Please enter valid date. Minimum date is one day after start date and maximum 3 months after start date.";
        document.getElementById("endDate").className = "error-text";
        flagEndDate = false;
      } else {
        flagEndDate = true;
        document.getElementById("divEndDate").innerHTML = "<img src=images/tick.jpg>";
        document.getElementById("endDate").className = "";
      }
    }
  }
  function checkPrice() {
    var numPrice = Number(document.getElementById("txtPrice").value);
    if (numPrice == "") {
      flagPrice = false;
      document.getElementById("divPrice").innerHTML = "Please enter price";
    } else {
      flagPrice = false;
      if (numPrice < 500 || numPrice > 100000) {
        document.getElementById("divPrice").innerHTML = "Invalid Price";
        document.getElementById("txtPrice").className = "error-text";
        flagPrice = false;
      } else {
        flagPrice = true;
        document.getElementById("divPrice").innerHTML = "<img src=images/tick.jpg>";
        document.getElementById("txtPrice").className = "";
      }
    }
  }
  function getId() {
    var tid = "TR" + count;
    var numzeroes = 6 - tid.length;
    tid = "TR";
    for (var i = 0; i < numzeroes; i++) {
      tid += "0";
    }
    tid += count;
    document.getElementById("txtTourID").value = tid;
    document.getElementById("divTourName").innerHTML = "";
    document.getElementById("txtTourName").className = "";
    document.getElementById("divDestName").innerHTML = "";
    document.getElementById("txtDestination").className = "";
    document.getElementById("divStartDate").innerHTML = "";
    document.getElementById("startDate").className = "";
    document.getElementById("divEndDate").innerHTML = "";
    document.getElementById("endDate").className = "";
    document.getElementById("divPrice").innerHTML = "";
  }

  var userRow = "";
  function cheeckAllInput() {
    if (document.getElementById("txtTourID").value != "") {
      if (document.getElementById("txtTourName").value != "" && flagName != false) {
        if (document.getElementById("txtDestination").value != "" && flagDest != false) {
          if (document.getElementById("startDate").value != "" && flagStartDate != false) {
            if (document.getElementById("endDate").value != "" && flagEndDate != false) {
              if (document.getElementById("txtPrice").value != "" && flagPrice != false) {
                var headerContent = "";
                headerContent = "<table border=0><tr>";
                headerContent += "<td align=center valign=center class=headerCell> Sl.No.</td>";
                headerContent += "<td align=center valign=center class=headerCell> Tour ID</td>";
                headerContent += "<td align=center valign=center class=headerCell> Tour Name</td>";
                headerContent += "<td align=center valign=center class=headerCell> Destination</td>";
                headerContent += "<td align=center valign=center class=headerCell> Start Date</td>";
                headerContent += "<td align=center valign=center class=headerCell> End Date</td>";
                headerContent += "<td align=center valign=center class=headerCell> Price per Head</td>";
                headerContent += "</tr>";
                var tid = document.getElementById("txtTourID").value;
                var tourName = document.getElementById("txtTourName").value;
                var destination = document.getElementById("txtDestination").value;
                var startDate = document.getElementById("startDate").value;
                var endDate = document.getElementById("endDate").value;
                var price = document.getElementById("txtPrice").value;

                userRow += "<tr>";
                userRow += "<td align=center valign=center class=commonCell>" + count + "</td>";
                userRow += "<td align=center valign=center class=commonCell>" + tid + "</td>";
                userRow += "<td align=center valign=center class=commonCell>" + tourName + "</td>";
                userRow += "<td align=center valign=center class=commonCell>" + destination + "</td>";
                userRow += "<td align=center valign=center class=commonCell>" + startDate + "</td>";
                userRow += "<td align=center valign=center class=commonCell>" + endDate + "</td>";
                userRow += "<td align=center valign=center class=commonCell>" + price + "</td>";
                userRow += "</tr>";
                var content = headerContent + userRow + "</table>";
                document.getElementById("divShowCourses").innerHTML = content;
                alert("Course succesfully added!");
                document.getElementById("frmCourseReg").reset();
                count++;
                getId();
              } else {
                alert("Please enter price 500 to  1,00,000.");
              }
            }
            else {
              alert("Please select the end date.");
            }
          } else {
            alert("Please select the start date.");
          }
        } else {
          alert("Please enter valid destination.");
        }
      } else {
        alert("Please enter valid tour name.");
      }
    } else {
      alert("Please reload the page. Error on loading.");
    }
  }