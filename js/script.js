$(document).ready(function(){
    $(".alert").hide();
    $(".card-deck").css({'margin' : '12.5%'});
});
$(document).load(function(){
    $(".alert").hide();
    $(".card-deck").css({'margin' : '12.5%'});
});
function f_clear(){
    var arrInput =  document.querySelectorAll('.form-control');
    for (const key in arrInput) {
        arrInput[key].value = '';
    }
    $(".alert").hide();
}
function f_reSult(){
    
    $(".alert").hide();
    var totalA = document.querySelector('#inputA').value;
    var totalB = document.querySelector('#inputB').value;
    var totalC = document.querySelector('#inputC').value;
    var totalD = document.querySelector('#inputD').value;
    var totalF = document.querySelector('#inputF').value;
    var totalTcc = Number(totalA) + Number(totalB)  + Number(totalC) + Number(totalD)  +Number(totalF);
    var pointA = 4/totalTcc*totalA;
    var pointB = 3/totalTcc*totalB;
    var pointC = 2/totalTcc*totalC;
    var pointD = 1/totalTcc*totalD;
    var pointF = 0/totalTcc*totalF;
    var totalpoint = pointA + pointB + pointC + pointD + pointF;
    if (Number.isNaN(totalpoint)) {
        totalpoint = 0;
        $(".alert-dark").show();
        $(".alert-dark").html("<span class='fe fe-meh fe-16 mr-2'>" +' Điểm ' + totalpoint.toFixed(2) +"</span>");

    }else{
        switch (true) {
            case totalpoint > 3 :
                $(".alert-success").show();
                $(".alert-success").text('Điểm ' + totalpoint.toFixed(2));
                break;
            case totalpoint > 2:
                $(".alert-info").show();
                $(".alert-info").text('Điểm ' + totalpoint.toFixed(2));
                break;
            case totalpoint > 1:
                $(".alert-warning").show();
                $(".alert-warning").text('Điểm ' + totalpoint.toFixed(2));
                break;
            case totalpoint > 0:
                $(".alert-danger").show();
                $(".alert-danger").text('Điểm ' + totalpoint.toFixed(2));
                break;
            default:
                $(".alert-dark").show();
                // $(".alert-dark").text('Điểm ' + totalpoint.toFixed(2));
                $(".alert-dark").html("<span class='fe fe-meh fe-16 mr-2'>" +' Điểm ' + totalpoint.toFixed(2) +"</span>");
                break;
        }
        // alert(totalpoint.toFixed(2));
    }

    
}



