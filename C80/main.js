studentarray=[]
displayArray=[]
displayArray1=[]
function submit(){
    for(i=1;i<=4;i++){
        studentname=document.getElementById("name_of_the_student_"+i).value
        studentarray.push(studentname)
    }
    for(j=0;j<studentarray.length;j++){
        displayArray.push("<h4>Name-"+studentarray[j]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=displayArray
document.getElementById("display_name_without_commas").innerHTML=displayArray.join(" ")
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sorting (){
    studentarray.sort()
    for(j=0;j<studentarray.length;j++){
        displayArray1.push("<h4>Name-"+studentarray[j]+"</h4>")
    }
    
    document.getElementById("display_name_with_commas").innerHTML=displayArray1
}