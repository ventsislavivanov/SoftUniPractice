window.addEventListener("load", solve);

function solve() {
  const colorRef = document.getElementById('colors');
  const modelRef = document.getElementById('motorcycles');
  const dataRef = document.getElementById('datetime');
  const fullNameRef = document.getElementById('full-name');
  const emailRef = document.getElementById('email');

  const submitBtn = document.getElementById('test-ride-btn');

  const previewList = document.getElementById('preview-list');
  const completeList = document.getElementById('complete-list');


  submitBtn.addEventListener('click', onPreview);
  function onPreview (e) {
    e.preventDefault();

    if (colorRef.value === ''||
      modelRef.value === '' ||
      fullNameRef.value === '' ||
      emailRef.value === '' ||
      dataRef.value === '') {
      return;
    }

    const liPreviewEl = document.createElement('li');
    const articlePreviewEl = document.createElement('article');

    const colorEdit = colorRef.value;
    const modelEdit = modelRef.value;
    const dataEdit = dataRef.value;
    const fullNameEdit = fullNameRef.value;
    const emailEdit = emailRef.value;

    colorRef.value = '';
    modelRef.value = '';
    fullNameRef.value = '';
    emailRef.value = '';
    dataRef.value = '';

    const colorPreviewP = document.createElement('p');
    const modelPreviewP = document.createElement('p');
    const dataPreviewP = document.createElement('p');
    const fullNamePreviewP = document.createElement('p');
    const emailPreviewP = document.createElement('p');

    colorPreviewP.textContent = `Color: ${colorEdit}`;
    emailPreviewP.textContent = `Model: ${emailEdit}`;
    fullNamePreviewP.textContent = `For ${fullNameEdit}`;
    emailPreviewP.textContent = `Contact: ${emailEdit}`;
    dataPreviewP.textContent = `Test Ride On: ${dataEdit}`;

    articlePreviewEl.appendChild(colorPreviewP);
    articlePreviewEl.appendChild(modelPreviewP);
    articlePreviewEl.appendChild(fullNamePreviewP);
    articlePreviewEl.appendChild(emailPreviewP);
    articlePreviewEl.appendChild(dataPreviewP);

    const btnContainerEl = document.createElement('div');
    btnContainerEl.setAttribute('class', 'btn-container');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    btnContainerEl.appendChild(editBtn);
    btnContainerEl.appendChild(nextBtn);

    liPreviewEl.appendChild(articlePreviewEl);
    liPreviewEl.appendChild(btnContainerEl);

    previewList.appendChild(liPreviewEl);

    submitBtn.disabled = true;

    editBtn.addEventListener('click', onEdit)
    function onEdit() {
      colorRef.value = colorEdit;
      modelRef.value  = modelEdit;
      fullNameRef.value  = fullNameEdit;
      emailRef.value  = emailEdit;
      dataRef.value  = dataEdit;

      liPreviewEl.remove();
      submitBtn.disabled = false
    }

    nextBtn.addEventListener('click', onNext)
    function onNext() {
      const liCompleteEl = document.createElement('li');
      const articleCompleteEl = document.createElement('article');

      const completeBtn = document.createElement('button');
      completeBtn.setAttribute('class', 'complete-btn');
      completeBtn.textContent = 'Complete'

      articleCompleteEl.appendChild(colorPreviewP);
      articleCompleteEl.appendChild(modelPreviewP);
      articleCompleteEl.appendChild(fullNamePreviewP);
      articleCompleteEl.appendChild(emailPreviewP);
      articleCompleteEl.appendChild(dataPreviewP);
      articleCompleteEl.appendChild(completeBtn);

      liCompleteEl.appendChild(articleCompleteEl);

      previewList.remove();
      completeList.appendChild(liCompleteEl);

      completeBtn.addEventListener('click', onComplete);
      function onComplete() {
        const dataViewDiv = document.getElementsByClassName('data-view')[0];

        const confirmBtn = document.createElement('button');
        confirmBtn.setAttribute('class', 'confirm-btn');
        confirmBtn.textContent = 'Your Test Ride is Confirmed'

        liCompleteEl.remove();
        dataViewDiv.appendChild(confirmBtn);
      }
    }
  }
}
