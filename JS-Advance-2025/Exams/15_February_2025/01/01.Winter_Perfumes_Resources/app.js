window.addEventListener('load', solve);

function solve() {
    const scentTypeRef = document.getElementById('scent-type');
    const budgetRef = document.getElementById('budget');
    const occasionRef = document.getElementById('occasion');
    const brandRef = document.getElementById('brand');
    const skinTypeRef = document.getElementById('skin-type');

    const nextBtnRef = document.getElementById('next-btn');

    const ulPreference = document.getElementsByClassName('preference-list')[0];

    nextBtnRef.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (scentTypeRef.value === ''||
            budgetRef.value === '' ||
            occasionRef.value === '' ||
            brandRef.value === '' ||
            skinTypeRef.value === '') {
            return;
        }

        const liPreference = document.createElement('li');
        liPreference.setAttribute('class', 'content');

        const articlePreference = document.createElement('article');

        const scentTypeEdit = scentTypeRef.value;
        const budgetEdit = budgetRef.value;
        const occasionEdit = occasionRef.value;
        const brandEdit = brandRef.value;
        const skinTypeEdit = skinTypeRef.value;

        const thanksTextRef = document.getElementById('thanks-text');
        thanksTextRef.textContent = '';

        scentTypeRef.value  = '';
        budgetRef.value = '';
        occasionRef.value = '';
        brandRef.value = '';
        skinTypeRef.value = '';

        const scentTypePreferenceP = document.createElement('p');
        const budgetPreferenceP = document.createElement('p');
        const occasionPreferenceP = document.createElement('p');
        const brandPreferenceP = document.createElement('p');
        const skinTypePreferenceP = document.createElement('p');

        scentTypePreferenceP.textContent = `Scent Type: ${scentTypeEdit}`;
        budgetPreferenceP.textContent = `Budget: ${budgetEdit} $`;
        occasionPreferenceP.textContent = `Occasion: ${occasionEdit}`;
        brandPreferenceP.textContent = `Brand: ${brandEdit}`;
        skinTypePreferenceP.textContent = `Skin Type: ${skinTypeEdit}`;

        articlePreference.appendChild(scentTypePreferenceP);
        articlePreference.appendChild(budgetPreferenceP);
        articlePreference.appendChild(occasionPreferenceP);
        articlePreference.appendChild(brandPreferenceP);
        articlePreference.appendChild(skinTypePreferenceP);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        liPreference.appendChild(articlePreference);
        liPreference.appendChild(editBtn);
        liPreference.appendChild(continueBtn);

        ulPreference.appendChild(liPreference);

        nextBtnRef.disabled = true;

        editBtn.addEventListener('click', onEdit);
        function onEdit() {
            editBtn.remove();
            continueBtn.remove();

            nextBtnRef.disabled = false;

            liPreference.remove();

            scentTypeRef.value  = scentTypeEdit;
            budgetRef.value = budgetEdit;
            occasionRef.value = occasionEdit;
            brandRef.value = brandEdit;
            skinTypeRef.value = skinTypeEdit;
        }

        continueBtn.addEventListener('click', onContinue);
        function onContinue() {
            liPreference.remove();

            const ulConfirm = document.getElementsByClassName('confirm-list')[0];

            const liConfirm = document.createElement('li');
            liConfirm.setAttribute('class', 'content');

            const articleConfirm = document.createElement('article');

            const scentTypeConfirmP = document.createElement('p');
            const budgetConfirmP = document.createElement('p');
            const occasionConfirmP = document.createElement('p');
            const brandConfirmP = document.createElement('p');
            const skinTypeConfirmP = document.createElement('p');

            scentTypeConfirmP.textContent = `Scent Type: ${scentTypeEdit}`;
            budgetConfirmP.textContent = `Budget: ${budgetEdit} $`;
            occasionConfirmP.textContent = `Occasion: ${occasionEdit}`;
            brandConfirmP.textContent = `Brand: ${brandEdit}`;
            skinTypeConfirmP.textContent = `Skin Type: ${skinTypeEdit}`;

            articleConfirm.appendChild(scentTypeConfirmP);
            articleConfirm.appendChild(budgetConfirmP);
            articleConfirm.appendChild(occasionConfirmP);
            articleConfirm.appendChild(brandConfirmP);
            articleConfirm.appendChild(skinTypeConfirmP);

            const confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            liConfirm.appendChild(articleConfirm);
            liConfirm.appendChild(confirmBtn);
            liConfirm.appendChild(cancelBtn);

            ulConfirm.appendChild(liConfirm);

            confirmBtn.addEventListener('click', onConfirm);
            function onConfirm() {
                liConfirm.remove();
                nextBtnRef.disabled = false;
                thanksTextRef.textContent = 'Thank you for sharing your preferences!';
            }

            cancelBtn.addEventListener('click', onCancel);
            function onCancel() {
                liConfirm.remove();
                nextBtnRef.disabled = false;
            }
        }
    }
}
