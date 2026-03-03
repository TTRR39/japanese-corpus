const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

function render(data) {
  resultsDiv.innerHTML = "";
  data.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <strong>${entry.word}</strong>（${entry.reading}）<br>
      意思：${entry.meaning}<br>
      例句：${entry.example}
    `;
    resultsDiv.appendChild(div);
  });
}

searchInput.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = corpus.filter(entry =>
    entry.word.includes(keyword) ||
    entry.reading.includes(keyword) ||
    entry.meaning.includes(keyword) ||
    entry.example.includes(keyword)
  );
  render(filtered);
});

// 初始显示全部
render(corpus);
