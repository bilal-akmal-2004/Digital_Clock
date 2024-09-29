function forSecondsAm(){
    var time = new Date()
    if(time.getSeconds()<10){
        secSp.innerText = "0"+(time.getSeconds() + " AM")
        }else{
        secSp.innerText = time.getSeconds() + " AM"
        }
}
function forSecondsPm(){
    var time = new Date()
    if(time.getSeconds()<10){
        secSp.innerText = "0"+(time.getSeconds() + " PM")
        }else{
        secSp.innerText = time.getSeconds() + " PM"
        }
}
function forMinutes(){
    var time = new Date()
    if(time.getMinutes()<10){
        minSp.innerText = "0"+time.getMinutes()
    }else{
        minSp.innerText = time.getMinutes()
    }
}

var hoursSp = document.getElementById("hours")
var minSp = document.getElementById("min")
var secSp = document.getElementById("sec")

setInterval(()=>{
    var time = new Date()
    if(time.getHours()<12){
        if(time.getHours()===0){
            hoursSp.innerText = 12;
            forMinutes()
            forSecondsAm()
            
        }else if(time.getHours()<10){
            hoursSp.innerText = "0"+time.getHours()
            forMinutes()
            forSecondsAm()
        }else{
            hoursSp.innerText = time.getHours()
            forMinutes()
            forSecondsAm()
        }
        
    }else if(time.getHours()>=12){
        if(time.getHours()===12){
            hoursSp.innerText = time.getHours() 
            forMinutes()
            forSecondsPm()
        }else if(time.getHours()>12 && time.getHours()<22){
            hoursSp.innerText = "0"+(time.getHours() -12 )
            forMinutes()
            forSecondsPm()
        }else{
            hoursSp.innerText = time.getHours() -12 
            forMinutes()
            forSecondsPm()
        }
       
    }
      
},1000)

// this is for the months days and week

var daysSp = document.getElementById("days")
var monthSp = document.getElementById("month")
var dateSp = document.getElementById("date")

// setInterval(()=>{
     
// },)
var time = new Date()

var daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
for(let i = 0 ; i<daysArray.length;i++){
    if(i===time.getDay()){
        daysSp.innerText = daysArray[i]
        
    }
}
dateSp.innerText = time.getDate()+" "
var monthArray = [" Jan"," Feb"," Mar"," Apr"," May"," June"," July"," Aug"," Sept"," Oct"," Nov"," Dec"]
for(let i=0;i<monthArray.length;i++){
    if(i===time.getMonth()){
        monthSp.innerText = monthArray[i]
        
    }
}



