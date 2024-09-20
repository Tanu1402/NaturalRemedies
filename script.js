document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const resultsContainer = document.getElementById('resultsContainer');

    // Sample data for demonstration (replace with actual data)
    const remedies = [
        { name: 'Cold', description: 'Common viral infection of the upper respiratory tract. Symptoms include runny nose, congestion, sore throat, and cough.', image: 'cold.jpg' },
        { name: 'Sore Throat', description: 'Inflammation of the throat often due to viral or bacterial infections. Symptoms include pain, scratchiness, and difficulty swallowing.', image: 'sore_throat.jpg' },
        { name: 'Upset Stomach', description: 'Indigestion or discomfort in the abdomen, often due to overeating, food intolerance, or gastrointestinal infections.', image: 'upset_stomach.jpg' },
        { name: 'Headaches', description: 'Peppermint oil, magnesium, feverfew are natural remedies for headaches and migraines.', image: 'headaches.jpg' },
        { name: 'Insomnia', description: 'Chamomile tea, valerian root, lavender can help promote relaxation and improve sleep quality.', image: 'insomnia.jpg' },
        { name: 'Skin Irritations', description: 'Aloe vera gel, oatmeal bath are soothing treatments for various skin irritations.', image: 'skin_irritations.jpg' },
        { name: 'General Health', description: 'Probiotics, omega-3 fatty acids support digestive health, immunity, and overall well-being.', image: 'general_health.jpg' },
        { name: 'Anxiety and Stress', description: 'Lavender, exercise are natural remedies to reduce anxiety and stress levels.', image: 'anxiety_stress.jpg' },
        { name: 'Joint Pain', description: 'Turmeric, Epsom salt bath are effective for reducing inflammation and relieving joint pain.', image: 'joint_pain.jpg' }
        // Add more remedies as needed
    ];

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const query = document.getElementById('query').value.trim().toLowerCase();

        // Clear previous results
        resultsContainer.innerHTML = '';

        // Filter remedies based on query
        const filteredRemedies = remedies.filter(function(remedy) {
            return remedy.name.toLowerCase().includes(query) || remedy.description.toLowerCase().includes(query);
        });

        // Display filtered remedies
        filteredRemedies.forEach(function(remedy) {
            const remedyDiv = document.createElement('div');
            remedyDiv.classList.add('remedy');

            const image = document.createElement('img');
            image.src = remedy.image;
            image.alt = remedy.name;
            remedyDiv.appendChild(image);

            const heading = document.createElement('h3');
            heading.textContent = remedy.name;
            remedyDiv.appendChild(heading);

            const description = document.createElement('p');
            description.textContent = remedy.description;
            remedyDiv.appendChild(description);

            resultsContainer.appendChild(remedyDiv);
        });

        // If no results found
        if (filteredRemedies.length === 0) {
            const noResults = document.createElement('p');
            noResults.textContent = 'No remedies found. Please try another search term.';
            resultsContainer.appendChild(noResults);
        }
    });
});
