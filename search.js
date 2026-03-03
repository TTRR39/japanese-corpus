const resultsDiv = document.getElementById("results");

// 获取所有不重复日期
const dates = [...new Set(corpus.map(entry => entry.date))];

// 按时间倒序
dates.sort().reverse();

dates.forEach(date => {
  const link = document.createElement("a");
  link.href = `day.html?date=${date}`;
  link.textContent = date;
  link.style.display = "block";
  link.style.margin = "10px 0";
  resultsDiv.appendChild(link);
});
