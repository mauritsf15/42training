const cases = document.querySelector('.cases');
const container = document.querySelector('.container');

fetch('casedata.json')
.then(myData => myData.json())
.then(jsonData => useData(jsonData));

function useData(jsonData) {
    for (let i = jsonData.length - 1; i >= 0; i--) {
        cases.innerHTML += 
        `
        <div class="card case">
            <img src="${jsonData[i].image}" class="card-img-top" alt="${jsonData[i].name}">
            <div class="card-body">
                <h4 class="card-title">${jsonData[i].name}</h4>
                <h6 class="text-muted"><i class="fa-solid fa-clock"></i> ${jsonData[i].date}<br><i class="fa-solid fa-location-dot"></i> ${jsonData[i].location}</h6>
                <p class="card-text">${jsonData[i].short}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${jsonData[i].id}">
                    Read more
                </button>
            </div>
        </div>
        `;
    }
    for (let i = jsonData.length - 1; i >= 0; i--) {
        container.innerHTML +=
        `
        <div class="modal fade" id="modal-${jsonData[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${jsonData[i].name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img class="img-fluid" src="${jsonData[i].image}" alt="case image">
                        <h6 class="text-muted"><i class="fa-solid fa-clock"></i> ${jsonData[i].date}<br><i class="fa-solid fa-location-dot"></i> ${jsonData[i].location}</h6>
                        <p class="modal-text">${jsonData[i].description}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

