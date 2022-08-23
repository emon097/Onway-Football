const array = [];
function desplay(arrays) {
  console.log(arrays);
  const playerstable = document.getElementById("add-player");
  playerstable.innerHTML = "";
  for (let i = 0; i < arrays.length; i++) {
    // console.log(array[i].playersname);

    if (array.length > 5) {
      array.length = 5;
      alert("stop");
      console.log(array.length, "You cannot select more than 5");
    }
    const playersname = array[i].playersname;
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${playersname}</td>
    `;
    playerstable.appendChild(tr);
  }
}

function players(element) {
  const playersname = element.parentNode.parentNode.children[0].innerText;
  //   console.log(playersname);

  const object = {
    playersname: playersname,
  };

  array.push(object);

  desplay(array);
}

// total-expense-calculation
document.getElementById("calculate-btn").addEventListener("click", function () {
  let arrayss = array.length;
  console.log(arrayss);
  const inputid = document.getElementById("per-player-input");
  const inputfieldString = inputid.value;
  const inputfield = parseFloat(inputfieldString);

  const totalplayers = document.getElementById("total");
  // const perplayersString = totalplayers.innerText;
  // const perplayers = parseFloat(perplayersString);

  const totalplayer = inputfield * arrayss;
  totalplayers.innerText = totalplayer;
});
// total-expense-calculation
