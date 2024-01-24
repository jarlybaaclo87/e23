// document.getElementById("gmOutput").innerHTML=0.0;
// document.getElementById("klOutput").innerHTML=0.0;
// document.getElementById("ouOutput").innerHTML=0.0;

function renderDiv(){
    for(i=1; i<4; i++){
    cardClass="card mb-2";
    switch(i){
        case 1:
            cardClass+=" bg-primary";
            unitLabel="Grams";
            unitAbrev="gm";
            break;
        case 2:
            cardClass+=" bg-success";
            unitLabel="Kilograms";
            unitAbrev="kl";
            break;
        case 3:
            cardClass+=" bg-danger";
            unitLabel="Ounces";
            unitAbrev="oz";
            break;
            default:
                cardClass=" ";
    }
    // cardClass+=" bg-primary";
    // unitLabel="Grams";
    // unitAbrev="gm";
    document.write(`
    <div class="${cardClass}">
        <div class="card-body">
            <h4>${unitLabel}</h4>
            <div id="${unitAbrev}">Output</div>
        </div>
    </div>`);
    }
// $("#result").hide();
// document.getElementById("result").style.visibility="hidden";
document.getElementById("lbsInput").addEventListener(
    "input", 
    function(e){
        let lbs = e.target.value;
        document.getElementById("result").style.visibility="visible";
        document.getElementById("gm").innerHTML=lbs/0.00220462;
        document.getElementById("kl").innerHTML=lbs/2.20462;
        document.getElementById("oz").innerHTML=lbs*16;
        }
    )
}


