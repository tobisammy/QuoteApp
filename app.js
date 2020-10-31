//Mobile responsive only

window.addEventListener('load', () => {

    //I am only picking 10 success quotes from giant people.
    //10 quotes just for practise
    const quotes = [
        'Through perseverance many people win success out of what seemed destined to be certain failure.  `Benjamin Disraeli`',
        'Beauty is not in the face; beauty is a light in the light. `Kahlil Gibran`',
        "Most of the successful people I've known are the ones who do more listening than talking.  `Bernard Baruch`",
        'The man who has done level best... is a success, even though the world may write him down a failure.  `B. C. Forbes`',
        'Try not to become a man of success, but a man of value. Look around at how people want to get the best out of life than they put in. `Albert Einstein`',
        'A man of value will give more than he recieves. Be creative, but make sure what you create is not a curse for mankind. `Albert Einstein`',
        'Success consists of going from failure to failure without loss of enthusiasm. `Winston Churchill`',
        'Only those who dare to fail greatly can ever achieve greatly.  `Robert F. Kennedy`',
        'The depth of your mythology is the extent of your effectiveness. `John C. Maxwell`',
        'Success comes from curiosity, concentration, perseverance and self criticism. `Albert Einstein`'
    ];
    const button = document.querySelector('button');
    const h3 = document.querySelector('h3');

    function timeChange() { // const date = new Date().toDateString();
        // const date = new Date().toUTCString();
        let d = new Date();
        let hr = d.getHours();
        // let min = d.getMinutes();

        const time = document.querySelector('.time');
        if (hr > 24 && hr < 12) {
            time.innerText = 'morning';
        } else if (hr > 12 && hr < 17) {
            time.innerText = 'afternoon';
        } else if (hr > 17 && hr < 24) {
            time.innerText = 'evening';
        } else {
            time.innerText = 'day';
        }
    }
    timeChange();
    const randomText = document.querySelector('.random-text');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button) {
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            randomText.innerText = randomQuote;
            h3.style.opacity = '1';
            randomText.className += ' fadeout';
            setTimeout(() => {
                randomText.classList.remove('fadeout');
            }, 4000)
        }
        timeChange();
    })
})
