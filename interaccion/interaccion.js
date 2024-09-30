const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
  element.addEventListener('click', () => {
    const elementInfo = getElementInfo(element.id);
    displayElementInfo(elementInfo);
  });
});

function getElementInfo(elementId) {
  // Return the information for the element with the given ID
  // This can be a JSON object or a string containing the information
  // For example:
  return {
    name: 'Hydrogen',
    symbol: 'H',
    atomicNumber: 1,
    atomicMass: 1.00794,
  };
}

function displayElementInfo(elementInfo) {
  // Display the element information in a modal window or a tooltip
  // For example:
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <h2>${elementInfo.name}</h2>
    <p>Symbol: ${elementInfo.symbol}</p>
    <p>Atomic Number: ${elementInfo.atomicNumber}</p>
    <p>Atomic Mass: ${elementInfo.atomicMass}</p>
  `;
  modal.style.display = 'block';
}