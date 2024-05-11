<script>
    // JavaScript for sliding recipe cards
    document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('.recipe-cards-container');
    const scrollStep = 300; // Adjust this value based on the card width

    document.querySelector('.meal-categories').addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV') {
            const index = Array.from(this.children).indexOf(event.target);
            const targetX = index * scrollStep;
            cardsContainer.scrollTo({
                left: targetX,
                behavior: 'smooth'
            });
        }
    });
});
</script>