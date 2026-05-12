const STORAGE_KEY = "fat-loss-tracker-v1";

const foodDb = [
  { keys: ["鸡胸", "鸡胸肉"], unit: "g", calories: 1.65, protein: 0.31, carbs: 0, fat: 0.036 },
  { keys: ["牛肉", "瘦牛肉"], unit: "g", calories: 2.0, protein: 0.26, carbs: 0, fat: 0.1 },
  { keys: ["猪肉", "瘦猪肉"], unit: "g", calories: 1.43, protein: 0.21, carbs: 0, fat: 0.06 },
  { keys: ["三文鱼", "鲑鱼"], unit: "g", calories: 2.08, protein: 0.2, carbs: 0, fat: 0.13 },
  { keys: ["虾", "虾仁"], unit: "g", calories: 0.99, protein: 0.24, carbs: 0.02, fat: 0.003 },
  { keys: ["鸡蛋", "蛋"], unit: "个", grams: 50, calories: 72, protein: 6.3, carbs: 0.4, fat: 4.8 },
  { keys: ["米饭", "白米饭"], unit: "g", calories: 1.16, protein: 0.026, carbs: 0.26, fat: 0.003 },
  { keys: ["糙米饭", "糙米"], unit: "g", calories: 1.11, protein: 0.026, carbs: 0.23, fat: 0.009 },
  { keys: ["面条"], unit: "g", calories: 1.38, protein: 0.045, carbs: 0.25, fat: 0.021 },
  { keys: ["面包", "欧包"], unit: "g", calories: 2.65, protein: 0.09, carbs: 0.49, fat: 0.032 },
  { keys: ["馒头"], unit: "g", calories: 2.23, protein: 0.07, carbs: 0.47, fat: 0.011 },
  { keys: ["燕麦", "燕麦片"], unit: "g", calories: 3.79, protein: 0.13, carbs: 0.68, fat: 0.065 },
  { keys: ["红薯", "地瓜"], unit: "g", calories: 0.86, protein: 0.016, carbs: 0.2, fat: 0.001 },
  { keys: ["土豆", "马铃薯"], unit: "g", calories: 0.77, protein: 0.02, carbs: 0.17, fat: 0.001 },
  { keys: ["西兰花"], unit: "g", calories: 0.34, protein: 0.028, carbs: 0.066, fat: 0.004 },
  { keys: ["青椒", "彩椒"], unit: "g", calories: 0.22, protein: 0.01, carbs: 0.054, fat: 0.002 },
  { keys: ["生菜"], unit: "g", calories: 0.15, protein: 0.014, carbs: 0.029, fat: 0.002 },
  { keys: ["番茄", "西红柿"], unit: "g", calories: 0.18, protein: 0.009, carbs: 0.039, fat: 0.002 },
  { keys: ["西瓜"], unit: "g", calories: 0.3, protein: 0.006, carbs: 0.076, fat: 0.002 },
  { keys: ["芒果"], unit: "g", calories: 0.6, protein: 0.008, carbs: 0.15, fat: 0.004 },
  { keys: ["香蕉"], unit: "根", grams: 118, calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { keys: ["苹果"], unit: "个", grams: 180, calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  { keys: ["牛奶"], unit: "ml", calories: 0.62, protein: 0.033, carbs: 0.05, fat: 0.034 },
  { keys: ["酸奶"], unit: "g", calories: 0.75, protein: 0.04, carbs: 0.085, fat: 0.03 },
  { keys: ["豆腐"], unit: "g", calories: 0.76, protein: 0.08, carbs: 0.019, fat: 0.048 },
  { keys: ["素鸡"], unit: "g", calories: 1.94, protein: 0.17, carbs: 0.044, fat: 0.125 },
  { keys: ["豆浆"], unit: "ml", calories: 0.31, protein: 0.03, carbs: 0.018, fat: 0.016 },
  { keys: ["蛋白粉"], unit: "勺", grams: 30, calories: 120, protein: 24, carbs: 3, fat: 2 },
  { keys: ["花生酱"], unit: "g", calories: 5.88, protein: 0.25, carbs: 0.2, fat: 0.5 },
  { keys: ["黄油", "牛油", "奶油黄油"], unit: "g", calories: 7.17, protein: 0.009, carbs: 0.001, fat: 0.811 },
  { keys: ["橄榄油", "油"], unit: "g", calories: 8.84, protein: 0, carbs: 0, fat: 1 },
  { keys: ["芝士", "奶酪", "干酪"], unit: "g", calories: 3.53, protein: 0.25, carbs: 0.021, fat: 0.27 },
];

const USDA_API_KEY = "DEMO_KEY";
const USDA_SEARCH_URL = "https://api.nal.usda.gov/fdc/v1/foods/search";
const naturalFoodQueries = {
  西瓜: "watermelon raw",
  苹果: "apple raw",
  香蕉: "banana raw",
  橙子: "orange raw",
  葡萄: "grapes raw",
  草莓: "strawberries raw",
  蓝莓: "blueberries raw",
  芒果: "mango",
  菠萝: "pineapple raw",
  哈密瓜: "cantaloupe raw",
  甜瓜: "melon raw",
  木瓜: "papaya raw",
  柚子: "grapefruit raw",
  柠檬: "lemon raw",
  牛油果: "avocado raw",
  火龙果: "pitaya raw",
  石榴: "pomegranate raw",
  樱桃: "cherries raw",
  李子: "plums raw",
  杏: "apricots raw",
  荔枝: "litchis raw",
  龙眼: "longans raw",
  梨: "pear raw",
  桃: "peach raw",
  猕猴桃: "kiwifruit raw",
  奇异果: "kiwifruit raw",
  土豆: "potato raw",
  马铃薯: "potato raw",
  红薯: "sweet potato raw",
  地瓜: "sweet potato raw",
  玉米: "corn raw",
  南瓜: "pumpkin raw",
  茄子: "eggplant raw",
  番茄: "tomato raw",
  西红柿: "tomato raw",
  黄瓜: "cucumber raw",
  青椒: "green pepper raw",
  彩椒: "sweet pepper raw",
  洋葱: "onion raw",
  胡萝卜: "carrot raw",
  白萝卜: "daikon raw",
  蘑菇: "mushrooms raw",
  香菇: "shiitake mushrooms raw",
  卷心菜: "cabbage raw",
  包菜: "cabbage raw",
  白菜: "chinese cabbage raw",
  花菜: "cauliflower raw",
  西兰花: "broccoli raw",
  生菜: "lettuce raw",
  菠菜: "spinach raw",
  芹菜: "celery raw",
  芦笋: "asparagus raw",
  西葫芦: "zucchini raw",
  牛肉: "beef raw",
  鸡胸肉: "chicken breast raw",
  鸡胸: "chicken breast raw",
  鸡蛋: "egg whole raw",
  鸡腿: "chicken leg raw",
  猪肉: "pork raw",
  虾: "shrimp raw",
  三文鱼: "salmon raw",
  鳕鱼: "cod raw",
  牛奶: "milk whole",
  豆腐: "tofu firm",
  燕麦: "oats raw",
  米饭: "rice cooked",
  小米: "millet raw",
  黑米: "black rice raw",
  糙米: "brown rice raw",
  藜麦: "quinoa raw",
};

const state = loadState();

const el = {
  todayLabel: document.querySelector("#todayLabel"),
  summaryText: document.querySelector("#summaryText"),
  dateInput: document.querySelector("#dateInput"),
  weightInput: document.querySelector("#weightInput"),
  targetWeightInput: document.querySelector("#targetWeightInput"),
  weightForm: document.querySelector("#weightForm"),
  weightGap: document.querySelector("#weightGap"),
  weightTrend: document.querySelector("#weightTrend"),
  weightDays: document.querySelector("#weightDays"),
  chart: document.querySelector("#weightChart"),
  chartEmpty: document.querySelector("#chartEmpty"),
  clearDataButton: document.querySelector("#clearDataButton"),
  bodyForm: document.querySelector("#bodyForm"),
  chestInput: document.querySelector("#chestInput"),
  waistInput: document.querySelector("#waistInput"),
  hipInput: document.querySelector("#hipInput"),
  thighInput: document.querySelector("#thighInput"),
  calfInput: document.querySelector("#calfInput"),
  armInput: document.querySelector("#armInput"),
  bodyStatus: document.querySelector("#bodyStatus"),
  waistHipRatio: document.querySelector("#waistHipRatio"),
  waistChange: document.querySelector("#waistChange"),
  bodyDays: document.querySelector("#bodyDays"),
  bodyLegend: document.querySelector("#bodyLegend"),
  measurementsChart: document.querySelector("#measurementsChart"),
  measurementsChartEmpty: document.querySelector("#measurementsChartEmpty"),
  targetForm: document.querySelector("#targetForm"),
  targetCalories: document.querySelector("#targetCalories"),
  targetProtein: document.querySelector("#targetProtein"),
  targetCarbs: document.querySelector("#targetCarbs"),
  targetFat: document.querySelector("#targetFat"),
  dietForm: document.querySelector("#dietForm"),
  actualCalories: document.querySelector("#actualCalories"),
  actualProtein: document.querySelector("#actualProtein"),
  actualCarbs: document.querySelector("#actualCarbs"),
  actualFat: document.querySelector("#actualFat"),
  nutritionGrid: document.querySelector("#nutritionGrid"),
  dietStatus: document.querySelector("#dietStatus"),
  archiveList: document.querySelector("#archiveList"),
  archiveCount: document.querySelector("#archiveCount"),
  exportJsonButton: document.querySelector("#exportJsonButton"),
  importJsonInput: document.querySelector("#importJsonInput"),
  exportCsvButton: document.querySelector("#exportCsvButton"),
  achievementList: document.querySelector("#achievementList"),
  achievementCount: document.querySelector("#achievementCount"),
};

init();

function init() {
  const today = new Date().toISOString().slice(0, 10);
  el.dateInput.value = today;
  el.todayLabel.textContent = formatDate(today);

  syncTargetsToInputs();
  loadMeasurementsForDate(today);
  loadDietForDate(today);

  el.weightForm.addEventListener("submit", saveWeight);
  el.dateInput.addEventListener("change", () => {
    el.todayLabel.textContent = formatDate(el.dateInput.value);
    loadWeightForDate(el.dateInput.value);
    loadMeasurementsForDate(el.dateInput.value);
    loadDietForDate(el.dateInput.value);
    renderNutrition(getTodayDiet());
  });
  el.bodyForm.addEventListener("submit", saveMeasurements);
  el.targetForm.addEventListener("input", saveTargets);
  el.dietForm.addEventListener("submit", saveDiet);
  el.archiveList.addEventListener("click", handleArchiveClick);
  el.exportJsonButton.addEventListener("click", exportJsonBackup);
  el.importJsonInput.addEventListener("change", importJsonBackup);
  el.exportCsvButton.addEventListener("click", exportCsvBackup);
  el.clearDataButton.addEventListener("click", clearData);

  render();
}

function loadState() {
  const fallback = {
    targetWeight: 65,
    targets: { calories: 1800, protein: 130, carbs: 170, fat: 55 },
    weights: [],
    measurements: [],
    diets: {},
    customFoods: [],
    onlineFoods: {},
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...fallback,
      ...saved,
      targets: { ...fallback.targets, ...(saved.targets || {}) },
      measurements: saved.measurements || [],
      diets: saved.diets || {},
      customFoods: saved.customFoods || [],
      onlineFoods: saved.onlineFoods || {},
    };
  } catch {
    return fallback;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function syncTargetsToInputs() {
  el.targetWeightInput.value = state.targetWeight;
  el.targetCalories.value = state.targets.calories;
  el.targetProtein.value = state.targets.protein;
  el.targetCarbs.value = state.targets.carbs;
  el.targetFat.value = state.targets.fat;
}

function saveWeight(event) {
  event.preventDefault();
  const date = el.dateInput.value;
  const weight = Number(el.weightInput.value);
  const target = Number(el.targetWeightInput.value);
  if (!date || !weight || !target) return;

  state.targetWeight = target;
  const existing = state.weights.find((item) => item.date === date);
  if (existing) existing.weight = weight;
  else state.weights.push({ date, weight });
  state.weights.sort((a, b) => a.date.localeCompare(b.date));
  persist();
  render();
}

function saveMeasurements(event) {
  event.preventDefault();
  const date = el.dateInput.value;
  if (!date) return;

  const entry = {
    date,
    chest: Number(el.chestInput.value) || 0,
    waist: Number(el.waistInput.value) || 0,
    hip: Number(el.hipInput.value) || 0,
    thigh: Number(el.thighInput.value) || 0,
    calf: Number(el.calfInput.value) || 0,
    arm: Number(el.armInput.value) || 0,
  };
  const hasValue = ["chest", "waist", "hip", "thigh", "calf", "arm"].some((key) => entry[key] > 0);
  if (!hasValue) return;

  const existing = state.measurements.find((item) => item.date === date);
  if (existing) Object.assign(existing, entry);
  else state.measurements.push(entry);
  state.measurements.sort((a, b) => a.date.localeCompare(b.date));
  persist();
  renderMeasurements();
}

function saveTargets() {
  state.targets = {
    calories: Number(el.targetCalories.value) || 0,
    protein: Number(el.targetProtein.value) || 0,
    carbs: Number(el.targetCarbs.value) || 0,
    fat: Number(el.targetFat.value) || 0,
  };
  persist();
  renderNutrition(getTodayDiet());
  renderAchievements();
}

async function saveDiet(event) {
  event.preventDefault();
  saveDietForCurrentDate();
}

function saveLibraryFood(event) {
  event.preventDefault();
  const name = el.libraryName.value.trim();
  const protein = Number(el.libraryProtein.value);
  const fat = Number(el.libraryFat.value);
  const carbs = Number(el.libraryCarbs.value);
  if (!name || [protein, fat, carbs].some((value) => Number.isNaN(value))) {
    showLibraryStatus("请把食物名称和每 100g 的 P / F / C 都填完整。", true);
    return;
  }

  const existing = state.customFoods.find((food) => food.name === name);
  const food = { id: existing?.id || makeId(), name, protein, fat, carbs };
  if (existing) Object.assign(existing, food);
  else state.customFoods.push(food);

  el.libraryForm.reset();
  persist();
  renderLibrary();
  showLibraryStatus(`已保存 ${name}，后续可以直接按克重统计。`);
}

function clearData() {
  const confirmed = window.confirm("确定清空所有本地记录吗？");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  syncTargetsToInputs();
  loadDietForDate(el.dateInput.value);
  render();
}

function render() {
  renderWeight();
  renderMeasurements();
  renderNutrition(getTodayDiet());
  renderArchive();
  renderAchievements();
}

function renderWeight() {
  const latest = state.weights.at(-1);
  const first = state.weights[0];
  el.weightDays.textContent = `${state.weights.length} 天`;
  el.targetWeightInput.value = state.targetWeight;

  if (latest) {
    el.weightInput.value = latest.weight;
    const gap = latest.weight - state.targetWeight;
    el.weightGap.textContent = `${gap > 0 ? "还差 " : "已低于 "}${Math.abs(gap).toFixed(1)} kg`;
    el.summaryText.textContent = `${latest.weight.toFixed(1)} kg`;
  } else {
    el.weightGap.textContent = "--";
    el.summaryText.textContent = "准备记录";
  }

  if (first && latest && first !== latest) {
    const change = latest.weight - first.weight;
    el.weightTrend.textContent = `${change > 0 ? "+" : ""}${change.toFixed(1)} kg`;
  } else {
    el.weightTrend.textContent = "--";
  }

  drawChart();
}

function loadWeightForDate(date) {
  const entry = state.weights.find((item) => item.date === date);
  if (entry) el.weightInput.value = entry.weight;
}

function loadMeasurementsForDate(date) {
  const entry = state.measurements.find((item) => item.date === date);
  const fields = [
    ["chestInput", "chest"],
    ["waistInput", "waist"],
    ["hipInput", "hip"],
    ["thighInput", "thigh"],
    ["calfInput", "calf"],
    ["armInput", "arm"],
  ];
  fields.forEach(([inputKey, dataKey]) => {
    el[inputKey].value = entry?.[dataKey] || "";
  });
}

function renderMeasurements() {
  const latest = state.measurements.at(-1);
  const first = state.measurements[0];
  const selectedDate = el.dateInput.value;
  const displayed = latest;
  loadMeasurementsForDate(selectedDate);
  el.bodyDays.textContent = `${state.measurements.length} 次`;

  if (!latest) {
    el.bodyStatus.textContent = "未记录";
    el.waistHipRatio.textContent = "--";
    el.waistChange.textContent = "--";
    renderBodyLegend();
    drawMeasurementsChart();
    return;
  }

  const ratio = displayed.waist && displayed.hip ? displayed.waist / displayed.hip : 0;
  el.bodyStatus.textContent = `${state.measurements.length} 次记录`;
  el.waistHipRatio.textContent = ratio ? ratio.toFixed(2) : "--";
  el.waistChange.textContent =
    first && first !== displayed && displayed.waist && first.waist ? formatSigned(displayed.waist - first.waist, " cm") : "--";
  renderBodyLegend();
  drawMeasurementsChart();
}

function renderBodyLegend() {
  const metrics = getMeasurementMetrics();
  el.bodyLegend.innerHTML = metrics
    .map(
      (metric) => `
        <span class="body-legend-item">
          <i style="background:${metric.color}"></i>
          ${metric.label}
        </span>
      `,
    )
    .join("");
}

function drawMeasurementsChart() {
  const ctx = el.measurementsChart.getContext("2d");
  const width = el.measurementsChart.width;
  const height = el.measurementsChart.height;
  ctx.clearRect(0, 0, width, height);
  el.measurementsChartEmpty.style.display = state.measurements.length < 2 ? "grid" : "none";
  if (state.measurements.length < 2) return;

  const metrics = getMeasurementMetrics();
  const values = state.measurements.flatMap((item) => metrics.map((metric) => item[metric.key]).filter(Boolean));
  const padding = { left: 62, right: 28, top: 30, bottom: 52 };
  const min = Math.floor((Math.min(...values) - 2) / 5) * 5;
  const max = Math.ceil((Math.max(...values) + 2) / 5) * 5;
  const xStep = (width - padding.left - padding.right) / (state.measurements.length - 1);
  const x = (index) => padding.left + index * xStep;
  const y = (value) => padding.top + ((max - value) / (max - min || 1)) * (height - padding.top - padding.bottom);

  ctx.strokeStyle = "#d9d7b8";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#6f604c";
  ctx.font = "20px Courier New, monospace";
  for (let i = 0; i <= 4; i += 1) {
    const value = min + ((max - min) * i) / 4;
    const yy = y(value);
    ctx.beginPath();
    ctx.moveTo(padding.left, yy);
    ctx.lineTo(width - padding.right, yy);
    ctx.stroke();
    ctx.fillText(value.toFixed(0), 12, yy + 7);
  }

  metrics.forEach((metric) => {
    const points = state.measurements
      .map((item, index) => ({ value: item[metric.key], x: x(index), y: y(item[metric.key]) }))
      .filter((point) => point.value);
    if (points.length < 2) return;

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.strokeStyle = metric.color;
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    points.forEach((point) => {
      ctx.fillStyle = "#fff8d7";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = metric.color;
      ctx.lineWidth = 3;
      ctx.stroke();
    });
  });

  state.measurements.forEach((item, index) => {
    if (index !== 0 && index !== state.measurements.length - 1 && state.measurements.length > 6) return;
    ctx.fillStyle = "#6f604c";
    ctx.font = "18px Courier New, monospace";
    ctx.fillText(item.date.slice(5), x(index) - 24, height - 18);
  });
}

function getMeasurementMetrics() {
  return [
    { label: "胸围", key: "chest", color: "#d85b59" },
    { label: "腰围", key: "waist", color: "#3d8b45" },
    { label: "臀围", key: "hip", color: "#5bb6c8" },
    { label: "大腿", key: "thigh", color: "#e0a437" },
    { label: "小腿", key: "calf", color: "#7d5bd8" },
    { label: "手臂", key: "arm", color: "#8a5a36" },
  ];
}

function drawChart() {
  const ctx = el.chart.getContext("2d");
  const width = el.chart.width;
  const height = el.chart.height;
  ctx.clearRect(0, 0, width, height);
  el.chartEmpty.style.display = state.weights.length < 2 ? "grid" : "none";
  if (state.weights.length < 2) return;

  const padding = { left: 62, right: 24, top: 28, bottom: 52 };
  const values = state.weights.map((item) => item.weight);
  const min = Math.min(...values, state.targetWeight) - 1;
  const max = Math.max(...values, state.targetWeight) + 1;
  const xStep = (width - padding.left - padding.right) / (state.weights.length - 1);
  const y = (value) => padding.top + ((max - value) / (max - min)) * (height - padding.top - padding.bottom);
  const x = (index) => padding.left + index * xStep;

  ctx.strokeStyle = "#dce4df";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#66736f";
  ctx.font = "22px Inter, sans-serif";
  for (let i = 0; i <= 4; i += 1) {
    const value = min + ((max - min) * i) / 4;
    const yy = y(value);
    ctx.beginPath();
    ctx.moveTo(padding.left, yy);
    ctx.lineTo(width - padding.right, yy);
    ctx.stroke();
    ctx.fillText(value.toFixed(1), 10, yy + 7);
  }

  const targetY = y(state.targetWeight);
  ctx.setLineDash([10, 8]);
  ctx.strokeStyle = "#c95f4a";
  ctx.beginPath();
  ctx.moveTo(padding.left, targetY);
  ctx.lineTo(width - padding.right, targetY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#c95f4a";
  ctx.fillText(`目标 ${state.targetWeight}kg`, padding.left + 8, targetY - 10);

  const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, "rgba(35, 120, 95, 0.28)");
  gradient.addColorStop(1, "rgba(35, 120, 95, 0.02)");

  ctx.beginPath();
  state.weights.forEach((item, index) => {
    const xx = x(index);
    const yy = y(item.weight);
    if (index === 0) ctx.moveTo(xx, yy);
    else ctx.lineTo(xx, yy);
  });
  ctx.lineTo(x(state.weights.length - 1), height - padding.bottom);
  ctx.lineTo(x(0), height - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  state.weights.forEach((item, index) => {
    const xx = x(index);
    const yy = y(item.weight);
    if (index === 0) ctx.moveTo(xx, yy);
    else ctx.lineTo(xx, yy);
  });
  ctx.strokeStyle = "#23785f";
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  state.weights.forEach((item, index) => {
    const xx = x(index);
    const yy = y(item.weight);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(xx, yy, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#23785f";
    ctx.lineWidth = 4;
    ctx.stroke();

    if (index === 0 || index === state.weights.length - 1 || state.weights.length <= 7) {
      ctx.fillStyle = "#18211f";
      ctx.font = "20px Inter, sans-serif";
      ctx.fillText(item.weight.toFixed(1), xx - 20, yy - 16);
      ctx.fillStyle = "#66736f";
      ctx.font = "18px Inter, sans-serif";
      ctx.fillText(item.date.slice(5), xx - 25, height - 18);
    }
  });
}

function getTodayDiet() {
  const date = el.dateInput.value || new Date().toISOString().slice(0, 10);
  return state.diets[date] || { raw: "", total: { calories: 0, protein: 0, carbs: 0, fat: 0 }, items: [], unknowns: [] };
}

function loadDietForDate(date) {
  const diet = state.diets[date];
  el.actualCalories.value = diet?.total?.calories || "";
  el.actualProtein.value = diet?.total?.protein || "";
  el.actualCarbs.value = diet?.total?.carbs || "";
  el.actualFat.value = diet?.total?.fat || "";
}

function addFoodRow(row = {}, recognizedItems = [], unknowns = []) {
  const wrapper = document.createElement("div");
  wrapper.className = "food-row";
  wrapper.innerHTML = `
    <label>
      名称
      <input class="food-name" type="text" placeholder="鸡胸肉" value="${escapeHtml(row.name || "")}" />
    </label>
    <label>
      克重
      <input class="food-amount" type="number" min="0" max="5000" step="0.1" placeholder="100" value="${row.amount ?? ""}" />
    </label>
    <label class="food-confirm-label">
      已识别
      <input class="food-confirm" type="checkbox" disabled />
    </label>
    <button class="ghost-button remove-food-row" type="button">移除</button>
  `;
  el.foodRows.appendChild(wrapper);
  updateFoodRowStatus(wrapper, recognizedItems, unknowns);
}

function setFoodRows(rows = [], recognizedItems = [], unknowns = []) {
  el.foodRows.innerHTML = "";
  const safeRows = rows.length ? rows : [{ name: "", amount: "" }];
  safeRows.forEach((row) => addFoodRow(row, recognizedItems, unknowns));
}

function handleFoodRowClick(event) {
  if (!event.target.closest(".remove-food-row")) return;
  const rows = [...el.foodRows.querySelectorAll(".food-row")];
  if (rows.length <= 1) {
    rows[0].querySelector(".food-name").value = "";
    rows[0].querySelector(".food-amount").value = "";
    rows[0].querySelector(".food-confirm").checked = false;
    rows[0].classList.remove("recognized", "unrecognized");
    return;
  }
  event.target.closest(".food-row").remove();
}

function getFoodRows() {
  return [...el.foodRows.querySelectorAll(".food-row")]
    .map((row) => ({
      name: row.querySelector(".food-name").value.trim(),
      amount: Number(row.querySelector(".food-amount").value),
    }))
    .filter((row) => row.name || row.amount);
}

function updateFoodRowStatus(rowElement, recognizedItems = [], unknowns = []) {
  const name = rowElement.querySelector(".food-name").value.trim();
  const amount = Number(rowElement.querySelector(".food-amount").value);
  const checkbox = rowElement.querySelector(".food-confirm");
  const recognized = recognizedItems.some((item) => item.sourceName === name && Number(item.sourceAmount) === amount);
  const unknown = unknowns.some((item) => item.name === name && Number(item.amount) === amount);
  checkbox.checked = recognized;
  rowElement.classList.toggle("recognized", recognized);
  rowElement.classList.toggle("unrecognized", unknown);
}

function renderNutrition(diet) {
  const metrics = [
    ["热量", "calories", "kcal"],
    ["蛋白质", "protein", "g"],
    ["碳水", "carbs", "g"],
    ["脂肪", "fat", "g"],
  ];

  el.nutritionGrid.innerHTML = metrics
    .map(([label, key, unit]) => {
      const actual = diet.total[key] || 0;
      const target = state.targets[key] || 0;
      const delta = actual - target;
      const ratio = target ? Math.min((actual / target) * 100, 160) : 0;
      const deltaClass = Math.abs(delta) <= target * 0.05 ? "good" : delta > 0 ? "plus" : "minus";
      const deltaText = Math.abs(delta) <= target * 0.05 ? "接近目标" : `${delta > 0 ? "多" : "少"} ${Math.abs(delta).toFixed(key === "calories" ? 0 : 1)} ${unit}`;
      return `
        <div class="nutrition-card">
          <span>${label}</span>
          <strong>${actual.toFixed(key === "calories" ? 0 : 1)} ${unit}</strong>
          <progress max="160" value="${ratio}"></progress>
          <small>目标 ${target} ${unit}，<b class="delta ${deltaClass}">${deltaText}</b></small>
        </div>
      `;
    })
    .join("");

  const calorieDelta = diet.total.calories - state.targets.calories;
  if (!hasNutritionTotal(diet)) el.dietStatus.textContent = "未记录";
  else if (Math.abs(calorieDelta) <= state.targets.calories * 0.08) el.dietStatus.textContent = "热量接近目标";
  else el.dietStatus.textContent = calorieDelta > 0 ? "热量偏高" : "热量偏低";
}

function hasNutritionTotal(diet) {
  return ["calories", "protein", "carbs", "fat"].some((key) => Number(diet.total[key]) > 0);
}

function renderLibrary() {
  el.libraryCount.textContent = `${state.customFoods.length} 个`;
  if (!state.customFoods.length) {
    el.libraryList.innerHTML = `<p class="soft-empty">把常吃的加工食品录进来，下次点一下就能加入今天的饮食。</p>`;
    return;
  }

  el.libraryList.innerHTML = state.customFoods
    .map((food) => {
      const calories = getCaloriesFromMacros(food);
      return `
        <div class="library-item" data-id="${food.id}">
          <div>
            <strong>${escapeHtml(food.name)}</strong>
            <span>每100g ${calories.toFixed(0)} kcal / P ${food.protein} / F ${food.fat} / C ${food.carbs}</span>
          </div>
          <label>
            克数
            <input class="library-amount" type="number" min="1" max="2000" step="1" value="100" />
          </label>
          <button class="primary-button add-library-food" type="button">加入并统计</button>
          <button class="ghost-button delete-library-food" type="button">删除</button>
        </div>
      `;
    })
    .join("");
}

function renderArchive() {
  const dates = Object.keys(state.diets).sort().reverse();
  el.archiveCount.textContent = `${dates.length} 天`;
  if (!dates.length) {
    el.archiveList.innerHTML = `<p class="soft-empty">保存饮食后，这里会按日期留下每日摄入。</p>`;
    return;
  }

  el.archiveList.innerHTML = dates
    .map((date) => {
      const diet = state.diets[date];
      return `
        <div class="archive-item" data-date="${date}">
          <div class="archive-item-head">
            <span>${formatDate(date)}</span>
            <div class="archive-actions">
              <button class="ghost-button small-button view-archive" type="button">查看</button>
              <button class="ghost-button small-button delete-archive" type="button">删除</button>
            </div>
          </div>
          <div class="archive-macro-grid">
            ${renderArchiveMacro("热量", diet.total.calories, state.targets.calories, "kcal", 0)}
            ${renderArchiveMacro("蛋白", diet.total.protein, state.targets.protein, "g", 1)}
            ${renderArchiveMacro("碳水", diet.total.carbs, state.targets.carbs, "g", 1)}
            ${renderArchiveMacro("脂肪", diet.total.fat, state.targets.fat, "g", 1)}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderArchiveMacro(label, actual, target, unit, digits) {
  const delta = actual - target;
  const tolerance = target * 0.05;
  const stateClass = Math.abs(delta) <= tolerance ? "on-target" : delta > 0 ? "high" : "low";
  const arrow = Math.abs(delta) <= tolerance ? "=" : delta > 0 ? "↑" : "↓";
  return `
    <span class="archive-macro ${stateClass}">
      <span>
        <small>${label}</small>
        <b>${Number(actual || 0).toFixed(digits)} ${unit}</b>
        <small>目标 ${Number(target || 0).toFixed(digits)}</small>
      </span>
      <i class="arrow">${arrow}</i>
    </span>
  `;
}

function handleLibraryClick(event) {
  const item = event.target.closest(".library-item");
  if (!item) return;
  const food = state.customFoods.find((entry) => entry.id === item.dataset.id);
  if (!food) return;

  if (event.target.closest(".delete-library-food")) {
    state.customFoods = state.customFoods.filter((entry) => entry.id !== food.id);
    persist();
    renderLibrary();
    return;
  }

  if (event.target.closest(".add-library-food")) {
    const amount = Number(item.querySelector(".library-amount").value) || 100;
    addFoodRow({ name: food.name, amount });
    saveDietForCurrentDate();
  }
}

function handleArchiveClick(event) {
  const archiveItem = event.target.closest(".archive-item");
  if (!archiveItem) return;
  if (event.target.closest(".delete-archive")) {
    const confirmed = window.confirm(`删除 ${formatDate(archiveItem.dataset.date)} 的饮食记录吗？`);
    if (!confirmed) return;
    delete state.diets[archiveItem.dataset.date];
    persist();
    if (el.dateInput.value === archiveItem.dataset.date) loadDietForDate(el.dateInput.value);
    renderNutrition(getTodayDiet());
    renderArchive();
    renderAchievements();
    return;
  }
  if (!event.target.closest(".view-archive") && !event.target.closest(".archive-macro-grid")) return;
  el.dateInput.value = archiveItem.dataset.date;
  el.todayLabel.textContent = formatDate(archiveItem.dataset.date);
  loadDietForDate(archiveItem.dataset.date);
  renderNutrition(getTodayDiet());
}

function saveDietForCurrentDate() {
  const today = el.dateInput.value || new Date().toISOString().slice(0, 10);
  const total = {
    calories: Number(el.actualCalories.value) || 0,
    protein: Number(el.actualProtein.value) || 0,
    carbs: Number(el.actualCarbs.value) || 0,
    fat: Number(el.actualFat.value) || 0,
  };
  state.diets[today] = {
    raw: "",
    rows: [],
    total,
    items: [],
    unknowns: [],
  };
  persist();
  render();
}

async function parseFoodRows(rows) {
  return parseFood(rowsToText(rows), rows);
}

function rowsToText(rows) {
  return rows
    .filter((row) => row.name && row.amount)
    .map((row) => `${row.name} ${row.amount}g`)
    .join("\n");
}

function textToFoodRows(text) {
  return text
    .split(/[，,、\n；;]/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map((part) => {
      const amountMatch = part.match(/(\d+(?:\.\d+)?)\s*(g|克|kg|公斤|ml|毫升|个|颗|枚|根|勺)/i);
      const amount = amountMatch ? Number(amountMatch[1]) : "";
      const name = part
        .replace(/(\d+(?:\.\d+)?)\s*(g|克|kg|公斤|ml|毫升|个|颗|枚|根|勺)/i, "")
        .trim();
      return { name, amount };
    });
}

async function parseFood(text, sourceRows = []) {
  const total = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  const items = [];
  const unknowns = [];
  const onlineMatches = [];
  const normalized = text
    .split(/[，,、\n；;]/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  for (const [index, part] of normalized.entries()) {
    const sourceRow = sourceRows[index] || {};
    const inlineMacros = parseInlineMacros(part);
    const food = inlineMacros || findFood(part) || (await lookupOnlineFood(sourceRow.name || part));
    if (!food) {
      unknowns.push(sourceRow.name ? sourceRow : part);
      continue;
    }

    const amountMatch = part.match(/(\d+(?:\.\d+)?)\s*(g|克|kg|公斤|ml|毫升|个|颗|枚|根|勺)/i);
    let amount = amountMatch ? Number(amountMatch[1]) : 100;
    let unit = amountMatch?.[2] || food.unit;
    if (unit === "kg" || unit === "公斤") {
      amount *= 1000;
      unit = "g";
    }
    if (["克"].includes(unit)) unit = "g";
    if (["毫升"].includes(unit)) unit = "ml";
    if (["颗", "枚"].includes(unit)) unit = "个";

    const nutrition = getNutrition(food, amount, unit);

    total.calories += nutrition.calories;
    total.protein += nutrition.protein;
    total.carbs += nutrition.carbs;
    total.fat += nutrition.fat;
    if (food.source === "online") onlineMatches.push(food.name);
    items.push({
      name: food.name || food.keys[0],
      amountText: `${amount}${unit}`,
      sourceName: sourceRow.name || food.name || food.keys[0],
      sourceAmount: sourceRow.amount || amount,
      source: food.source || "local",
      ...nutrition,
    });
  }

  return { total, items, unknowns, onlineMatches };
}

function findFood(part) {
  const customFoods = state.customFoods.map((food) => ({
    ...food,
    keys: [food.name],
    unit: "g",
    calories: getCaloriesFromMacros(food) / 100,
    protein: food.protein / 100,
    fat: food.fat / 100,
    carbs: food.carbs / 100,
  }));
  const entries = [...customFoods, ...foodDb].sort(
    (a, b) => Math.max(...b.keys.map((key) => key.length)) - Math.max(...a.keys.map((key) => key.length)),
  );
  for (const entry of entries) {
    const matchedKey = [...entry.keys].sort((a, b) => b.length - a.length).find((key) => part.includes(key));
    if (matchedKey) return { ...entry, name: matchedKey };
  }
  return null;
}

async function lookupOnlineFood(name) {
  const query = getOnlineQuery(name);
  if (!query) return null;
  if (state.onlineFoods[query]) return { ...state.onlineFoods[query], source: "online" };

  try {
    const params = new URLSearchParams({
      query,
      dataType: "Foundation,SR Legacy,Survey (FNDDS)",
      pageSize: "8",
      api_key: USDA_API_KEY,
    });
    const response = await fetch(`${USDA_SEARCH_URL}?${params.toString()}`);
    if (!response.ok) return null;
    const data = await response.json();
    const food = pickUsdaFood(data.foods || [], name);
    if (!food) return null;
    state.onlineFoods[query] = food;
    persist();
    return { ...food, source: "online" };
  } catch {
    return null;
  }
}

function getOnlineQuery(name) {
  const cleaned = String(name || "").trim();
  if (!cleaned) return "";
  const alias = Object.keys(naturalFoodQueries)
    .sort((a, b) => b.length - a.length)
    .find((key) => cleaned.includes(key));
  if (alias) return naturalFoodQueries[alias];
  if (/^[a-zA-Z][a-zA-Z\s-]+$/.test(cleaned)) return cleaned;
  return "";
}

function pickUsdaFood(foods, originalName) {
  const candidates = foods
    .map((food) => {
      const per100 = extractUsdaMacros(food.foodNutrients || []);
      if (!per100) return null;
      const description = food.description || originalName;
      return {
        name: originalName,
        keys: [originalName, description],
        unit: "g",
        calories: per100.calories / 100,
        protein: per100.protein / 100,
        carbs: per100.carbs / 100,
        fat: per100.fat / 100,
        onlineDescription: description,
        source: "online",
      };
    })
    .filter(Boolean);
  return candidates[0] || null;
}

function extractUsdaMacros(nutrients) {
  const calories = findUsdaNutrient(nutrients, ["Energy"], ["KCAL"]);
  const protein = findUsdaNutrient(nutrients, ["Protein"]);
  const fat = findUsdaNutrient(nutrients, ["Total lipid", "Total Fat"]);
  const carbs = findUsdaNutrient(nutrients, ["Carbohydrate, by difference", "Carbohydrate"]);
  if ([calories, protein, fat, carbs].some((value) => value === null)) return null;
  return { calories, protein, fat, carbs };
}

function findUsdaNutrient(nutrients, names, units = []) {
  const match = nutrients.find((nutrient) => {
    const name = nutrient.nutrientName || nutrient.name || "";
    const unit = nutrient.unitName || nutrient.unit || "";
    const nameMatches = names.some((target) => name.toLowerCase().includes(target.toLowerCase()));
    const unitMatches = !units.length || units.some((target) => unit.toLowerCase().includes(target.toLowerCase()));
    return nameMatches && unitMatches && Number.isFinite(Number(nutrient.value));
  });
  return match ? Number(match.value) : null;
}

function parseInlineMacros(part) {
  const protein = findMacroValue(part, ["p", "P", "蛋白质", "蛋白"]);
  const fat = findMacroValue(part, ["f", "F", "脂肪"]);
  const carbs = findMacroValue(part, ["c", "C", "碳水", "碳水化合物"]);
  if ([protein, fat, carbs].some((value) => value === null)) return null;

  const cleanedName =
    part
      .replace(/(\d+(?:\.\d+)?)\s*(g|克|kg|公斤|ml|毫升|个|颗|枚|根|勺)/gi, "")
      .replace(/(?:p|P|蛋白质|蛋白)\s*[:：]?\s*\d+(?:\.\d+)?\s*g?/g, "")
      .replace(/(?:f|F|脂肪)\s*[:：]?\s*\d+(?:\.\d+)?\s*g?/g, "")
      .replace(/(?:c|C|碳水|碳水化合物)\s*[:：]?\s*\d+(?:\.\d+)?\s*g?/g, "")
      .trim() || "自定义食物";

  const per100 = { name: cleanedName, protein, fat, carbs };
  return {
    name: cleanedName,
    keys: [cleanedName],
    unit: "g",
    calories: getCaloriesFromMacros(per100) / 100,
    protein: protein / 100,
    fat: fat / 100,
    carbs: carbs / 100,
  };
}

function findMacroValue(text, labels) {
  for (const label of labels) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = text.match(new RegExp(`${escaped}\\s*[:：]?\\s*(\\d+(?:\\.\\d+)?)\\s*g?`, "i"));
    if (match) return Number(match[1]);
  }
  return null;
}

function getNutrition(food, amount, unit) {
  const usesWeightForCountedFood = unit === "g" && food.grams;
  const multiplier = usesWeightForCountedFood ? amount / food.grams : amount;
  return {
    calories: food.calories * multiplier,
    protein: food.protein * multiplier,
    carbs: food.carbs * multiplier,
    fat: food.fat * multiplier,
  };
}

function getCaloriesFromMacros(food) {
  return food.protein * 4 + food.carbs * 4 + food.fat * 9;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function makeId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `food-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function showLookupStatus(message, isError = false) {
  if (!el.lookupStatus) return;
  el.lookupStatus.textContent = message;
  el.lookupStatus.classList.toggle("error", isError);
}

function getLookupMessage(parsed) {
  const onlineCount = parsed.items.filter((item) => item.source === "online").length;
  if (parsed.unknowns.length) return `已识别 ${parsed.items.length} 项，其中 ${onlineCount} 项来自在线库；还有 ${parsed.unknowns.length} 项未查到。`;
  if (onlineCount) return `已识别 ${parsed.items.length} 项，其中 ${onlineCount} 项来自在线营养数据库。`;
  return `已识别 ${parsed.items.length} 项，均来自本地库或食物库。`;
}

function getSourceLabel(item) {
  if (item.source === "online") return "在线库";
  return "本地库";
}

function showLibraryStatus(message, isError = false) {
  if (!el.libraryStatus) return;
  el.libraryStatus.textContent = message;
  el.libraryStatus.classList.toggle("error", isError);
}

function renderAchievements() {
  const achievements = getAchievements();
  const unlocked = achievements.filter((item) => item.unlocked).length;
  el.achievementCount.textContent = `${unlocked} / ${achievements.length}`;
  el.achievementList.innerHTML = achievements
    .map(
      (item) => `
        <div class="achievement ${item.unlocked ? "unlocked" : ""}">
          <span class="badge ${item.badge}"><i></i></span>
          <strong>${item.title}</strong>
          <p>${item.description}</p>
          <small>${item.unlocked ? "已获得" : item.progress}</small>
        </div>
      `,
    )
    .join("");
}

function getAchievements() {
  const declineStreak = getWeightDeclineStreak();
  const proteinStreak = getProteinStreak();
  const calorieStreak = getCalorieControlStreak();
  const loggedDays = Object.keys(state.diets).length;

  return [
    {
      title: "连续 3 天下行",
      description: `体重连续下降 ${declineStreak} 天，达到 3 天解锁。`,
      progress: `${Math.min(declineStreak, 3)}/3`,
      badge: "badge-scale",
      unlocked: declineStreak >= 3,
    },
    {
      title: "连续 7 天下行",
      description: `体重连续下降 ${declineStreak} 天，达到 7 天解锁。`,
      progress: `${Math.min(declineStreak, 7)}/7`,
      badge: "badge-sprout",
      unlocked: declineStreak >= 7,
    },
    {
      title: "蛋白质稳定 3 天",
      description: `蛋白质摄入在目标 ±10% 内连续 ${proteinStreak} 天。`,
      progress: `${Math.min(proteinStreak, 3)}/3`,
      badge: "badge-egg",
      unlocked: proteinStreak >= 3,
    },
    {
      title: "热量控制 5 天",
      description: `热量摄入不超过目标 8%，并不少于目标 20%，连续 ${calorieStreak} 天。`,
      progress: `${Math.min(calorieStreak, 5)}/5`,
      badge: "badge-flame",
      unlocked: calorieStreak >= 5,
    },
    {
      title: "饮食记录入门",
      description: `已经记录饮食 ${loggedDays} 天，记录 3 天解锁。`,
      progress: `${Math.min(loggedDays, 3)}/3`,
      badge: "badge-book",
      unlocked: loggedDays >= 3,
    },
    {
      title: "目标接近者",
      description: "最新体重距离目标 2kg 以内时解锁。",
      progress: "目标",
      badge: "badge-star",
      unlocked: state.weights.length > 0 && Math.abs(state.weights.at(-1).weight - state.targetWeight) <= 2,
    },
  ];
}

function getWeightDeclineStreak() {
  if (state.weights.length < 2) return 0;
  let streak = 1;
  for (let i = state.weights.length - 1; i > 0; i -= 1) {
    if (state.weights[i].weight < state.weights[i - 1].weight) streak += 1;
    else break;
  }
  return streak;
}

function getProteinStreak() {
  return getDietStreak((diet) => {
    const target = state.targets.protein;
    if (!target) return false;
    return Math.abs(diet.total.protein - target) <= target * 0.1;
  });
}

function getCalorieControlStreak() {
  return getDietStreak((diet) => {
    const target = state.targets.calories;
    if (!target) return false;
    return diet.total.calories <= target * 1.08 && diet.total.calories >= target * 0.8;
  });
}

function getDietStreak(predicate) {
  const dates = Object.keys(state.diets).sort().reverse();
  let streak = 0;
  for (const date of dates) {
    if (predicate(state.diets[date])) streak += 1;
    else break;
  }
  return streak;
}

function exportJsonBackup() {
  const payload = {
    app: "fat-loss-tracker",
    version: 1,
    exportedAt: new Date().toISOString(),
    state,
  };
  downloadFile(`减脂记录备份-${getFileDate()}.json`, JSON.stringify(payload, null, 2), "application/json");
}

function exportCsvBackup() {
  const rows = [
    ["type", "date", "metric", "value", "unit"],
    ...state.weights.flatMap((item) => [
      ["weight", item.date, "weight", item.weight, "kg"],
      ["weight", item.date, "targetWeight", state.targetWeight, "kg"],
    ]),
    ...state.measurements.flatMap((item) => [
      ["measurement", item.date, "chest", item.chest || "", "cm"],
      ["measurement", item.date, "waist", item.waist || "", "cm"],
      ["measurement", item.date, "hip", item.hip || "", "cm"],
      ["measurement", item.date, "thigh", item.thigh || "", "cm"],
      ["measurement", item.date, "calf", item.calf || "", "cm"],
      ["measurement", item.date, "arm", item.arm || "", "cm"],
    ]),
    ...Object.keys(state.diets)
      .sort()
      .flatMap((date) => {
        const total = state.diets[date].total || {};
        return [
          ["diet", date, "calories", total.calories || 0, "kcal"],
          ["diet", date, "protein", total.protein || 0, "g"],
          ["diet", date, "carbs", total.carbs || 0, "g"],
          ["diet", date, "fat", total.fat || 0, "g"],
        ];
      }),
  ];
  const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
  downloadFile(`减脂记录表格-${getFileDate()}.csv`, `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function importJsonBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const importedState = parsed.state || parsed;
      const nextState = normalizeImportedState(importedState);
      const confirmed = window.confirm("导入备份会覆盖当前设备上的记录，确定继续吗？");
      if (!confirmed) return;

      Object.assign(state, nextState);
      persist();
      syncTargetsToInputs();
      loadWeightForDate(el.dateInput.value);
      loadMeasurementsForDate(el.dateInput.value);
      loadDietForDate(el.dateInput.value);
      render();
      window.alert("导入完成。");
    } catch {
      window.alert("导入失败：请选择由本网页导出的 JSON 备份文件。");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function normalizeImportedState(importedState) {
  const fallback = loadState();
  return {
    ...fallback,
    ...importedState,
    targets: { ...fallback.targets, ...(importedState.targets || {}) },
    weights: Array.isArray(importedState.weights) ? importedState.weights : [],
    measurements: Array.isArray(importedState.measurements) ? importedState.measurements : [],
    diets: importedState.diets && typeof importedState.diets === "object" ? importedState.diets : {},
    customFoods: Array.isArray(importedState.customFoods) ? importedState.customFoods : [],
    onlineFoods: importedState.onlineFoods && typeof importedState.onlineFoods === "object" ? importedState.onlineFoods : {},
  };
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeCsv(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function getFileDate() {
  return new Date().toISOString().slice(0, 10);
}

function formatSigned(value, unit = "") {
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}${unit}`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date(`${dateString}T00:00:00`));
}
