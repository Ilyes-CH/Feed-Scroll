const image = document.getElementsByName('img');
const container = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = [];

//  Unsplash url
const count = 2;
const apiKey = 'u2WkTM408STXlSLm_Q_4-nZlt3qUi96F9kGrwi2pfkc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// show loader
function showLoader(){
    loader.style.display = 'block';
    container.style.display ='none';
}

// hide loader
function hideLoader(){
    loader.style.display = 'none';
    container.style.display = 'block';
}

// Create Element for links and photos then add em to DOM
function setAttribute(element, attributes)
{
    for (const key in attributes)
        element.setAttribute(key,attributes[key]) 
}


function displayPhoto(){
    photosArray.forEach(photo => {
       
        const item = document.createElement('a');
        setAttribute(item,{
            href: photo.links.html,
            target:'_blank'
        })
        const img = document.createElement('img');    
        setAttribute(img, {
            src: photo.urls.regular,
            alt : photo.alt_description,
            title : photo.alt_description
        })
    
        item.appendChild(img);
        container.appendChild(item);

    });
}


// Get Photos from unsplash API
async function getPhotos(){
    try{
        showLoader()
        const res =await fetch(apiUrl)
        photosArray = await res.json()
        console.log(photosArray);
        displayPhoto();
        hideLoader()
        
    }
    catch(error){
        showLoader()
        console.log( new Error('Error fetching data',error));
        const parag = document.querySelector('p');
        parag.textContent='No data for now Check back later'
        
    }
    
}


window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) 
    {   
        getPhotos()
        console.log('Loading...');


    }
})


// function reload(){
//     if(photosArray.length == 5 ){
//       getPhotos()
//         displayPhoto()
//     }
  
// }
getPhotos();








