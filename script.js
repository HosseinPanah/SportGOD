'use strict';

const DAYS = [
  {
    day: 1, title: 'بالاتنه ۱', heading: 'بالاتنه ۱', focus: 'سینه سنگین + پشت‌بازو',
    exercises: [
      {id:'incline-barbell-bench', fa:'پرس سینه هالتر بالاسینه', en:'Incline Barbell Bench Press', sets:4, reps:'۸', rest:90, kind:'سینه', visual:'inclineBarbell'},
      {id:'flat-dumbbell-press', fa:'پرس سینه دمبل تخت', en:'Flat Dumbbell Press', sets:3, reps:'۱۰–۱۲', rest:90, kind:'سینه', visual:'flatDumbbell'},
      {id:'incline-dumbbell-fly', fa:'فلای دمبل بالاسینه', en:'Incline Dumbbell Fly', sets:3, reps:'۱۲', rest:60, kind:'سینه', visual:'inclineFly'},
      {id:'pec-deck', fa:'دستگاه پروانه سینه', en:'Pec Deck', sets:3, reps:'۱۲–۱۵', rest:60, kind:'سینه', visual:'pecDeck'},
      {id:'triceps-pushdown', fa:'پشت‌بازو سیم‌کش', en:'Triceps Pushdown', sets:4, reps:'۱۲', rest:60, kind:'پشت‌بازو', visual:'pushdown'},
      {id:'overhead-cable-triceps', fa:'پشت‌بازو سیم‌کش بالای سر', en:'Overhead Cable Triceps Extension', sets:4, reps:'۱۰–۱۲', rest:60, kind:'پشت‌بازو', visual:'overheadTriceps'},
      {id:'single-arm-cable-extension', fa:'پشت‌بازو سیم‌کش تک‌دست', en:'Single-Arm Cable Extension', sets:3, reps:'۱۲', rest:60, kind:'پشت‌بازو', visual:'singleArmTriceps'}
    ]
  },
  {
    day: 2, title: 'پایین‌تنه ۱', heading: 'پایین‌تنه ۱', focus: 'چهارسر ران + ساق پا',
    exercises: [
      {id:'leg-press', fa:'پرس پا', en:'Leg Press', sets:4, reps:'۱۰–۱۲', rest:90, kind:'چهارسر ران', visual:'legPress'},
      {id:'hack-squat', fa:'اسکوات هک', en:'Hack Squat', sets:3, reps:'۱۰–۱۲', rest:90, kind:'چهارسر ران', visual:'hackSquat'},
      {id:'leg-extension', fa:'جلو پا دستگاه', en:'Leg Extension', sets:4, reps:'۱۲', rest:60, kind:'چهارسر ران', visual:'legExtension'},
      {id:'seated-leg-curl', fa:'پشت پا نشسته', en:'Seated Leg Curl', sets:3, reps:'۱۲–۱۵', rest:60, kind:'همسترینگ', visual:'legCurl'},
      {id:'hip-adduction', fa:'داخل ران دستگاه', en:'Hip Adduction Machine', sets:3, reps:'۱۵', rest:60, kind:'داخل ران', visual:'hipAdduction'},
      {id:'hip-abduction', fa:'خارج ران دستگاه', en:'Hip Abduction Machine', sets:3, reps:'۱۵', rest:60, kind:'خارج ران', visual:'hipAbduction'},
      {id:'standing-calf-raise', fa:'ساق پا ایستاده', en:'Standing Calf Raise', sets:4, reps:'۱۵', rest:60, kind:'ساق پا', visual:'standingCalf'},
      {id:'seated-calf-raise', fa:'ساق پا نشسته', en:'Seated Calf Raise', sets:4, reps:'۱۵', rest:60, kind:'ساق پا', visual:'seatedCalf'}
    ]
  },
  {
    day: 3, title: 'بالاتنه ۲', heading: 'بالاتنه ۲', focus: 'پشت + جلو بازو + پشت سرشانه',
    exercises: [
      {id:'lat-pulldown', fa:'لت سیم‌کش از بالا', en:'Lat Pulldown', sets:4, reps:'۱۰–۱۲', rest:90, kind:'زیربغل', visual:'latPulldown'},
      {id:'close-grip-seated-row', fa:'قایقی سیم‌کش دست جمع', en:'Close-Grip Seated Cable Row', sets:4, reps:'۱۰–۱۲', rest:90, kind:'زیربغل', visual:'seatedRow'},
      {id:'face-pull', fa:'فیس پول سیم‌کش', en:'Face Pull', sets:3, reps:'۱۲', rest:60, kind:'پشت سرشانه', visual:'facePull'},
      {id:'standing-dumbbell-curl', fa:'جلو بازو دمبل ایستاده', en:'Standing Dumbbell Curl', sets:4, reps:'۸–۱۰', rest:60, kind:'جلو بازو', visual:'standingCurl'},
      {id:'preacher-curl', fa:'جلو بازو لاری', en:'Preacher Curl', sets:3, reps:'۱۲–۱۳', rest:60, kind:'جلو بازو', visual:'preacherCurl'},
      {id:'hammer-curl', fa:'جلو بازو چکشی', en:'Hammer Curl', sets:3, reps:'۱۲', rest:60, kind:'جلو بازو', visual:'hammerCurl'},
      {id:'concentration-curl', fa:'جلو بازو تمرکزی', en:'Concentration Curl', sets:3, reps:'۱۲', rest:45, kind:'جلو بازو', visual:'concentrationCurl'}
    ]
  },
  {
    day: 4, title: 'شکم و هوازی', heading: 'شکم و هوازی', focus: 'عضلات شکم + پهلو + آمادگی قلبی‌عروقی',
    exercises: [
      {id:'plank', fa:'پلانک', en:'Plank', sets:3, reps:'۶۰ ثانیه', rest:null, kind:'شکم', visual:'plank'},
      {id:'crunch', fa:'کرانچ', en:'Crunch', sets:3, reps:'۱۲', rest:null, kind:'شکم', visual:'crunch'},
      {id:'captains-chair-raise', fa:'بالا آوردن پای صاف روی صندلی کاپیتان', en:"Captain's Chair Straight Leg Raise", sets:4, reps:'۱۲', rest:null, kind:'شکم', visual:'captainRaise'},
      {id:'russian-twist', fa:'چرخش روسی', en:'Russian Twist', sets:3, reps:'۱۲', rest:null, kind:'پهلو', visual:'russianTwist'},
      {id:'side-plank', fa:'پلانک پهلو', en:'Side Plank', sets:3, reps:'۴۵ ثانیه هر سمت', rest:null, kind:'پهلو', visual:'sidePlank'},
      {id:'treadmill', fa:'تردمیل', en:'Treadmill', sets:1, reps:'۵ دقیقه', rest:null, kind:'هوازی', detail:'سرعت: ۷', visual:'treadmill'},
      {id:'stationary-bike', fa:'دوچرخه ثابت', en:'Stationary Bike', sets:1, reps:'۵–۷ دقیقه', rest:null, kind:'هوازی', detail:'شدت: متوسط', visual:'stationaryBike'}
    ]
  },
  {
    day: 5, title: 'بالاتنه ۳', heading: 'بالاتنه ۳', focus: 'سینه + سرشانه + بازو + ساعد + کول',
    exercises: [
      {id:'incline-dumbbell-press', fa:'پرس بالاسینه دمبل', en:'Incline Dumbbell Press', sets:4, reps:'۸', rest:90, kind:'سینه', visual:'inclineDumbbellPress'},
      {id:'low-high-cable-fly', fa:'کراس سیم‌کش از پایین به بالا', en:'Low-to-High Cable Fly', sets:4, reps:'۱۲', rest:60, kind:'سینه', visual:'lowHighFly'},
      {id:'high-low-cable-fly', fa:'کراس سیم‌کش از بالا به پایین', en:'High-to-Low Cable Fly', sets:4, reps:'۱۲', rest:60, kind:'سینه', visual:'highLowFly'},
      {id:'close-grip-bench-press', fa:'پرس سینه دست جمع', en:'Close-Grip Bench Press', sets:3, reps:'۸–۱۲', rest:90, kind:'سینه + پشت‌بازو', visual:'closeGripBench'},
      {id:'dumbbell-shoulder-press', fa:'پرس سرشانه دمبل', en:'Dumbbell Shoulder Press', sets:4, reps:'۱۲', rest:90, kind:'سرشانه', visual:'shoulderPress'},
      {id:'lateral-raise', fa:'نشر جانب دمبل', en:'Lateral Raise', sets:4, reps:'۱۲', rest:60, kind:'سرشانه', visual:'lateralRaise'},
      {id:'incline-dumbbell-curl', fa:'جلو بازو دمبل روی میز شیب‌دار', en:'Incline Dumbbell Curl', sets:3, reps:'۱۰', rest:45, kind:'جلو بازو', visual:'inclineCurl'},
      {id:'plate-shrug', fa:'شراگ با صفحه', en:'Plate Shrug', sets:4, reps:'۱۲', rest:null, kind:'کول', visual:'plateShrug'},
      {id:'reverse-wrist-curl', fa:'مچ معکوس', en:'Reverse Wrist Curl', sets:3, reps:'۱۵', rest:45, kind:'ساعد', visual:'reverseWrist'},
      {id:'dumbbell-wrist-curl', fa:'مچ دمبل', en:'Dumbbell Wrist Curl', sets:3, reps:'۱۵', rest:45, kind:'ساعد', visual:'dumbbellWrist'},
      {id:'cable-wrist-curl', fa:'مچ سیم‌کش', en:'Cable Wrist Curl', sets:4, reps:'۱۲', rest:45, kind:'ساعد', visual:'cableWrist'}
    ]
  }
];

const ALL_EXERCISES = DAYS.flatMap(day => day.exercises.map((exercise, index) => ({...exercise, day:day.day, index:index+1})));
const TOTAL_EXERCISES = ALL_EXERCISES.length;
const TOTAL_SETS = ALL_EXERCISES.reduce((sum, exercise) => sum + exercise.sets, 0);
const STORAGE_KEY = 'form-workout-program-b-v1';
const CIRCUMFERENCE = 2 * Math.PI * 96;
const HERO_CIRCUMFERENCE = 2 * Math.PI * 60;
let state = {completed:[], autoTimer:false};
let activeFilter = 'all';
let activeDayFilter = 'all';
let timer = {duration:90, remaining:90, running:false, endAt:0, interval:null};
let toastTimeout = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const toFa = value => String(value).replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function loadState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const validIds = new Set(ALL_EXERCISES.map(item => item.id));
    state.completed = Array.isArray(saved.completed) ? saved.completed.filter(id => validIds.has(id)) : [];
    state.autoTimer = Boolean(saved.autoTimer);
  }catch(error){ state = {completed:[], autoTimer:false}; }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(error){ showToast('ذخیره‌سازی مرورگر در دسترس نیست.'); }
}
function isCompleted(id){ return state.completed.includes(id); }
function completedCount(){ return state.completed.length; }
function completedSets(){ return ALL_EXERCISES.reduce((sum, exercise) => sum + (isCompleted(exercise.id) ? exercise.sets : 0), 0); }
function dayStats(day){
  const exercises = day.exercises;
  const done = exercises.filter(exercise => isCompleted(exercise.id)).length;
  const sets = exercises.reduce((sum, exercise) => sum + (isCompleted(exercise.id) ? exercise.sets : 0), 0);
  return {done,total:exercises.length,sets,totalSets:exercises.reduce((sum, exercise)=>sum+exercise.sets,0),percent:Math.round(done/exercises.length*100)};
}

/* SVG drawing helpers: each exercise uses a purpose-built pose and equipment scene. */
const L = (x1,y1,x2,y2,cls='ink',w='') => `<path class="${cls}" ${w?`style="stroke-width:${w}"`:''} d="M${x1} ${y1} L${x2} ${y2}"/>`;
const P = (d,cls='ink',extra='') => `<path class="${cls}" d="${d}" ${extra}/>`;
const C = (cx,cy,r,cls='skin',extra='') => `<circle cx="${cx}" cy="${cy}" r="${r}" class="${cls}" ${extra}/>`;
const R = (x,y,w,h,rx=3,cls='equipment-fill',extra='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" class="${cls}" ${extra}/>`;
const E = (cx,cy,rx,ry,cls='body-fill',extra='') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="${cls}" ${extra}/>`;
const arrow = (x1,y1,x2,y2) => `<g class="guide"><path d="M${x1} ${y1} Q${(x1+x2)/2} ${Math.min(y1,y2)-13} ${x2} ${y2}"/><path class="arrow" d="M${x2-5} ${y2-2} l7 2 -5 5z"/></g>`;
const dumbbell = (x,y,scale=1) => `<g transform="translate(${x} ${y}) scale(${scale})"><path class="ink-thin" d="M-8 0H8"/><rect class="weight" x="-12" y="-5" width="5" height="10" rx="1"/><rect class="weight" x="7" y="-5" width="5" height="10" rx="1"/></g>`;
const plate = (x,y,r=8) => `<g><circle class="weight" cx="${x}" cy="${y}" r="${r}"/><circle cx="${x}" cy="${y}" r="2.5" fill="#202722"/></g>`;
const cable = (x1,y1,x2,y2) => `<path class="ink-thin" d="M${x1} ${y1} L${x2} ${y2}"/>`;
const FLOOR = `<path class="ink-thin" opacity=".55" d="M16 132H244"/><path class="ink-thin" opacity=".25" d="M34 137h18m156 0h18"/>`;
function figure(p, highlight=''){
  const [hx,hy]=p.head, [sx,sy]=p.shoulder, [px,py]=p.hip;
  const [el1,el2]=p.elbows, [wr1,wr2]=p.wrists, [kn1,kn2]=p.knees, [an1,an2]=p.ankles;
  let out='';
  out += L(sx,sy,el1[0],el1[1],'ink','7') + L(el1[0],el1[1],wr1[0],wr1[1],'ink','6');
  out += L(sx+2,sy,el2[0],el2[1],'ink','6') + L(el2[0],el2[1],wr2[0],wr2[1],'ink','6');
  out += L(px,py,kn1[0],kn1[1],'ink','8') + L(kn1[0],kn1[1],an1[0],an1[1],'ink','7');
  out += L(px+2,py,kn2[0],kn2[1],'ink','7') + L(kn2[0],kn2[1],an2[0],an2[1],'ink','6');
  out += `<path class="body-fill ${highlight==='core'?'breath':''}" d="M${sx-8} ${sy-3} Q${sx} ${sy-10} ${sx+9} ${sy-2} L${px+9} ${py-3} Q${px} ${py+7} ${px-9} ${py-2}Z"/>`;
  out += P(`M${sx-5} ${sy+4} Q${sx} ${sy+16} ${px-4} ${py-4}`, 'ink-thin');
  out += C(hx,hy,9,'skin','stroke="#f0f1e9" stroke-width="1.5"');
  out += C(sx,sy,4,'skin') + C(px,py,4,'skin') + C(el1[0],el1[1],3.2,'skin') + C(el2[0],el2[1],3.2,'skin') + C(kn1[0],kn1[1],3.5,'skin') + C(kn2[0],kn2[1],3.5,'skin');
  if(highlight==='chest') out += `<path class="muscle" d="M${sx-7} ${sy+4}q8 -7 14 0l-2 9q-6 4-11-1z"/>`;
  if(highlight==='arms') out += E((el1[0]+wr1[0])/2,(el1[1]+wr1[1])/2,5,4,'muscle');
  if(highlight==='back') out += `<path class="muscle" d="M${sx-5} ${sy+2}q-10 8-4 17l8-4 8 4q5-10-4-17z"/>`;
  if(highlight==='legs') out += E((px+kn1[0])/2,(py+kn1[1])/2,6,10,'muscle');
  if(highlight==='shoulders') out += E(sx,sy+3,10,6,'muscle');
  if(highlight==='core') out += `<path class="muscle" d="M${sx-5} ${sy+10}q5-3 10 0l-2 15h-6z"/>`;
  return `<g class="human">${out}</g>`;
}
const fig = (head,shoulder,hip,elbows,wrists,knees,ankles,face='') => figure({head,shoulder,hip,elbows,wrists,knees,ankles},face);
function svgWrap(ex, content){
  return `<svg viewBox="0 0 260 150" role="img" aria-label="تصویر تمرین ${escapeHTML(ex.fa)}" xmlns="http://www.w3.org/2000/svg"><title>${escapeHTML(ex.fa)}</title><desc>نمایش اختصاصی وضعیت بدن و تجهیزات حرکت ${escapeHTML(ex.fa)}</desc><g>${content}</g></svg>`;
}

function drawScene(key, ex){
  let s=FLOOR;
  switch(key){
    case 'inclineBarbell':
      s += `<path class="equipment" d="M46 115 75 92 165 62 196 93M80 112l7-18M169 87l9 18"/><path class="equipment" d="M67 90 180 90"/>`;
      s += `<g class="motion"><path class="ink" d="M71 30H181"/><path class="ink" d="M75 24v12m102-12v12"/><rect class="weight" x="62" y="20" width="9" height="20" rx="2"/><rect class="weight" x="181" y="20" width="9" height="20" rx="2"/><path class="guide" d="M126 16v28"/></g>`;
      s += fig([55,74],[77,83],[145,101],[[95,57],[117,55]],[[104,31],[133,31]],[[177,102],[187,112]],[[205,125],[217,126]],'chest');
      s += arrow(205,54,205,28); break;
    case 'flatDumbbell':
      s += `<path class="equipment" d="M38 105H188M51 105v17m123-17v17"/><path class="equipment-fill" d="M57 92h112v12H57z"/>`;
      s += fig([55,81],[83,87],[151,91],[[87,63],[119,63]],[[94,42],[143,42]],[[177,103],[187,112]],[[211,122],[222,122]],'chest');
      s += `<g class="motion">${dumbbell(94,42,1.2)}${dumbbell(143,42,1.2)}</g>${arrow(160,34,160,20)}`; break;
    case 'inclineFly':
      s += `<path class="equipment" d="M45 115 78 91 165 67 193 93M83 112l5-18M167 87l10 18"/><path class="equipment-fill" d="M78 83 166 59l5 9-89 24z"/>`;
      s += fig([57,72],[81,82],[147,99],[[66,57],[140,55]],[[48,44],[164,42]],[[178,101],[188,111]],[[207,124],[219,125]],'chest');
      s += `<g class="motion">${dumbbell(48,44)}${dumbbell(164,42)}</g>${arrow(42,28,83,43)}${arrow(185,27,148,43)}`; break;
    case 'pecDeck':
      s += `<path class="equipment" d="M130 27v95M93 118h74M93 118V74m74 44V74M91 75l-18-12m94 12 18-12"/><path class="equipment" d="M119 53h22M130 53v34"/><path class="equipment-fill" d="M111 84h38v9h-38zM121 94h18v20h-18z"/>`;
      s += fig([130,37],[130,52],[130,94],[[104,63],[156,63]],[[92,72],[168,72]],[[119,111],[115,122]],[[110,127],[103,128]],'chest');
      s += `<g class="motion"><path class="ink" d="M91 58 106 76M169 58 154 76"/><rect class="equipment-fill" x="82" y="54" width="9" height="24" rx="3"/><rect class="equipment-fill" x="169" y="54" width="9" height="24" rx="3"/></g>${arrow(75,43,102,61)}`; break;
    case 'pushdown':
      s += `<path class="equipment" d="M210 17v105h-13M210 20h-13"/><circle class="equipment-fill" cx="210" cy="21" r="7"/><path class="ink-thin" d="M210 27 168 54 168 70"/><g class="motion"><path class="ink" d="M157 71h22"/></g>`;
      s += fig([111,37],[116,53],[120,95],[[99,69],[133,68]],[[100,102],[168,76]],[[110,109],[116,115]],[[120,129],[130,129]],'arms');
      s += R(161,69,15,7,3,'weight')+arrow(190,76,174,107); break;
    case 'overheadTriceps':
      s += `<path class="equipment" d="M37 18v105M37 20h14"/><circle class="equipment-fill" cx="37" cy="21" r="7"/><path class="ink-thin" d="M43 27 85 38 104 32"/><g class="motion"><path class="ink" d="M91 28h24"/></g>`;
      s += fig([133,35],[132,52],[130,98],[[113,35],[151,35]],[[104,24],[160,24]],[[119,112],[116,122]],[[108,130],[99,130]],'arms');
      s += `<path class="guide" d="M160 21q28 34 6 54"/>${R(100,17,10,8,2,'weight')}`; break;
    case 'singleArmTriceps':
      s += `<path class="equipment" d="M219 14v110M219 16h-15"/><circle class="equipment-fill" cx="219" cy="20" r="6"/><path class="ink-thin" d="M212 26 177 45 166 73"/><g class="motion"><path class="ink" d="M162 68v18"/></g>`;
      s += fig([109,35],[119,54],[124,97],[[105,69],[141,66]],[[101,95],[166,82]],[[114,109],[122,117]],[[122,130],[133,130]],'arms');
      s += `<path class="guide" d="M153 62v39"/>${R(160,81,12,6,2,'weight')}`; break;
    case 'legPress':
      s += `<path class="equipment" d="M28 25 97 108 188 108M46 26 115 109M188 108 214 50M176 99 206 45"/><path class="equipment-fill" d="M61 56 105 99l-10 10-45-43z"/><path class="equipment" d="M45 25 29 25M212 45l14-8"/><g class="motion"><path class="equipment" d="M205 42 229 24"/><rect class="weight" x="221" y="14" width="12" height="25" rx="3"/></g>`;
      s += fig([100,77],[113,88],[150,99],[[104,73],[126,61]],[[99,60],[82,39]],[[175,72],[185,78]],[[208,42],[226,29]],'legs');
      s += `<path class="guide" d="M139 73l34-28"/>${arrow(149,119,195,75)}`; break;
    case 'hackSquat':
      s += `<path class="equipment" d="M54 18v111M84 18v111M54 30 87 30M52 126h126M85 31l52 78"/><path class="equipment-fill" d="M90 28h34v11H90zM114 97h54v11h-54z"/><g class="motion"><path class="equipment" d="M88 34 108 88"/></g>`;
      s += fig([109,42],[111,59],[127,94],[[92,70],[130,71]],[[93,94],[130,90]],[[158,99],[171,111]],[[184,124],[197,125]],'legs');
      s += `<path class="guide" d="M154 44l20 40"/>${arrow(193,57,192,86)}`; break;
    case 'legExtension':
      s += `<path class="equipment" d="M43 115h91M67 76v39M126 76v40M65 78h66M126 80v29"/><path class="equipment-fill" d="M78 70h35v12H78zM119 82h10v32h-10z"/><g class="motion"><path class="ink" d="M134 104 177 104"/><rect class="weight" x="173" y="96" width="9" height="17" rx="2"/></g>`;
      s += fig([89,34],[91,50],[105,80],[[75,62],[103,62]],[[70,83],[112,77]],[[121,91],[151,91]],[[181,104],[205,104]],'legs');
      s += `<path class="guide" d="M139 120q26 7 40-6"/>`; break;
    case 'legCurl':
      s += `<path class="equipment" d="M43 112h145M67 79v35M124 78v37M65 80h65M123 83h58"/><path class="equipment-fill" d="M78 72h35v12H78zM152 84h23v10h-23z"/><g class="motion"><path class="ink" d="M130 94q20 8 31 24"/><rect class="weight" x="157" y="112" width="12" height="13" rx="2"/></g>`;
      s += fig([91,35],[93,52],[105,82],[[78,64],[109,65]],[[72,85],[119,84]],[[125,95],[158,114]],[[167,127],[185,127]],'legs');
      s += arrow(195,121,177,95); break;
    case 'hipAdduction':
      s += `<path class="equipment" d="M130 30v91M84 121h92M91 82v38M169 82v38"/><path class="equipment-fill" d="M112 78h36v10h-36zM81 72h13v29H81zM166 72h13v29h-13z"/><g class="motion"><path class="equipment" d="M90 91 111 99M170 91 149 99"/></g>`;
      s += fig([130,32],[130,49],[130,91],[[110,63],[150,63]],[[102,82],[158,82]],[[107,107],[120,117]],[[116,128],[107,128]],'legs');
      s += `<path class="guide" d="M79 65q50-35 102 0"/>${arrow(82,105,112,105)}${arrow(179,105,148,105)}`; break;
    case 'hipAbduction':
      s += `<path class="equipment" d="M130 30v91M84 121h92M91 82v38M169 82v38"/><path class="equipment-fill" d="M112 78h36v10h-36zM81 72h13v29H81zM166 72h13v29h-13z"/><g class="motion"><path class="equipment" d="M91 92 70 100M169 92 190 100"/></g>`;
      s += fig([130,32],[130,49],[130,91],[[110,63],[150,63]],[[102,82],[158,82]],[[110,109],[89,119]],[[79,128],[69,128]],'legs');
      s += `<path class="guide" d="M110 106q20 20 40 0"/>${arrow(117,109,86,112)}${arrow(143,109,174,112)}`; break;
    case 'standingCalf':
      s += `<path class="equipment" d="M65 108h130M77 108v12m106-12v12"/><path class="equipment-fill" d="M81 100h99v8H81zM91 31h78v6H91zM96 37v18M164 37v18"/><g class="motion"><path class="equipment" d="M96 55v25m68-25v25"/><path class="equipment-fill" d="M88 55h16v9H88zM156 55h16v9h-16z"/></g>`;
      s += fig([130,20],[130,39],[130,84],[[106,49],[154,49]],[[105,77],[155,77]],[[120,103],[122,110]],[[112,105],[106,99]],'legs');
      s += `<path class="guide" d="M100 120v-13"/>${arrow(201,118,201,94)}`; break;
    case 'seatedCalf':
      s += `<path class="equipment" d="M54 104h132M69 64v58M115 65v59M69 65h49M118 91h59"/><path class="equipment-fill" d="M72 59h42v10H72zM114 85h47v8h-47zM151 75h20v18h-20z"/><g class="motion"><path class="equipment" d="M151 93v20"/><rect class="weight" x="145" y="109" width="21" height="8" rx="3"/></g>`;
      s += fig([89,27],[91,44],[104,76],[[75,55],[111,56]],[[72,83],[121,85]],[[127,94],[161,94]],[[172,112],[191,112]],'legs');
      s += `${arrow(190,126,190,107)}<path class="guide" d="M167 130q17-9 26-1"/>`; break;
    case 'latPulldown':
      s += `<path class="equipment" d="M205 15v116M205 18h-54M150 18v14"/><circle class="equipment-fill" cx="150" cy="20" r="6"/><path class="ink-thin" d="M150 26 128 38"/><g class="motion"><path class="ink" d="M85 41h92"/><rect class="weight" x="78" y="35" width="8" height="12" rx="2"/><rect class="weight" x="176" y="35" width="8" height="12" rx="2"/></g><path class="equipment" d="M75 124h105M92 115v12M162 115v12"/>`;
      s += fig([130,53],[130,67],[130,94],[[100,51],[160,51]],[[89,41],[171,41]],[[118,107],[116,120]],[[112,129],[103,129]],'back');
      s += arrow(130,26,130,48); break;
    case 'seatedRow':
      s += `<path class="equipment" d="M211 27v94M211 28h-12M40 122h170M62 116v10M168 116v10"/><path class="ink-thin" d="M199 34 174 93 139 93"/><g class="motion"><path class="ink" d="M131 91h20"/><path class="ink-thin" d="M140 84v14"/></g><path class="equipment-fill" d="M91 90h34v10H91zM117 103h11v10h-11z"/>`;
      s += fig([100,45],[109,60],[124,91],[[92,72],[132,72]],[[128,90],[155,90]],[[155,108],[172,119]],[[182,128],[193,128]],'back');
      s += arrow(181,72,151,83); break;
    case 'facePull':
      s += `<path class="equipment" d="M32 16v115M32 19h15"/><circle class="equipment-fill" cx="33" cy="20" r="6"/><path class="ink-thin" d="M39 27 91 52"/><g class="motion"><path class="ink" d="M85 48h22"/><path class="ink" d="M86 57h22"/></g>`;
      s += fig([151,39],[145,56],[134,100],[[118,53],[166,52]],[[105,42],[178,43]],[[126,111],[119,121]],[[110,129],[100,129]],'back');
      s += arrow(78,76,111,49); break;
    case 'standingCurl':
      s += fig([130,24],[130,43],[130,88],[[106,60],[154,60]],[[108,34],[152,34]],[[121,105],[119,120]],[[114,129],[106,129]],'arms');
      s += `<g class="motion">${dumbbell(108,34,1.05)}${dumbbell(152,34,1.05)}</g><path class="guide" d="M92 75q-13-19 0-34M168 75q13-19 0-34"/>${arrow(89,89,91,58)}`; break;
    case 'preacherCurl':
      s += `<path class="equipment" d="M47 112 115 78 160 112M58 112h125M103 79l18-8 24 29"/><path class="equipment-fill" d="M83 77 130 58l15 19-48 19z"/><path class="equipment" d="M119 81v38"/>`;
      s += fig([96,27],[106,45],[121,77],[[100,59],[126,70]],[[92,84],[151,58]],[[135,107],[144,116]],[[149,129],[159,129]],'arms');
      s += `<g class="motion">${dumbbell(151,58,1.1)}</g>${arrow(163,81,148,56)}`; break;
    case 'hammerCurl':
      s += fig([130,24],[130,43],[130,88],[[105,60],[155,60]],[[106,62],[154,62]],[[121,105],[119,120]],[[113,129],[105,129]],'arms');
      s += `<g class="motion">${R(98,55,15,7,2,'weight','transform="rotate(90 105 58)"')}${R(147,55,15,7,2,'weight','transform="rotate(90 154 58)"')}</g>${arrow(86,83,100,57)}${arrow(174,83,160,57)}`; break;
    case 'concentrationCurl':
      s += `<path class="equipment" d="M48 112h108M80 100v14M140 100v14M82 101 70 124"/><path class="equipment-fill" d="M91 76h40v8H91z"/>`;
      s += fig([114,31],[126,48],[132,82],[[105,62],[143,65]],[[119,91],[153,63]],[[147,101],[151,118]],[[156,128],[167,128]],'arms');
      s += `<g class="motion">${dumbbell(153,61)}</g><path class="guide" d="M170 87q-18-22-14-34"/>`; break;
    case 'plank':
      s += `<path class="equipment-fill" d="M34 116h192v6H34z"/><path class="ink-thin" d="M45 122v7m170-7v7"/>`;
      s += `<g class="breath">${fig([65,83],[83,91],[154,94],[[83,104],[95,113]],[[97,113],[109,113]],[[182,103],[197,110]],[[205,111],[220,111]],'core')}</g>`;
      s += `<path class="guide" d="M73 68q48-20 96 0"/>`; break;
    case 'crunch':
      s += `<path class="equipment-fill" d="M31 112h198v7H31z"/><path class="equipment" d="M50 120v8m160-8v8"/>`;
      s += fig([82,79],[95,90],[148,101],[[78,91],[93,102]],[[66,81],[83,67]],[[179,103],[193,111]],[[208,120],[220,120]],'core');
      s += `<path class="guide" d="M101 68q-17-22 1-32"/>${arrow(117,56,99,39)}`; break;
    case 'captainRaise':
      s += `<path class="equipment" d="M66 18v114M194 18v114M66 20h128M66 65h128M78 65v20M182 65v20"/><path class="equipment-fill" d="M78 61h18v13H78zM164 61h18v13h-18z"/><path class="equipment" d="M66 111h128"/>`;
      s += fig([130,26],[130,43],[130,79],[[105,55],[155,55]],[[87,67],[173,67]],[[119,101],[115,121]],[[112,137],[105,137]],'core');
      s += `<g class="motion"><path class="ink" d="M130 78 105 58M130 78 155 58"/></g>${arrow(104,133,104,91)}${arrow(155,133,155,91)}`; break;
    case 'russianTwist':
      s += `<path class="equipment-fill" d="M38 116h185v6H38z"/><path class="equipment" d="M67 122v7m130-7v7"/>`;
      s += fig([109,49],[121,66],[131,94],[[103,75],[143,72]],[[89,79],[157,82]],[[158,98],[177,113]],[[193,122],[211,122]],'core');
      s += `<g class="motion"><circle class="accent-fill" cx="163" cy="77" r="7"/><path class="ink-thin" d="M157 77h12"/></g><path class="guide" d="M86 51q-26 22-4 48M172 50q25 20 5 45"/>`; break;
    case 'sidePlank':
      s += `<path class="equipment-fill" d="M32 119h195v6H32z"/>`;
      s += fig([75,75],[90,87],[159,102],[[78,101],[66,116]],[[66,116],[54,116]],[[185,105],[198,116]],[[211,120],[223,120]],'core');
      s += `<path class="ink" d="M90 87 132 100 159 102"/><path class="accent-stroke" d="M86 89 157 103"/><path class="guide" d="M102 62q48-18 84 10"/>`; break;
    case 'treadmill':
      s += `<path class="equipment" d="M34 117h185M49 117 68 91h130M66 117V78M194 91V24M181 24h26"/><path class="equipment-fill" d="M58 111h148l-7 7H53z"/><g class="motion"><path class="ink-thin" d="M71 113h14m7 0h14m7 0h14m7 0h14m7 0h14"/></g><path class="equipment-fill" d="M178 27h25v12h-25z"/>`;
      s += fig([115,30],[124,48],[133,86],[[105,55],[144,61]],[[95,45],[156,49]],[[150,91],[171,103]],[[185,112],[204,112]],'legs');
      s += `<g class="motion-shift"><path class="ink" d="M133 86 120 109"/><path class="ink" d="M134 86 154 104"/></g>${arrow(91,22,113,22)}`; break;
    case 'stationaryBike':
      s += `<circle class="equipment" cx="85" cy="111" r="25"/><circle class="equipment" cx="185" cy="111" r="25"/><path class="equipment" d="M85 111 121 75 145 111 85 111 185 111 145 111 166 61M121 75h-23M161 60h18M160 60l-15-9"/><path class="equipment-fill" d="M102 67h31v7h-31z"/><circle class="equipment-fill" cx="145" cy="111" r="8"/>`;
      s += fig([131,24],[132,42],[144,75],[[111,57],[151,56]],[[98,68],[164,61]],[[160,83],[177,103]],[[183,112],[196,123]],'legs');
      s += `<g class="motion-rotate"><path class="accent-stroke" d="M145 103q14-17 27 0"/></g>${arrow(212,72,222,90)}`; break;
    case 'inclineDumbbellPress':
      s += `<path class="equipment" d="M44 115 76 92 161 67 191 94M78 112l8-18M165 88l10 18"/><path class="equipment-fill" d="M77 84 161 60l5 9-86 24z"/>`;
      s += fig([57,72],[82,82],[147,99],[[88,61],[140,61]],[[92,37],[143,37]],[[177,102],[187,111]],[[207,124],[218,125]],'chest');
      s += `<g class="motion">${dumbbell(92,37,1.2)}${dumbbell(143,37,1.2)}</g>${arrow(162,54,162,27)}`; break;
    case 'lowHighFly':
      s += `<path class="equipment" d="M28 24v107M28 119h20M232 24v107M232 119h-20"/><circle class="equipment-fill" cx="29" cy="36" r="7"/><circle class="equipment-fill" cx="231" cy="36" r="7"/><path class="ink-thin" d="M29 43 86 97M231 43 174 97"/>`;
      s += fig([130,26],[130,44],[130,91],[[102,62],[158,62]],[[82,91],[178,91]],[[119,108],[116,120]],[[109,130],[100,130]],'chest');
      s += `<g class="motion"><path class="accent-stroke" d="M83 92 111 58M177 92 149 58"/></g>${arrow(61,90,98,54)}${arrow(199,90,162,54)}`; break;
    case 'highLowFly':
      s += `<path class="equipment" d="M28 24v107M28 24h20M232 24v107M232 24h-20"/><circle class="equipment-fill" cx="29" cy="36" r="7"/><circle class="equipment-fill" cx="231" cy="36" r="7"/><path class="ink-thin" d="M29 43 86 85M231 43 174 85"/>`;
      s += fig([130,26],[130,44],[130,91],[[102,62],[158,62]],[[82,82],[178,82]],[[119,108],[116,120]],[[109,130],[100,130]],'chest');
      s += `<g class="motion"><path class="accent-stroke" d="M83 82 111 105M177 82 149 105"/></g>${arrow(63,54,100,93)}${arrow(197,54,160,93)}`; break;
    case 'closeGripBench':
      s += `<path class="equipment" d="M38 108h184M53 108v15m153-15v15"/><path class="equipment-fill" d="M66 94h126v11H66z"/><g class="motion"><path class="ink" d="M91 35h78"/><rect class="weight" x="80" y="27" width="10" height="17" rx="2"/><rect class="weight" x="170" y="27" width="10" height="17" rx="2"/></g>`;
      s += fig([62,77],[87,86],[151,91],[[106,58],[132,58]],[[111,35],[127,35]],[[177,103],[188,112]],[[210,123],[221,123]],'arms');
      s += `${arrow(129,18,129,44)}<path class="guide" d="M113 48h18"/>`; break;
    case 'shoulderPress':
      s += `<path class="equipment" d="M130 35v91M86 126h88M91 89v36M169 89v36"/><path class="equipment-fill" d="M107 78h46v9h-46zM115 88h30v9h-30z"/>`;
      s += fig([130,24],[130,42],[130,88],[[103,57],[157,57]],[[97,26],[163,26]],[[117,105],[115,120]],[[108,129],[99,129]],'shoulders');
      s += `<g class="motion">${dumbbell(97,26,1.1)}${dumbbell(163,26,1.1)}</g>${arrow(85,61,85,25)}${arrow(175,61,175,25)}`; break;
    case 'lateralRaise':
      s += fig([130,25],[130,44],[130,89],[[101,60],[159,60]],[[74,42],[186,42]],[[120,105],[118,120]],[[110,130],[102,130]],'shoulders');
      s += `<g class="motion">${dumbbell(74,42,1.05)}${dumbbell(186,42,1.05)}</g>${arrow(65,85,75,43)}${arrow(195,85,185,43)}<path class="guide" d="M84 27q46-35 92 0"/>`; break;
    case 'inclineCurl':
      s += `<path class="equipment" d="M55 116 84 81 147 81 178 116M83 81 82 64"/><path class="equipment-fill" d="M83 72h65v9H83z"/>`;
      s += fig([102,31],[115,46],[132,79],[[94,61],[144,61]],[[90,84],[164,83]],[[150,98],[161,114]],[[173,127],[186,127]],'arms');
      s += `<g class="motion">${dumbbell(90,84)}${dumbbell(164,83)}</g>${arrow(88,107,87,82)}`; break;
    case 'plateShrug':
      s += fig([130,24],[130,43],[130,89],[[105,55],[155,55]],[[105,91],[155,91]],[[120,105],[119,120]],[[111,130],[102,130]],'shoulders');
      s += `<g class="motion-slow">${plate(103,94,10)}${plate(157,94,10)}<path class="accent-stroke" d="M106 37v-9m48 9v-9"/></g>${arrow(90,105,90,83)}${arrow(170,105,170,83)}<path class="guide" d="M112 17q18-10 36 0"/>`; break;
    case 'reverseWrist':
      s += `<path class="equipment-fill" d="M44 87h128v8H44z"/><path class="equipment" d="M66 95v25m86-25v25"/>`;
      s += fig([99,30],[112,48],[132,78],[[111,59],[147,68]],[[152,73],[183,62]],[[152,93],[167,105]],[[177,117],[190,117]],'arms');
      s += `<g class="motion">${dumbbell(186,62,1.05)}</g><path class="guide" d="M173 42q22 5 21 24"/>${arrow(211,79,205,56)}`; break;
    case 'dumbbellWrist':
      s += `<path class="equipment-fill" d="M48 91h124v8H48z"/><path class="equipment" d="M70 99v23m84-23v23"/>`;
      s += fig([91,30],[104,46],[125,78],[[103,58],[140,70]],[[149,83],[180,84]],[[148,94],[162,106]],[[174,118],[188,118]],'arms');
      s += `<g class="motion">${dumbbell(181,84,1.05)}</g>${arrow(203,105,203,79)}<path class="guide" d="M160 69q24 8 27 23"/>`; break;
    case 'cableWrist':
      s += `<path class="equipment" d="M222 17v115M222 20h-12"/><circle class="equipment-fill" cx="222" cy="22" r="7"/><path class="ink-thin" d="M215 28 179 68"/><path class="equipment-fill" d="M48 94h122v8H48z"/><path class="equipment" d="M69 102v21m84-21v21"/><g class="motion"><path class="ink" d="M165 79h24"/></g>`;
      s += fig([93,29],[106,46],[125,78],[[103,59],[141,69]],[[148,80],[182,75]],[[148,94],[162,106]],[[174,118],[188,118]],'arms');
      s += `${cable(222,29,185,75)}<path class="guide" d="M180 56q16 4 20 20"/>`; break;
    default:
      s += `<path class="ink-thin" d="M45 25h170M45 125h170"/>`;
  }
  return svgWrap(ex, s);
}

function renderExerciseCard(ex){
  const done = isCompleted(ex.id);
  const rest = ex.rest === null ? '—' : `${toFa(ex.rest)} ثانیه`;
  const extra = ex.detail ? `<span class="param-chip">${escapeHTML(ex.detail)}</span>` : '';
  return `<article class="exercise-card ${done?'is-complete':''}" data-exercise-id="${ex.id}" data-day="${ex.day}" data-search="${escapeHTML((ex.fa+' '+ex.en).toLocaleLowerCase('fa'))}">
    <div class="exercise-visual">${drawScene(ex.visual, ex)}<span class="visual-corner-label">${toFa(ex.index)}</span></div>
    <div class="exercise-topline"><span class="exercise-number">${toFa(ex.day)} / ${toFa(ex.index).padStart(2,'۰')}</span><span class="exercise-kind">${escapeHTML(ex.kind)}</span></div>
    <h4 class="exercise-name"><span>${escapeHTML(ex.fa)}</span> <span class="en-name" dir="ltr">(${escapeHTML(ex.en)})</span></h4>
    <div class="exercise-params"><span class="param-chip">ست <b>${toFa(ex.sets)}</b></span><span class="param-chip">تکرار <b>${escapeHTML(ex.reps)}</b></span><span class="param-chip">استراحت <b>${rest}</b></span>${extra}</div>
    <div class="exercise-footer"><label class="completion-control"><input type="checkbox" class="complete-checkbox" data-id="${ex.id}" ${done?'checked':''} aria-label="تکمیل حرکت ${escapeHTML(ex.fa)}"><span>تکمیل حرکت</span></label><button type="button" class="animation-control" data-animation="${ex.id}" aria-label="توقف انیمیشن ${escapeHTML(ex.fa)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg><span>توقف حرکت</span></button></div>
  </article>`;
}
function renderDays(){
  $('#daysContainer').innerHTML = DAYS.map(day => {
    const stats = dayStats(day);
    return `<section class="day-section" id="day-${day.day}" data-day-section="${day.day}">
      <button class="day-header" type="button" aria-expanded="true" aria-controls="day-body-${day.day}">
        <span class="day-index">${toFa(String(day.day).padStart(2,'0'))}</span>
        <span class="day-heading"><h3>روز ${toFa(day.day)} <b>·</b> ${day.heading}</h3><p>تمرکز تمرینی: <b>${day.focus}</b></p></span>
        <span class="day-header-meta"><span class="day-metric">${toFa(day.exercises.length)} حرکت</span><span class="day-metric">${toFa(stats.totalSets)} ست</span><span class="day-progress-mini"><i style="width:${stats.percent}%"></i></span></span>
        <span class="day-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></span>
      </button>
      <div class="day-body" id="day-body-${day.day}"><div class="day-body-divider"></div><div class="exercise-grid">${day.exercises.map(ex=>renderExerciseCard({...ex,day:day.day,index:day.exercises.indexOf(ex)+1})).join('')}</div></div>
    </section>`;
  }).join('');
  $$('.day-section .day-header').forEach(button => button.addEventListener('click', () => {
    const section = button.closest('.day-section');
    const collapsed = section.classList.toggle('is-collapsed');
    button.setAttribute('aria-expanded', String(!collapsed));
  }));
  $$('.complete-checkbox').forEach(input => input.addEventListener('change', onCompleteChange));
  $$('.animation-control').forEach(button => button.addEventListener('click', onAnimationToggle));
}

function updateOverview(){
  const done = completedCount(), remaining = TOTAL_EXERCISES - done, sets = completedSets();
  const percent = Math.round(done / TOTAL_EXERCISES * 100);
  $('#heroExerciseCount').textContent = toFa(TOTAL_EXERCISES);
  $('#heroSetCount').textContent = toFa(TOTAL_SETS);
  $('#weeklyPercent').textContent = `${toFa(percent)}٪`;
  $('#weeklyRing').style.strokeDashoffset = String(HERO_CIRCUMFERENCE * (1 - percent/100));
  $('#heroCompleted').textContent = `${toFa(done)} حرکت انجام‌شده`;
  $('#heroRemaining').textContent = `${toFa(remaining)} حرکت باقی‌مانده`;
  $('#statCompleted').innerHTML = `${toFa(done)} <small>از ${toFa(TOTAL_EXERCISES)}</small>`;
  $('#statRemaining').textContent = toFa(remaining);
  $('#statSets').innerHTML = `${toFa(sets)} <small>از ${toFa(TOTAL_SETS)}</small>`;
  $('#statsFootText').textContent = done === TOTAL_EXERCISES ? 'برنامه این هفته کامل شد؛ عالی بود!' : done ? 'ریتمت را حفظ کن؛ مسیرت رو به جلوست.' : 'هر حرکت کامل‌شده، یک قدم جلوتر.';
  $('#miniWeek').innerHTML = DAYS.map(day => {
    const st = dayStats(day);
    return `<div class="mini-day"><b>${toFa(day.day)}</b><span class="mini-day-track"><i style="width:${st.percent}%"></i></span><small>${toFa(st.percent)}٪</small></div>`;
  }).join('');
  DAYS.forEach(day => {
    const st = dayStats(day);
    const section = $(`#day-${day.day}`);
    if(!section) return;
    section.classList.toggle('day-complete', st.percent === 100);
    const metric = section.querySelector('.day-header-meta');
    metric.querySelector('.day-progress-mini i').style.width = `${st.percent}%`;
    const tab = $(`.day-tab[data-day="${day.day}"]`);
    tab.classList.toggle('has-progress', st.done > 0);
    tab.classList.toggle('is-day-complete', st.percent === 100);
  });
}
function onCompleteChange(event){
  const input = event.currentTarget;
  const id = input.dataset.id;
  const exercise = ALL_EXERCISES.find(item => item.id === id);
  if(input.checked){
    if(!state.completed.includes(id)) state.completed.push(id);
    showToast('حرکت با موفقیت ثبت شد.');
    if(state.autoTimer && exercise){
      const rest = exercise.rest || 60;
      setTimerPreset(rest);
      startTimer();
      $('#timerNote').textContent = `استراحت ${toFa(rest)} ثانیه‌ای برای حرکت بعدی شروع شد.`;
    }
  }else{
    state.completed = state.completed.filter(item => item !== id);
    showToast('ثبت حرکت لغو شد.');
  }
  const card = input.closest('.exercise-card');
  card.classList.toggle('is-complete', input.checked);
  saveState();
  updateOverview();
  applyFilters();
}
function onAnimationToggle(event){
  const button = event.currentTarget;
  const card = button.closest('.exercise-card');
  const svg = card.querySelector('svg');
  const paused = svg.classList.toggle('paused');
  button.innerHTML = paused
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg><span>پخش حرکت</span>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg><span>توقف حرکت</span>';
  button.setAttribute('aria-label', `${paused?'پخش':'توقف'} انیمیشن ${card.querySelector('.exercise-name').textContent}`);
}

function applyFilters(){
  const query = $('#exerciseSearch').value.trim().toLocaleLowerCase('fa');
  let visible = 0;
  DAYS.forEach(day => {
    const section = $(`#day-${day.day}`);
    let dayVisible = 0;
    section.querySelectorAll('.exercise-card').forEach(card => {
      const id = card.dataset.exerciseId;
      const exDone = isCompleted(id);
      const searchMatch = !query || card.dataset.search.includes(query);
      const statusMatch = activeFilter === 'all' || (activeFilter === 'done' ? exDone : !exDone);
      const dayMatch = activeDayFilter === 'all' || Number(activeDayFilter) === day.day;
      const show = searchMatch && statusMatch && dayMatch;
      card.classList.toggle('filtered-out', !show);
      if(show){dayVisible++;visible++;}
    });
    section.hidden = dayVisible === 0;
  });
  $('#emptyState').hidden = visible !== 0;
  const activeDayLabel = activeDayFilter === 'all' ? 'همه روزها' : `روز ${toFa(activeDayFilter)}`;
  $('#searchStatus').textContent = query || activeFilter !== 'all' || activeDayFilter !== 'all' ? `${toFa(visible)} حرکت نمایش داده می‌شود · ${activeDayLabel}` : '';
}
function setupFilters(){
  $('#exerciseSearch').addEventListener('input', applyFilters);
  $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    $$('.filter-btn').forEach(item => item.classList.toggle('is-selected', item === btn));
    applyFilters();
  }));
  $('#clearSearchBtn').addEventListener('click', () => {
    $('#exerciseSearch').value = '';
    activeFilter = 'all'; activeDayFilter = 'all';
    $('#dayFilter').value = 'all';
    $$('.filter-btn').forEach(item => item.classList.toggle('is-selected', item.dataset.filter === 'all'));
    applyFilters();
  });
  $('#dayFilter').addEventListener('change', event => {
    activeDayFilter = event.target.value;
    $$('.day-tab').forEach(tab => tab.classList.toggle('is-active', tab.dataset.day === activeDayFilter));
    applyFilters();
  });
  $$('.day-tab').forEach(tab => tab.addEventListener('click', () => {
    activeDayFilter = tab.dataset.day;
    $('#dayFilter').value = activeDayFilter;
    $$('.day-tab').forEach(item => item.classList.toggle('is-active', item === tab));
    applyFilters();
    const section = $(`#day-${tab.dataset.day}`);
    if(section.classList.contains('is-collapsed')){
      section.classList.remove('is-collapsed');
      section.querySelector('.day-header').setAttribute('aria-expanded','true');
    }
    section.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  }));
  document.addEventListener('keydown', event => {
    if(event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){
      event.preventDefault(); $('#exerciseSearch').focus();
    }
    if(event.key === 'Escape' && document.activeElement === $('#exerciseSearch')){
      $('#exerciseSearch').value=''; applyFilters(); $('#exerciseSearch').blur();
    }
  });
}

function formatTime(seconds){
  const safe = Math.max(0, Math.ceil(seconds));
  return toFa(`${String(Math.floor(safe/60)).padStart(2,'0')}:${String(safe%60).padStart(2,'0')}`);
}
function renderTimer(){
  $('#timerDisplay').textContent = formatTime(timer.remaining);
  const fraction = timer.duration ? timer.remaining/timer.duration : 0;
  $('#timerProgress').style.strokeDashoffset = String(CIRCUMFERENCE*(1-fraction));
  $('#timerState').textContent = timer.running ? 'در حال استراحت' : timer.remaining===0 ? 'استراحت تمام شد' : timer.remaining===timer.duration ? 'آماده شروع' : 'متوقف‌شده';
  $('#timerStartBtn span').textContent = timer.running ? 'توقف' : timer.remaining===timer.duration || timer.remaining===0 ? 'شروع' : 'ادامه';
  $('#timerStartBtn svg').innerHTML = timer.running ? '<path d="M7 5h4v14H7zM14 5h4v14h-4z"/>' : '<path d="m8 5 11 7-11 7z"/>';
  $$('.preset-btn').forEach(btn => btn.classList.toggle('is-active', Number(btn.dataset.seconds)===timer.duration));
}
function clearTimerInterval(){ if(timer.interval){clearInterval(timer.interval);timer.interval=null;} }
function setTimerPreset(seconds){
  clearTimerInterval();
  timer.duration = seconds; timer.remaining = seconds; timer.running = false; timer.endAt = 0;
  renderTimer();
}
function startTimer(){
  if(timer.running) return;
  if(timer.remaining<=0) timer.remaining=timer.duration;
  timer.running=true; timer.endAt=Date.now()+timer.remaining*1000;
  clearTimerInterval();
  timer.interval=setInterval(tickTimer,200);
  renderTimer();
}
function pauseTimer(){
  if(!timer.running) return;
  timer.remaining=Math.max(0,Math.ceil((timer.endAt-Date.now())/1000));
  timer.running=false;clearTimerInterval();renderTimer();
}
function tickTimer(){
  timer.remaining=Math.max(0,(timer.endAt-Date.now())/1000);
  if(timer.remaining<=0){
    timer.remaining=0;timer.running=false;clearTimerInterval();renderTimer();playTimerSound();
    $('#timerState').textContent='استراحت تمام شد';$('#timerNote').textContent='زمان استراحت تمام شد؛ با آمادگی سراغ حرکت بعدی برو.';
    showToast('زمان استراحت تمام شد!');
    return;
  }
  renderTimer();
}
function resetTimer(){clearTimerInterval();timer.running=false;timer.remaining=timer.duration;timer.endAt=0;renderTimer();$('#timerNote').textContent='تایمر برای استراحت بعدی آماده است.';}
function playTimerSound(){
  try{
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if(!AudioContext) return;
    const context = new AudioContext();
    [0,0.22,0.44].forEach((offset,index)=>{
      const oscillator=context.createOscillator();const gain=context.createGain();
      oscillator.type='sine';oscillator.frequency.value=index===1?990:790;
      gain.gain.setValueAtTime(.0001,context.currentTime+offset);
      gain.gain.exponentialRampToValueAtTime(.16,context.currentTime+offset+.025);
      gain.gain.exponentialRampToValueAtTime(.0001,context.currentTime+offset+.17);
      oscillator.connect(gain);gain.connect(context.destination);
      oscillator.start(context.currentTime+offset);oscillator.stop(context.currentTime+offset+.19);
    });
    setTimeout(()=>context.close().catch(()=>{}),1200);
  }catch(error){ /* Audio is optional; the visual notification remains available. */ }
}
function setupTimer(){
  $$('.preset-btn').forEach(btn=>btn.addEventListener('click',()=>setTimerPreset(Number(btn.dataset.seconds))));
  $('#timerStartBtn').addEventListener('click',()=>timer.running?pauseTimer():startTimer());
  $('#timerResetBtn').addEventListener('click',resetTimer);
  $('#autoTimerToggle').checked=state.autoTimer;
  $('#autoTimerToggle').addEventListener('change',event=>{
    state.autoTimer=event.target.checked;saveState();
    $('#timerNote').textContent=state.autoTimer?'پس از تکمیل حرکت، تایمر استراحت به‌صورت خودکار شروع می‌شود.':'شروع استراحت فقط با فرمان خودت انجام می‌شود.';
  });
  renderTimer();
}

function showToast(message){
  const toast=$('#toast');toast.textContent=message;toast.classList.add('show');
  clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('show'),2300);
}
function setupReset(){
  $('#resetAllBtn').addEventListener('click',()=>{
    if(!window.confirm('تمام حرکت‌های ثبت‌شده پاک شوند و پیشرفت هفتگی از ابتدا محاسبه شود؟')) return;
    state.completed=[];saveState();
    $$('.complete-checkbox').forEach(input=>{input.checked=false;input.closest('.exercise-card').classList.remove('is-complete');});
    updateOverview();applyFilters();showToast('پیشرفت برنامه بازنشانی شد.');
  });
}

function init(){
  loadState();
  renderDays();
  $('#dayFilter').innerHTML = `<option value="all">همه روزها</option>${DAYS.map(day=>`<option value="${day.day}">روز ${toFa(day.day)} · ${day.title}</option>`).join('')}`;
  setupFilters();setupTimer();setupReset();
  updateOverview();applyFilters();
}

document.addEventListener('DOMContentLoaded', init);
