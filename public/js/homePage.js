const facts = [
    "You forget 90% of your dreams...",
    "The majority of dreams are forgotten within the first five minutes after waking...",
    "Stress and anxiety can contribute to rapid dream memory loss...",
    "Dreams can be interpreted using GPT-based AI, providing insights into your subconscious...",
    "GPT-based AI can analyze dream patterns and help identify recurring themes...",
    "AI-powered dream interpretation can help understand emotions and feelings during dreams...",
    "Writing your dreams down can help improve dream recall...",
    "Dreams can improve problem-solving skills and boost creativity...",
    "Lucid dreaming allows you to take control of your dreams and even change their outcome...",
    "Everyone dreams, although not everyone remembers their dreams...",
    "On average, a person has four to six dreams per night...",
    "Dreams can last anywhere from a few seconds to 20-30 minutes...",
    "Using a dream journal alongside DreamerGPT can improve self-awareness...",
  ];
  
  const displayedFacts = [];
  
  const randomDreamFactElement = document.getElementById("randomDreamFact");
  
  function typeEffect(element, text, delay) {
    let index = 0;
  
    function typeChar() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeChar, delay);
      }
    }
  
    typeChar();
  }
  
  function updateRandomDreamFact() {
    // When all facts have been displayed, swap the arrays
    if (facts.length === 0) {
      const temp = facts;
      facts.push(...displayedFacts);
      displayedFacts.length = 0;
    }
  
    const randomIndex = Math.floor(Math.random() * facts.length);
    const selectedFact = facts[randomIndex];
    facts.splice(randomIndex, 1); // Remove the fact from the facts array
    displayedFacts.push(selectedFact); // Add the fact to the displayedFacts array
  
    randomDreamFactElement.innerText = ""; // Clear existing text before starting the typing effect
    typeEffect(randomDreamFactElement, selectedFact, 60); // Adjust the third argument for typing speed (milliseconds)
  }
  
  // Call the function once when the page loads
  updateRandomDreamFact();
  
  // Change the fact every 7 seconds
  setInterval(updateRandomDreamFact, 7000);