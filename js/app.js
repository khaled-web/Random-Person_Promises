// const btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//   finialResult(getData);
// });

// function finialResult(cb) {
//   const url = "https://randomuser.me/api/";
//   const ajax = new XMLHttpRequest();
//   ajax.open('GET', url, true);

//   ajax.onload = function () {
//     if (this.status === 200) {
//       cb(this.responseText, showData);
//     } else {
//       this.onerror();
//     }
//   }

//   ajax.onerror = function () {
//     console.log('There are an error.');
//   }

//   ajax.send();

// }

// function getData(response, cb) {
//   const data = JSON.parse(response);
//   console.log(data)
//   const {
//     name: {
//       first
//     },
//     name: {
//       last
//     },
//     picture: {
//       large
//     },
//     location: {
//       country
//     },
//     location: {
//       city
//     },
//     phone: phone,
//     email: email
//   } = data.results[0]
//   cb(data, first, last, large, country, city, phone, email)
// }

// function showData(data, first, last, large, country, city, phone, email) {
//   console.log(data)
//   document.getElementById('first').textContent = first;
//   document.getElementById('last').textContent = last;
//   document.getElementById('photo').src = large;
//   document.getElementById('country').textContent = country;
//   document.getElementById('city').textContent = city;
//   document.getElementById('phone').textContent = phone;
//   document.getElementById('email').textContent = email;
// }

// Promises

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  ajax.then(data => showData(data)).catch(error => console.log(error));
});

const ajax = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  const url = "https://randomuser.me/api/";

  xhr.open('GET', url, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(Error(xhr.statusText))
    }
  };

  xhr.onerror = () => {
    reject(Error('There was an error'))
  }

  xhr.send();
});

function showData(data) {
  const response = JSON.parse(data);
  // console.log(response);

  const {
    name: {
      first
    },
    name: {
      last
    },
    picture: {
      large
    },
    location: {
      country
    },
    location: {
      city
    },
    phone: phone,
    email: email
  } = response.results[0];

  // console.log(data);

  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('photo').src = large;
  document.getElementById('country').textContent = country;
  document.getElementById('city').textContent = city;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
}

// function externalData(url) {
//   return new Promise(function (resolve, reject) {
//     if (url.length > 0) {
//       resolve('response data');
//     } else {
//       reject('there was an error');
//     }
//   })
// }

// externalData('url')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));