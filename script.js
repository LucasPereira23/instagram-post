const swiper = new Swiper('.swiper', {
    
    // Optional parameters
    direction: 'horizontal',

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //function to return random integer from interval
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //getting page value min and max
  const page = randomIntFromInterval(1, 100)

  //store the api url 
  const Url = `https://picsum.photos/v2/list?page=${page}&limit=4`


  const recebe = fetch(Url)//makes the request and save the promise(async data)
   recebe
   .then(response =>{return response.json()})//then catch the request response as json
   .then(response_json =>{
        var images = response_json.map(image => image.download_url)//extract url from response_json
        var list = document.getElementsByClassName('swiper-slide')
    
        var indice = 0
    
        for(element of list){//swap the page images
            element.getElementsByTagName("img")[0].src = images[indice]
            indice += 1
        }
    })

function Toggle(){

    var heart_svg = document.getElementById('heart_icon')
    var heart = document.getElementById('heart_icon').getElementsByTagName('path')[0]

    if(heart_svg.classList.contains("inactive")){
        heart.setAttribute('fill', '#ED4956')
        heart.setAttribute('stroke', '#ED4956')
        heart.setAttribute('stroke-width', '0')
        heart_svg.classList.remove("inactive")
        heart_svg.classList.add("active")
    }else if(heart_svg.classList.contains("active")){
        heart.setAttribute('fill', 'invisible')
        if(document.body.classList.contains("dark-mode")){
          heart.setAttribute('stroke', 'white')
        }
        else{
          heart.setAttribute('stroke', 'black')
        }
        heart.setAttribute('stroke-width', '2')
        heart_svg.classList.remove("active")
        heart_svg.classList.add("inactive")
    }
}

const postInput = document.getElementById('post-input')
const postBtn = document.getElementById('post-btn')
const ul = document.getElementById('ul-post')

PostArray = [
              `<li>
                <span>Comment</span> consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et 
              </li>`
            ]

ul.innerHTML = PostArray

postBtn.addEventListener('click', PostComment)


function PostComment(){ // function makes the store from input submit to PostArray. Then render all array items

  var postSubmit = postInput.value

  if(postSubmit !== ''){

    PostArray.push(`
    <li>
      <span>Comment</span>
      ${postSubmit}
    </li>
  `)
  }
  ul.innerHTML = PostArray.join([''])//remove the comma separation
  postInput.value='' //assing empty value to the input
  postInput.focus() // brings focus to input
}

document.addEventListener("keypress", function(e) {//function to submit when pressing enter on keyboard
  if(e.key === 'Enter') {
    postBtn.click();
  }
});




const btn = document.getElementById("btn")

var content_dark = document.getElementById("content-dark")
var post_dark = document.getElementById("post-dark")

var heart = document.getElementById('heart_icon').getElementsByTagName('path')[0]
var comment = document.getElementById('comment_icon').getElementsByTagName('path')[0]
var share = document.getElementById('share_icon').getElementsByTagName('path')[0]
var share2 = document.getElementById('share_icon').getElementsByTagName('path')[1]

btn.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked)
  if(document.body.classList.contains("dark-mode")){
    heart.setAttribute('stroke', 'white')
    comment.setAttribute('stroke', 'white')
    share.setAttribute('stroke', 'white')
    share2.setAttribute('stroke', 'white')
    content_dark.classList.add("dark-mode")
    post_dark.classList.add("dark-mode")
  }
  else{
    heart.setAttribute('stroke', 'black')
    comment.setAttribute('stroke', 'black')
    share.setAttribute('stroke', 'black')
    share2.setAttribute('stroke', 'black')
    content_dark.classList.remove("dark-mode")
    post_dark.classList.remove("dark-mode")
  }

})