window.addEventListener("load", solve);

function solve() {
  let typeRef = document.getElementById("type");
  let intensityRef = document.getElementById("intensity");
  let durationRef = document.getElementById("duration");
  let dateRef = document.getElementById("date");
  let caloriesRef = document.getElementById("calories");

  let btnAdd = document.getElementById("add-activity");

  let previewList = document.getElementById("preview-activity");

  let tableBodyElement = document.getElementById("activities-table");


  btnAdd.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (
      typeRef.value === "" ||
      intensityRef.value === "" ||
      durationRef.value === "" ||
      dateRef.value === "" ||
      caloriesRef.value === ""
    ) {
      return;
    }

    let articleEl = document.createElement("article");
    let liEl = document.createElement("li");
    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    let activity = document.createElement("p");
    let intensity = document.createElement("p");
    let duration = document.createElement("p");
    let date = document.createElement("p");
    let calories = document.createElement("p");

    activity.textContent = `Activity: ${typeRef.value}`;
    intensity.textContent = `Intensity: ${intensityRef.value}`;
    duration.textContent = `Duration: ${durationRef.value} min.`;
    date.textContent = `Date: ${dateRef.value}`;
    calories.textContent = `Calories: ${caloriesRef.value} `;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    articleEl.appendChild(activity);
    articleEl.appendChild(intensity);
    articleEl.appendChild(duration);
    articleEl.appendChild(date);
    articleEl.appendChild(calories);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liEl.appendChild(articleEl);
    liEl.appendChild(btnContainer);

    previewList.appendChild(liEl);

    let typeEdited = typeRef.value;
    let intensityEdited = intensityRef.value;
    let durationEdited = durationRef.value;
    let dateEdited = dateRef.value;
    let caloriesEdited = caloriesRef.value;

    resetFormValues();

    btnAdd.disabled = true;

    editBtn.addEventListener("click", onEdit);
    function onEdit() {
      typeRef.value = typeEdited;
      intensityRef.value = intensityEdited;
      durationRef.value = durationEdited;
      dateRef.value = dateEdited;
      caloriesRef.value = caloriesEdited;

      liEl.remove();
      btnAdd.disabled = false;
    }

    nextBtn.addEventListener("click", onNext);
    function onNext() {

      let deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("class", "delete-btn");
      deleteBtn.textContent = "Delete";

      let trEl = document.createElement("tr");

      let typeTd = document.createElement("td");
      typeTd.textContent = typeEdited;
      typeTd.setAttribute("class", "type-cell");


      let IntensityTd = document.createElement("td");
      IntensityTd.textContent = intensityEdited;
      IntensityTd.setAttribute("class", "intensity-cell");

      let caloriesTd = document.createElement("td");
      caloriesTd.textContent = caloriesEdited;
      caloriesTd.setAttribute("class", "calories-cell");

      let durationTd = document.createElement("td");
      durationTd.textContent = durationEdited;
      durationTd.setAttribute("class", "duration-cell");


      let dateTd = document.createElement("td");
      dateTd.textContent = dateEdited;
      dateTd.setAttribute("class", "date-cell");


      let btnTd = document.createElement("td");
      btnTd.appendChild(deleteBtn);
      btnTd.setAttribute("class", "btn-cell");

      trEl.appendChild(typeTd);
      trEl.appendChild(durationTd);
      trEl.appendChild(caloriesTd);
      trEl.appendChild(dateTd);
      trEl.appendChild(IntensityTd);
      trEl.appendChild(btnTd);

      tableBodyElement.appendChild(trEl);
      liEl.remove();
      btnAdd.disabled = false;

      deleteBtn.addEventListener("click", onDelete);

      function onDelete() {
        let trEl = deleteBtn.closest('tr');
        trEl.remove();
      }
    }
  }

  function resetFormValues() {
    typeRef.value = '';
    intensityRef.value = '';
    durationRef.value = '';
    dateRef.value = '';
    caloriesRef.value = '';
  }
}

