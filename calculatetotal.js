function addinputValue(addinput) {
  const manager = document.getElementById(addinput);
  const getmanagerString = manager.value;
  const getmanager = parseFloat(getmanagerString);
  return getmanager;
}

document
  .getElementById("total-calculate-btn")
  .addEventListener("click", function () {
    // player-expense
    const playerexpense = document.getElementById("total");
    const getplayerString = playerexpense.innerText;
    const getplayer = parseFloat(getplayerString);

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
