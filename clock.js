
setInterval(() => {
    d=new Date();
 htime= d.getHours();
 mtime=d.getMinutes();
 stime=d.getSeconds();
 srotation=6*stime;
 mrotation=6*mtime;
 hrotation=30*htime + mtime/2;

hours.style.transform = `rotate(${hrotation}deg)`;
minutes.style.transform = `rotate(${mrotation}deg)`;
seconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);