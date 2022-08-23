document
  .getElementById("total-calculate-btn")
  .addEventListener("click", function () {
    // player-expense
    const playerexpense = document.getElementById("total");
    const getplayerString = playerexpense.innerText;
    const getplayer = parseFloat(getplayerString);

    // player-expense

    // manager
    const manager = document.getElementById("manager-input");
    const getmanagerString = manager.value;
    const getmanager = parseFloat(getmanagerString);
    // manager

    // coach
    const coach = document.getElementById("coach-input");
    const getcoachString = coach.value;
    const getcoach = parseFloat(getcoachString);
    // coach
    // totals
    const total = document.getElementById("all-expense");
    const gettotalString = total.innerText;
    const gettotal = parseFloat(gettotalString);
    // total
    // calculate-total
    const calculatetotal11 = getmanager + getcoach + getplayer;
    total.innerText = calculatetotal11;
    // calculate-total
  });
