document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('product-model');
    const optionCheckboxes = document.querySelectorAll('.option-checkbox');
    const totalPriceElement = document.getElementById('total-price');

    
    function calculateTotal() {
        let basePrice = parseInt(modelSelect.value) || 0;
        let optionsPrice = 0;

        optionCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                optionsPrice += parseInt(checkbox.value) || 0;
            }
        });

        const finalPrice = basePrice + optionsPrice;
        
        totalPriceElement.textContent = finalPrice.toLocaleString('ru-RU') + ' ₽';
    }

    modelSelect.addEventListener('change', calculateTotal);
    optionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
});
