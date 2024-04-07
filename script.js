// script.js

function loadAndModifyXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            modifyXML(this.responseXML);
        }
    };
    xhttp.open("GET", "booking.xml", true);
    xhttp.send();
}

function modifyXML(xmlDoc) {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var dob = document.getElementById("dob").value;
    var pob = document.getElementById("pob").value;
    var gender = document.getElementById("gender").value;
    var fatherName = document.getElementById("fatherName").value;
    var motherName = document.getElementById("motherName").value;

    // Modify the XML content
    console.log(name.length);
    if (name.length >= 1) {
        var nameElement = xmlDoc.getElementsByTagName("name")[0];
        nameElement.textContent = name; // Change the title text
    }else{
        var nameElement = xmlDoc.getElementsByTagName("name")[0];
    }
    if (surname.length >= 1) {
        var surnameElement = xmlDoc.getElementsByTagName("surname")[0];
        surnameElement.textContent = surname; // Change the title text
    }else{
        var surnameElement = xmlDoc.getElementsByTagName("surname")[0];
    }
    if (dob.length >= 1) {
        var dobElement = xmlDoc.getElementsByTagName("dob")[0];
        dobElement.textContent = dob; // Change the title text
    }else{
        var dobElement = xmlDoc.getElementsByTagName("dob")[0];
    }
    if (pob.length >= 1) {
        var pobElement = xmlDoc.getElementsByTagName("pob")[0];
        pobElement.textContent = pob; // Change the title text
    }else{
        var pobElement = xmlDoc.getElementsByTagName("pob")[0];
    }
    if (gender.length >= 1) {
        var genderElement = xmlDoc.getElementsByTagName("gender")[0];
        genderElement.textContent = gender; // Change the title text
    }else{
        var genderElement = xmlDoc.getElementsByTagName("gender")[0];
    }
    if (fatherName.length >= 1) {
        var fatherNameElement = xmlDoc.getElementsByTagName("fatherName")[0];
        fatherNameElement.textContent = fatherName; // Change the title text
    }else{
        var fatherNameElement = xmlDoc.getElementsByTagName("fatherName")[0];
    }
    if (motherName.length >= 1) {
        var motherNameElement = xmlDoc.getElementsByTagName("motherName")[0];
        motherNameElement.textContent = motherName; // Change the title text
    }else{
        var motherNameElement = xmlDoc.getElementsByTagName("motherName")[0];
    }

    // Save the modified XML back to a string
    var serializer = new XMLSerializer();
    var modifiedXMLString = serializer.serializeToString(xmlDoc);

    // Display the modified XML
    //document.getElementById("output").textContent = modifiedXMLString;

    document.getElementById("tda").innerHTML = nameElement.textContent;
    document.getElementById("tdb").innerHTML = surnameElement.textContent;
    document.getElementById("tdc").innerHTML = dobElement.textContent;
    document.getElementById("tdd").innerHTML = pobElement.textContent;
    document.getElementById("tde").innerHTML = genderElement.textContent;
    document.getElementById("tdf").innerHTML = fatherNameElement.textContent;
    document.getElementById("tdg").innerHTML = motherNameElement.textContent;
    console.log(fatherNameElement);
}