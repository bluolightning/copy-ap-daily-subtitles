const lineSeparator = '\n'; // Whatever text should be inbetween lines if there are multiple lines
const key = 'c'; // The key that should be pressed to copy subtitles

document.addEventListener('keydown', (event) => {
    if (event.key === key) {
        let captionLine = '';
        const captions = document.querySelectorAll('.w-captions-line');
        captions.forEach((element) => {
            captionLine += element.innerText + lineSeparator;
        });

        // Filters out the lineSeparator at the end
        if (captionLine.endsWith(lineSeparator)) {
            captionLine = captionLine.slice(0, captionLine.length);
        }

        captionLine = captionLine.trimEnd(); // Filters any excess whitespace

        // Writes the caption to the clipboard
        navigator.clipboard
            .writeText(captionLine)
            .then(() => {
                console.log('"' + captionLine + '"' + ' copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    }
});
