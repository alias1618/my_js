//new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
//year, month, hours
var date = new Date();

//年
var years = date.getFullYear();
//月份
var months = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
var dateMonth = months[date.getMonth()];

//日
var days = ["1日","2日","3日","4日","5日","6日","7日","8日","9日","10日","11日","12日","13日",
            "14日","15日","16日","17日","18日","19日","20日","21日","22日","23日","24日","25日",
            "26日","27日","28日","29日","30日","31日",]
var dateDay = days[date.getDay()];
            
console.log(date);
console.log(dateMonth);
console.log(dateDay);

console.log(`${years} ${dateMonth} ${dateDay}`);

document.getElementById("demo").innerHTML = months[d.getMonth()];