function addinputValue(addinput) {
  const manager = document.getElementById(addinput);
  const getmanagerString = manager.value;
  const getmanager = parseFloat(getmanagerString);
  return getmanager;
}
function addtextelement(text) {
  const playerexpense = document.getElementById(text);
  const getplayerString = playerexpense.innerText;
  const getplayer = parseFloat(getplayerString);
  return getplayer;
}

document
  .getElementById("total-calculate-btn")
  .addEventListener("click", function () {
    // player-expense
    const getplayer = addtextelement("total");
    // player-expense

    // manager
    const getmange = addinputValue("manager-input");
    // manager

    // coach
    const getcoach = addinputValue("coach-input");
    // coach

    // totals
    const total = document.getElementById("all-expense");
    const gettotalString = total.innerText;
    const gettotal = parseFloat(gettotalString);
    // total
    // calculate-total
    const calculatetotal11 = getmange + getcoach + getplayer;
    total.innerText = calculatetotal11;
    // calculate-total
  });
