function calcTip() {
    if(document.getElementById("billAmount").value=="" || document.getElementById("numPeople").value=="") {
        alert("Give the input values to calculate tip");
    }
    else {
        var ele=document.getElementsByName("serviceQuality");
        for(i=0; i<ele.length; i++) {
        if(ele[i].checked) {
            var Service=ele[i].value;
        }
        }
        var total=(document.getElementById("billAmount").value*Service)/document.getElementById("numPeople").value;
        total=Math.round(total*100)/100;
        total=total.toFixed(2);
        document.getElementById("display_tip").innerHTML="Total tip is "+total;
        document.getElementById("display_tip").style.opacity=1;

    }
}
