function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var todayDate = new Date();

    var ageYears = todayDate.getFullYear() - dob.getFullYear();
    var ageMonths = todayDate.getMonth() - dob.getMonth();
    var ageDays = todayDate.getDate() - dob.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        var lastMonthDate = new Date(todayDate.getFullYear(), todayDate.getMonth() - 1, 0).getDate();
        ageDays += lastMonthDate;
        ageMonths--;
    }

    var ageContainer = document.getElementById('result');

    if (ageYears < 0) {
        ageContainer.style.display = 'block';
        document.getElementById('years').innerText = '';
        document.getElementById('months').innerText = '';
        document.getElementById('days').innerText = "You are not born yet!";
    } else {
        ageContainer.style.display = 'flex';
        document.getElementById('years').innerText = ageYears + ' year(s)';
        document.getElementById('months').innerText = ageMonths + ' month(s)';
        document.getElementById('days').innerText = ageDays + ' day(s)';
    }
}
