const listofExstra = [];
async function getUsers() {
  const users = await fetch(`https://apple-seeds.herokuapp.com/api/users/`);
  const response = await users.json();

  for (let i = 0; i < response.length; i++) {
    const idd = response[i].id;
    const extra = await fetch( `http://apple-seeds.herokuapp.com/api/users/` + idd);
    const responseExtra = await extra.json();

    response[i].age = responseExtra.age;
    response[i].city = responseExtra.city;
    response[i].gender = responseExtra.gender;
    response[i].hobby = responseExtra.hobby;

    listofExstra.push(response[i]);
  }
  display();
}
getUsers();

  // console.log( listofExstra);

function display() {
    // const thead = document.querySelector("#thead");
    // thead.innerHTML = "";
    // thead.classList.add("thead");
    // const row = document.createElement("div");
    //  const head = listofExstra;
    //   Object.keys(head).forEach( function (p) {
    //       const th = document.createElement("th");
    //       th.textContent = p;
    //       row.appendChild(th);
    //       thead.appendChild(row);
    //     });

  const table = document.querySelector("#table");
  table.innerHTML = "";
  for (let i = 0; i < listofExstra.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    table.appendChild(row);
    for (const p in listofExstra[i]) {
      const cel = document.createElement("div");
      cel.textContent = listofExstra[i][p];
      cel.classList.add("cel");
      row.appendChild(cel);
    }
    const DeletBtn = document.createElement("button");
    DeletBtn.textContent = "DELETE";
    DeletBtn.addEventListener("click", ()=>{
    listofExstra.splice(0,1);
    display();
    });
      DeletBtn.classList.add("DeletBtn");
      row.appendChild(DeletBtn);
      //  row.setAttribute("data-id", listofExstra.id);


    const EditBtn = document.createElement("button");
    EditBtn.textContent = "EDIT";
    EditBtn.addEventListener("click", ()=>{
     cel.contentEditable = true;
     cel.textContent = listofExstra[i][p];
    });
    EditBtn.classList.add("EditBtn");
    row.appendChild(EditBtn);
    row.setAttribute("data-id", listofExstra.id);
  }
}



//     DeletBtn.addEventListener('click', (event)=>{
//     if(event.target.tagName === 'BUTTON'){
//     const DeletBtn =event.target;
//     const cel = DeletBtn.parentNode;
//     const row = cel.parentNode;
//     if(DeletBtn.textContent === 'DELETE'){
//       row.removeChild(cel);
//     }
//     display();
//   }
// });
