document.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.getElementById('demo-button');
    const demoOutput = document.getElementById('demo-output');

    demoButton.addEventListener('click', async () => {
        const response = await fetch('/api/movies');
        const data = await response.json();

        demoOutput.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    });
});

