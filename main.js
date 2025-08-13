document.addEventListener('DOMContentLoaded', function () {
    const mainOptions = document.querySelectorAll('.main-option');
    const subOptions = document.querySelectorAll('.sub-option');
    const contentPanels = document.querySelectorAll('.content-panel');
    const subContainers = document.querySelectorAll('.sub-options');

    function selectFirstSubOption(subContainerId) {
        const subContainer = document.getElementById(subContainerId);
        if (subContainer) {
            const firstSubOption = subContainer.querySelector('.sub-option');
            if (firstSubOption) {
                firstSubOption.click();
            }
        }
    }

    mainOptions.forEach(option => {
        option.addEventListener('click', function () {
            mainOptions.forEach(o => o.classList.remove('selected'));
            subOptions.forEach(o => o.classList.remove('selected'));
            contentPanels.forEach(p => p.classList.remove('active'));
            subContainers.forEach(c => c.style.display = 'none');

            this.classList.add('selected');
            const target = this.getAttribute('data-target');
            document.getElementById(target).style.display = 'block';
            selectFirstSubOption(target);
        });

    });

    subOptions.forEach(option => {
        option.addEventListener('click', function () {
            subOptions.forEach(o => o.classList.remove('selected'));

            this.classList.add('selected');
            const target = this.getAttribute('data-target');
            contentPanels.forEach(p => p.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });

    });

    if (mainOptions.length > 0) {
        mainOptions[0].click();
    }
});