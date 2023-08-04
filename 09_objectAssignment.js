let professor={
    professorName:"abc",
    professorAddress:"Wakad pune",
    professorTel:123456789,
    professorEdu:"Mtech",
    professorSal:200000,

    teacherdegrees:{
        engineering:"CSE",
        PHD:"Adv Computing",
        gettearcherdegrees : function(){
            console.log('Teacher degrees: ${this.engineering}, ${this..PHD}');
        }
    },
    certificate: ["hacker rank participation","IFE course","adv programming"]
    
}
 professor.totalExp="14 years";
 console.log(professor);

 professor.teacherdegrees.gettearcherdegrees();
 
 professor.certificate.push("oracle cerficate");
 console.log(professor.certificate);

