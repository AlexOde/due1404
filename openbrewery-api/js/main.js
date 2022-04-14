

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);


document.querySelector('#search').addEventListener('click', searchBeer)

function searchBeer() {
    let brewerySearch = document.querySelector('input')

    const url = "https://api.openbrewerydb.org/breweries/search?query="
    const breweryName = brewerySearch.value
    fetch(url+breweryName)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)

        let k = '<tbody>'
        for (let i = 0; i < data.length; i++) {
            k += '<tr>'
            k += '<td>' + data[i].name + '</td>'
            k += '<td>' + data[i].brewery_type + '</td>'
            k += '<td>' + data[i].country + '</td>'
            k += '<td>' + data[i].state + '</td>'
            k += '<td><a href="' + data[i].website_url + '">' + data[i].website_url + '</a>' + '</td>'
        }
       k += '</tbody>'
        document.getElementById('tbody').innerHTML = k
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

let getCellValue = function(tr, idx){ return tr.children[idx].innerText || tr.children[idx].textContent; }

let comparer = function(idx, asc) { return function(a, b) { return function(v1, v2) {
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
    }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
}};

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
      .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
      .forEach(tr => tbody.appendChild(tr) )
})))