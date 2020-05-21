// https://www.codewars.com/kata/56eb16655250549e4b0013f4

function mostFrequentDays(year){
    const d = new Date(year, 0, 1);
    const days = {
      "Monday": 0,
      "Tuesday": 0,
      "Wednesday": 0,
      "Thursday": 0,
      "Friday": 0,
      "Saturday": 0,
      "Sunday": 0
    }
    
    while (d.getFullYear() == year) {
      switch(d.getDay()) {
        case 0:
          days["Sunday"]++;
          break;
        case 1:
          days["Monday"]++;
          break;
        case 2:
          days["Tuesday"]++;
          break;
        case 3:
          days["Wednesday"]++;
          break;
        case 4:
          days["Thursday"]++;
          break;
        case 5:
          days["Friday"]++;
          break;
        case 6:
          days["Saturday"]++;
          break;
      }
      d.setDate(d.getDate() + 1)
    }
    const dayNames = Object.keys(days)
    const mostDays = Math.max(...dayNames.map(key => days[key]))
    let mostFrequentDayList = []
    for (let i=0; i < dayNames.length; i++) {
      if (days[dayNames[i]] == mostDays) mostFrequentDayList.push(dayNames[i])
    }
    return mostFrequentDayList
}

// May 2020