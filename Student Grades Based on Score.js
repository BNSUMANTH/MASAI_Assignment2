function score(ss){
  for (let i in ss) {
    let g;
    if (ss[i] >=90) {
      g="A";
    } 
    else if(ss[i]>=80) {
      g="B";
    } 
    else if (ss[i]>= 70) {
      g="C";
    } 
    else if (ss[i]>= 60) {
      g="D";
    } 
    else {
      g="F";
    }
  
    console.log(`${i} - ${g}`);
  }
}
let studentScores = {John: 85,Emma: 92,Sam: 67,Bob: 45};
score(studentScores);