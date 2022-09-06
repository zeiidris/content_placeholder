const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

function getData(e) {
    header.innerHTML ='<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid-eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80">';
    title.innerHTML = "Lorem ipsum dolor sit amet."
    excerpt.innerHTML  ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, accusamus!"
    profile_img.innerHTML = "<img src='gamer.jpg'>";
    name.innerHTML = "Addali idris";
    date.innerHTML = "Feb 25,2006"
    animated_bgs.forEach(bg =>{bg.classList.remove('animated-bg')})
    animated_bg_text.forEach(bg =>{bg.classList.remove('animated-bg-text')})
}

setTimeout(getData,2500);