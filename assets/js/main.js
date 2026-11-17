(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var nw=$('ck-now');if(nw){var tk=function(){var d=new Date();nw.textContent=('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);};tk();setInterval(tk,1000);}
var st=$('sd-t');if(st){var sa=$('sd-ap');on([st,sa],function(){var p=(st.value||'00:00').split(':'),m=parseInt(p[0],10)*60+parseInt(p[1],10),q=sa.value==='quartz',lo=q?23*60:21*60,hi=q?60:3*60,danger=m>=lo||m<hi;
 $('sd-o').innerHTML=danger?'<strong>WAIT</strong><p>'+st.value+' is inside the date-change zone. Move the hands to about 6:00 first, then set the date.</p>':'<strong>SAFE</strong><p>'+st.value+' is clear of the date-change zone. You can use the quick-set date now.</p>';});}
var gh=$('gm-h');if(gh){var ga=$('gm-a');for(var o=-12;o<=14;o++){var t='UTC'+(o>=0?'+':'')+o;gh.add(new Option(t,o));ga.add(new Option(t,o));}gh.value='-5';ga.value='1';
 on([gh,ga],function(){var d=parseInt(ga.value,10)-parseInt(gh.value,10),now=new Date(),utc=now.getUTCHours()+now.getUTCMinutes()/60,h=((utc+parseInt(ga.value,10))%24+24)%24,hh=Math.floor(h),mm=Math.round((h-hh)*60);
  $('gm-o').innerHTML='<strong>'+(d===0?'NO CHANGE':(d>0?'+':'')+d+' H')+'</strong><p>'+(d===0?'Both zones match.':'Rotate the 24-hour bezel '+Math.abs(d)+' click'+(Math.abs(d)===1?'':'s')+' '+(d>0?'anticlockwise so the hand reads ahead':'clockwise so the hand reads behind')+'.')+'</p><p>Second zone now: '+('0'+hh).slice(-2)+':'+('0'+mm).slice(-2)+'</p>';});}
var pr=$('pr-r');if(pr){var po=$('pr-o');on([pr,po],function(){var r=parseFloat(pr.value)||0,o=parseFloat(po.value)||0,left=r-o;
 $('pr-out').innerHTML=left>4?'<strong>RUNNING &middot; ~'+Math.round(left)+' H LEFT</strong><p>It should still be ticking. Wear it or give it a few turns to top up.</p>':left>0?'<strong>LOW &middot; ~'+Math.round(left)+' H</strong><p>It may run slow near the end of its reserve. Wind it 20&ndash;30 turns.</p>':'<strong>STOPPED</strong><p>Wind it 30&ndash;40 turns, then set the date and time safely.</p>';});}
})();
