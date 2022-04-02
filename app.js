const verses = [
  
  `"Oh you who believe! Fasting is prescribed to you as it was prescribed to those before you, that you many learn piety and righteousness" (Q 2:183)`,
  `"The month of Ramadan (is the month) in which the Qur’an has been sent down as guidance for mankind containing clear signs which lead (to the straight road) and distinguishing (the truth from falsehood).." (Q 2:185)`,
  `"Fasting is prescribed for you as it was prescribed for those before you, that you may attain taqwaa." (Q2:183)`,
  `"The most honored by Allah amongst you are those best in taqwaa."(Q 49:13)`,
  `"Indeed We have revealed it (Qur'an) in the night of Power. And what will explain to you what the night of Power is? The night of Power is better than a thousand months. Therein descends the Angels and the Spirit (Jibreel) by Allah's permission, on every errand: (they say) "Peace" (continuously) till the rise of Morning!" (Q 97:1-5)`,
  `The Messenger of Allah (saw) said, "When the month of Ramadan starts, the gates of the heaven are opened and the gates of Hell are closed and the devils are chained." (Imam Bukhari) ...`,
  `Abu Umamah reported: "I came to the Messenger of Allah (saw) and said: 'Order me to do a deed that will allow me to enter Paradise.' He said: 'Stick to fasting, as there is no equivalent to it.' Then I came to him again and he said: 'Stick to fasting."' [Imam Ahmad, Imam Nasa'i, and Imam Hakim].`,
]
const btnGet = document.querySelector('.get-verses')
const versesTarget = document.querySelector('.verses')



btnGet.addEventListener('click', () => {
  const randVerses = Math.round(Math.random() * 6)
  
  const arr = verses.filter((verse) => {
      return verse
  })
  
  versesTarget.textContent = arr[randVerses]
  console.log(randVerses, arr[randVerses])

  
  
})



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


