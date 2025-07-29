// AI Nudge Chrome Extension
// Script for rotating nudge messages

document.addEventListener('DOMContentLoaded', function() {
    // Array of nudge messages to rotate through
    const nudgeMessages = [
        "Stuck? Let an AI take the first crack at it.",
        "Before you dive deep… what if AI already has the answer?",
        "Why scroll when you can solve? Ask your favorite AI chat!",
        "Browser tabs piling up? Let AI cut through the clutter.",
        "You could search. Or you could solve. Try leveraging AI first!"
    ];
    
    // Randomly select a message
    const randomIndex = Math.floor(Math.random() * nudgeMessages.length);
    const selectedMessage = nudgeMessages[randomIndex];
    
    // Update the title element with the selected message
    const titleElement = document.querySelector('.nudge-title');
    if (titleElement) {
        titleElement.textContent = selectedMessage;
    }
    
    console.log('AI Nudge loaded successfully - Message:', selectedMessage);
}); 