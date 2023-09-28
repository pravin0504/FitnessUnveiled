function CopmuteBMI(){
    console.log('hello bmi')
    // let height = document.getElementById('height').getAttribute('value');
    let weight = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('height').value);
    let bmi = weight/(height*height)
    document.getElementById('bmiscore').setAttribute('value',bmi);
    
   
    if(bmi < 18.5){
        console.log('under')
         document.getElementById('iframeBMI').src = "blogs/underweight.html";
    }else if( bmi >= 18.5 && bmi <= 24.9){ 
        console.log('norml') 
        document.getElementById('iframeBMI').src = "blogs/normalweight.html";

    }else if( bmi >= 25 && bmi <= 29.9 ){
        console.log('over')
        document.getElementById('iframeBMI').src = "blogs/overweight.html";  
    }else if( bmi >= 30 && bmi <= 34.9){
        console.log('c1')
        document.getElementById('iframeBMI').src = "blogs/obesityclass1.html"
    }else if(  bmi >= 35 && bmi <= 39.9){
        console.log('c2')
        document.getElementById('iframeBMI').src = "blogs/obesityclass2.html"
    }else if( bmi > 40   ){
        console.log('c3')
        document.getElementById('iframeBMI').src = "blogs/obesityclass3.html"
    }

    // document.getElementById('iframeBMI').contentDocument.location.reload(true);
}