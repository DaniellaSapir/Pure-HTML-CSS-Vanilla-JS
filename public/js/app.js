const navBtn = document.querySelector('.nav_btn');
const navLinks = document.querySelector('.nav_links');

//Collapse Navbar
const navCollapse = () => navLinks.classList.toggle('collapsed');
navBtn.onclick = () => navCollapse();

//Rotate bars
navBtn.addEventListener('click', (event) =>
    navBtn.classList.toggle('nav_bars_move'));

//Color Validation
const inp_field = {
    name: /^[a-zA-Z\s]+$/,
    email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
    phone: /^\d{10,20}$/
};
const validateForm = (field, regex) => {
    field.value.match(regex) ? field.className = 'valid' : field.className = 'invalid';
};
let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
    'keyup', event => {
        validateForm(event.target, inp_field[event.target.attributes.name.value])
    }
));


//   WORKSHOPS REGISTRATION

const getFirstSunday = (year, month) => {
    for(let j=1; j<8; j++) {
        if (new Date(year, month, j).getDay() === 0) {
            return j;
        }
    }
};

const formatDate = (date) => {
    return date.toString().slice(0, 15);
};

const setOption = (value, index) => {
    document.getElementById('workshop').options[index].innerHTML = value;
    document.getElementById('workshop').options[index].value = value;
};

const printOptions = (year, month, day) => {
    //set HTML Options
    setOption(formatDate(new Date(year, month, day)), 0);
    setOption(formatDate(new Date(year, month + 3, getFirstSunday(year, month + 3))), 1);
    setOption(formatDate(new Date(year, month + 6, getFirstSunday(year, month + 6))), 2);
    setOption(formatDate(new Date(year, month + 9, getFirstSunday(year, month + 9))), 3);
};

// set workshop dates
const printWorkshopDates = () => {
    const d = new Date();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let firstWorkshop = null;

    //first month in Quarter
    if((month % 3)  === 0 && d.getDate() <= getFirstSunday(year, month)) {
        firstWorkshop = new Date(year, month, getFirstSunday(year, month));
    }
    else {
        month = month + (3 - month % 3);
        let firstSunday = getFirstSunday(year, month);
        firstWorkshop = new Date(year, month, firstSunday);
    }
    printOptions(firstWorkshop.getFullYear(), firstWorkshop.getMonth(), firstWorkshop.getDate());
};
printWorkshopDates();


//Typewriter
const tw = {
    container: "twrap",
    text: "Join our Workshops, they are the Best!",
    delay: 100,
    timer: null,
    pointer: 0, // Current text position
    draw : function (){
        tw.pointer++;
        tw.container.innerHTML = tw.text.substring(0, tw.pointer);
        if (tw.pointer < tw.text.length) {
            tw.timer = setTimeout(tw.draw, tw.delay);
        }
    }
};
window.addEventListener("load", function(){
    tw.container = document.getElementById(tw.container);
    tw.draw();
});