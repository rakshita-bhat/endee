const API_URL = 'http://localhost:5003';

document.getElementById('predictForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const animal = document.getElementById('animal').value;
    const symptoms = document.getElementById('symptoms').value;

    const btn = document.getElementById('analyzeBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    const errorAlert = document.getElementById('errorAlert');

    if (!animal || !symptoms) {
        showError('Please select an animal and describe the symptoms.');
        return;
    }

    loading.style.display = 'block';
    results.style.display = 'none';
    errorAlert.style.display = 'none';

    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    try {
        const response = await fetch(API_URL + '/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ animal, symptoms })
        });

        if (!response.ok) {
            throw new Error('Prediction failed');
        }

        const data = await response.json();
        displayResults(data);

    } catch (error) {
        showError(error.message);
    } finally {
        loading.style.display = 'none';
        btn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
});

function displayResults(data) {
    document.getElementById('diseaseName').textContent = data.disease;
    document.getElementById('confidence').textContent = data.confidence;
    document.getElementById('explanation').textContent = data.explanation;
    document.getElementById('precautions').textContent = data.precautions;

    const matchesDiv = document.getElementById('topMatches');
    matchesDiv.innerHTML = '';

    if (data.top_matches) {
        data.top_matches.forEach((match, i) => {
            matchesDiv.innerHTML += `
                <div class="match-item">
                    <div>
                        <strong>${i + 1}. ${match.disease}</strong>
                        <p class="text-muted small">${match.symptoms}</p>
                    </div>
                    <span>${(match.score * 100).toFixed(0)}%</span>
                </div>
            `;
        });
    }

    document.getElementById('results').style.display = 'block';
}

function showError(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorAlert').style.display = 'block';
}