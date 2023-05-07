var job = document.getElementById('job');
var jobs = ['ASP .NET Core', 'Angular','Django'];
let jobIndex = 0;
var fill=false;
let charIndex = jobs[0].length;
// setInterval(ChangeJob,10000);
let word = job.innerHTML;
setInterval(function () {
    if (charIndex >= 0 && !fill) {
        word = word.substring(0, charIndex);
        job.innerHTML = word!=""? word:" ";
        if(charIndex==0){
            fill = true;
            jobIndex = (jobIndex + 1) % jobs.length;
            word = jobs[jobIndex];
        }
        else{
        charIndex--;

        }
    }
    else {
        if(charIndex!=jobs[jobIndex].length){
            charIndex++;
            word=jobs[jobIndex].substring(0,charIndex);
            job.innerHTML=word ;
        }
        else{
            fill=false;
        }
    }
}, 200);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
