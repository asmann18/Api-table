const table = document.querySelector(".table");
const url = "https://jsonplaceholder.typicode.com/users";
const tableBody = document.querySelector(".table_body");

document.addEventListener("DOMContentLoaded", () => {
  normalFetch();
});

function normalFetch() {
  tableBody.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((elem) => {
        tableBody.innerHTML += `
      <div class="table_row"> 
        <div class="table_data">${elem.name}</div>
                <div class="table_data">${elem.username}</div>
                <div class="table_data">${elem.email}</div>
                <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}
const headerItem = document.querySelectorAll(".header_item");

headerItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML.includes("▲")) {
      e.target.innerHTML = e.target.innerHTML.replace("▲", "");
      normalFetch();
    } else if (e.target.innerHTML.includes("▼")) {
      e.target.innerHTML = e.target.innerHTML.replace("▼", "▲");
      if (
        e.target.innerText.includes("NAME") &&
        !e.target.innerHTML.includes("USERNAME")
      ) {
        descSortByName();
      } else if (e.target.innerText.includes("USERNAME")) {
        descSortByUsername();
      } else if (e.target.innerText.includes("EMAIL")) {
        descSortByEmail();
      } else if (e.target.innerText.includes("ADDRESS")) {
        descSortByAddress();
      }
    } else {
      e.target.innerText += "▼";
      if (
        e.target.innerText.includes("NAME") &&
        !e.target.innerHTML.includes("USERNAME")
      ) {
        sortByName();
      } else if (e.target.innerText.includes("USERNAME")) {
        sortByUsername();
      } else if (e.target.innerText.includes("EMAIL")) {
        sortByEmail();
      } else if (e.target.innerText.includes("ADDRESS")) {
        sortByAddress();
      }
    }

    // headerItem.forEach((item) => {
    //   item.innerText = item.innerText.replace("▼", "");
    // });
    // switch (e.target.innerText) {
    //   case "NAME":
    //     if (e.target.innerHTML.includes("▼")) {
    //       descSortByName();
    //       e.target.innerText += "▲";
    //     } else {
    //       sortByName();
    //       e.target.innerText += "▼";
    //     }
    //     break;
    //   case "USERNAME":
    //     if (e.target.innerHTML.includes("▼")) {
    //       descSortByUsername();
    //       e.target.innerText += "▲";
    //     } else {
    //       sortByUsername();
    //       e.target.innerText += "▼";
    //     }
    //     break;
    //   case "EMAIL":
    //     if (e.target.innerHTML.includes("▼")) {
    //       descSortByEmail();
    //       e.target.innerText += "▲";
    //     } else {
    //       sortByEmail();
    //       e.target.innerText += "▼";
    //     }
    //     break;
    //   case "ADDRESS":
    //     if (e.target.innerHTML.includes("▼")) {
    //       descSortByAddress();
    //       e.target.innerText += "▲";
    //     } else {
    //       sortByAddress();
    //       e.target.innerText += "▼";
    //     }
    //     break;
    // }
  });
});

function sortByName() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                          <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function sortByUsername() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.username > b.username) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                              <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function sortByEmail() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.email > b.email) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                          <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function sortByAddress() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.address.street > b.address.street) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                          <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function descSortByName() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                          <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function descSortByUsername() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.username < b.username) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                              <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function descSortByEmail() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.email < b.email) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                          <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

function descSortByAddress() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        if (a.address.street < b.address.street) {
          return 1;
        } else {
          return -1;
        }
      });
      tableBody.innerHTML = "";
      data.forEach((elem) => {
        tableBody.innerHTML += `
                <div class="table_row"> 
                  <div class="table_data">${elem.name}</div>
                          <div class="table_data">${elem.username}</div>
                          <div class="table_data">${elem.email}</div>
                          <div class="table_data address">${elem.address.street}, ${elem.address.suite}</div></div>`;
      });
    });
}

//express a number a sum of four squares

// function sumOfFourSquares(n) {
//   let arr = [];
//   for (let i = 0; i * i <= n; i++) {
//     for (let j = 0; j * j <= n; j++) {
//       for (let k = 0; k * k <= n; k++) {
//         for (let l = 0; l * l <= n; l++) {
//           if (i * i + j * j + k * k + l * l == n) {
//             arr.push([i, j, k, l]);
//           }
//         }
//       }
//     }
//   }
//   return arr;
// }

// console.log(sumOfFourSquares(10140));

// const customConvertMilliSecondsToDate = (milliseconds) => {
//   const seconds = Math.floor(milliseconds / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const months = Math.floor(days / 30);
//   const years = Math.floor(months / 12);

//   console.log(
//     `years: ${years}, months: ${months % 12}, days: ${days % 30}, hours: ${
//       hours % 24
//     }, minutes: ${minutes % 60}, seconds: ${seconds % 60}`
//   );
//   // setInterval(() => {
//   //   customConvertMilliSecondsToDate(milliseconds - 1000);
//   // }, 1000);
// };

// customConvertMilliSecondsToDate(123456787654321);