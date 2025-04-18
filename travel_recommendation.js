const resalt = document.getElementById('resalt')
const searchBtn = document.getElementById('searchBtn');
const resetBtn = document.getElementById('resetBtn')


  function resetResalt() {
    resalt.innerHTML = '';
  }


function searchPlace() {
    const user_search = document.getElementById('search').value.toLowerCase();
    resalt.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (user_search==="country" || user_search==="countries"){
          data.countries.forEach(country => {
            // country.cities.forEach(city=>{
            //     resalt.innerHTML += `<div class="resalt-items"><img src="${city.imageUrl}">
            //                          <h2>${city.name}</h2>
            //                          <p>${city.description}</p> 
            //                          <button>Visit</button></div>`
            // })
            const city = country.cities[0]
              resalt.innerHTML += `<div class="resalt-items"><img src="${city.imageUrl}">
                                   <h2>${city.name}</h2>
                                   <p>${city.description}</p> 
                                   <button>Visit</button></div>`
          })

        }else if(user_search==="beach" || user_search==="beaches"){
          data.beaches.forEach(beach=>{
            resalt.innerHTML += `<div class="resalt-items"><img src="${beach.imageUrl}">
                                   <h2>${beach.name}</h2>
                                   <p>${beach.description}</p> 
                                   <button>Visit</button></div>`
          })

        }else if(user_search==="temple" || user_search==="temples"){
          data.temples.forEach(temple=>{
            resalt.innerHTML += `<div class="resalt-items"><img src="${temple.imageUrl}">
                                   <h2>${temple.name}</h2>
                                   <p>${temple.description}</p> 
                                   <button>Visit</button></div>`
          })
        }else{
          alert("Keywords : beach, temple, or country")
        }
        
      })
      .catch(error => {
        console.error('Error:', error);
        resalt.innerHTML = 'An error occurred while fetching data.';
        console.log("error")
      });
  }
  searchBtn.addEventListener('click', searchPlace);
  resetBtn.addEventListener('click',resetResalt)
