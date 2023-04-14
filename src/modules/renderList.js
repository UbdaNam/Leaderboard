const renderList = (scores) => {
  const tableEl = document.querySelector('table');
  tableEl.innerHTML = '';
  scores.forEach((scoreData) => {
    const trEl = document.createElement('tr');
    const tdEl = document.createElement('td');
    tdEl.textContent = `${scoreData.user}: ${scoreData.score}`;
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
  });
};

export default renderList;