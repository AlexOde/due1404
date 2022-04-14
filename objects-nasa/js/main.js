//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// https://api.nasa.gov/planetary/apod?api_key=svHoPl2kyLQrpyUddEmtEac86Pc543d9SX7hcU3d



document.querySelector('button').addEventListener('click', getImage)

function getImage(){
    const dateInput = document.querySelector('input')
    const url = "https://api.nasa.gov/planetary/apod?api_key="
    const apiKey = "svHoPl2kyLQrpyUddEmtEac86Pc543d9SX7hcU3d"
    let newDate = "&date="+dateInput.value+"&"
    dateInput.min = "1995-06-16"

    fetch(url+apiKey+newDate)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("h2").innerText = data.title
        document.querySelector("img").src = data.hdurl
        document.querySelector("h3").innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}