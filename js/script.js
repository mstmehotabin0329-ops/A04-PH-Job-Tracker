let interviewList = [];
let rejectedList = [];
let currentType = 'all';
let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');
let counting = document.getElementById('counting');



const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


let allCardSection = document.getElementById('all-cards');
let mainContainer = document.querySelector('main');
let filterSection = document.getElementById('filter-section');

// 1--- : calculate  count
function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();



// Toggole System 

function toggleStyle(id) {
    allFilterBtn.classList.remove('btn-info', 'text-white');
    interviewFilterBtn.classList.remove('btn-info', 'text-white');
    rejectedFilterBtn.classList.remove('btn-info', 'text-white');

    allFilterBtn.classList.add('btn', 'text-[#444a52]');
    // interviewFilterBtn.classList.add('btn', 'text-[#444a52]');
    // rejectedFilterBtn.classList.add('btn', 'text-[#444a52]');


    let selected = document.getElementById(id);
    currentType = id;



    selected.classList.add('btn-info', 'text-white');

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        counting.innerText = interviewList.length;
        renderInterviewing();
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        counting.innerText = '8';
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        counting.innerText = rejectedList.length;
        renderRejected();
    }


}


mainContainer.addEventListener('click', function (event) {
    
    if (event.target.classList.contains('inverviw-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        parentNode.querySelector('.type').innerText = 'Interview';


        const cardInfo = {
            companyName,
            position,
            salary,
            type: 'Interview',
            notes
        }
        const exist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!exist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);


        if (currentType == 'rejected-filter-btn') {
            renderRejected();

        }


        calculateCount();

    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        parentNode.querySelector('.type').innerText = 'Rejected';

        const cardInfo = {
            companyName,
            position,
            salary,
            type: 'Rejected',
            notes
        }
        const exist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!exist) {
            rejectedList.push(cardInfo)
        }


        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);


        if (currentType == 'interview-filter-btn') {
            renderInterviewing();
        }


        calculateCount();

    }


})



function renderInterviewing() {
    filterSection.innerHTML = '';
    if (interviewList.length == 0) {
        document.getElementById('no-data-interview').classList.remove('hidden');
    } else {
        document.getElementById('no-data-interview').classList.add('hidden');
    }

    for (let interview of interviewList) {
        // console.log(interview)
        let div = document.createElement('div');
        div.className = 'bg-base-100 shadow rounded-xl p-6 flex justify-between mb-5 mt-8'
        div.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-2">
                <p class="companyName text-2xl font-semibold text-[#002C5C]">${interview.companyName}</p>
                <p class="position text-[#64748B]">${interview.position}</p>
            </div>
            <p class="salary text-[#64748B]">${interview.salary}</p>
            <div class="space-y-2">
                <p class="type bg-gray-200 inline-block py-2 px-4 font-semibold rounded-md">${interview.type}</p>
                <p class="notes text-[#64748B]">${interview.notes}</p>
            </div>
            <div class="flex gap-3">
                <button class="inverviw-btn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div>
        <div class="mt-5 mr-5">
            <span class="text-[#64748B] border border-gray-300 rounded-full p-2"><i
                    class="fa-regular fa-trash-can"></i></span>
        </div>
        `
        filterSection.appendChild(div);


    }

}
function renderRejected() {
    filterSection.innerHTML = '';

    if (rejectedList.length == 0) {
        document.getElementById('no-data-interview').classList.remove('hidden');
    } else {
        document.getElementById('no-data-interview').classList.add('hidden');
    }

    for (let reject of rejectedList) {

        let div = document.createElement('div');
        div.className = 'bg-base-100 shadow rounded-xl p-6 flex justify-between mb-5 mt-8'
        div.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-2">
                <p class="companyName text-2xl font-semibold text-[#002C5C]">${reject.companyName}</p>
                <p class="position text-[#64748B]">${reject.position}</p>
            </div>
            <p class="salary text-[#64748B]">${reject.salary}</p>
            <div class="space-y-2">
                <p class="type bg-gray-200 inline-block py-2 px-4 font-semibold rounded-md">${reject.type}</p>
                <p class="notes text-[#64748B]">${reject.notes}</p>
            </div>
            <div class="flex gap-3">
                <button class="inverviw-btn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div>
        <div class="mt-5 mr-5">
            <span class="deleted text-[#64748B] border border-gray-300 rounded-full p-2"><i
                    class="fa-regular fa-trash-can"></i></span>
        </div>
        `
        filterSection.appendChild(div);
    }

}

function deleteItem(id){
    let deleteElement = document.getElementById('one');
    deleteItem.classList.add('hidden');
}
deleteItem('one');