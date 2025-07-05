let selectedCategory = "";
let selectedDesign = null;
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const designsContainer = document.getElementById('designsContainer');
const backButton = document.getElementById('backButton');

// 1. 카테고리 선택
document.getElementById('glassesButton').addEventListener('click', () => {
  selectedCategory = 'glasses';
  showDesignSelection();
});

document.getElementById('sunglassesButton').addEventListener('click', () => {
  selectedCategory = 'sunglasses';
  showDesignSelection();
});

// 2. 디자인 선택 화면 표시
function showDesignSelection() {
  document.getElementById('categorySelection').style.display = 'none';
  document.getElementById('designSelection').style.display = 'block';
  loadDesigns();
}

// 3. 선택된 카테고리에 맞는 디자인 로드
function loadDesigns() {
  designsContainer.innerHTML = ""; // 기존 디자인 제거

  const designList = selectedCategory === 'glasses' ? ['안경 디자인 1', '안경 디자인 2'] : ['썬글라스 디자인 1', '썬글라스 디자인 2'];

  designList.forEach((design, index) => {
    const button = document.createElement('button');
    button.innerHTML = design;
    button.addEventListener('click', () => selectDesign(index));
    designsContainer.appendChild(button);
  });
}

// 4. 디자인 선택
function selectDesign(index) {
  selectedDesign = selectedCategory === 'glasses' ? `glasses_design_${index + 1}.png` : `sunglasses_design_${index + 1}.png`;
  document.getElementById('designSelection').style.display = 'none';
  setupFaceApi();
}

// 5. 돌아가기 버튼
backButton.addEventListener('click', () => {
  document.getElementById('designSelection').style.display = 'none';
  document.getElementById('categorySelection').style.display = 'block';
  selectedDesign = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});