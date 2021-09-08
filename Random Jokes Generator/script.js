"use strict";
const jokesArray=["An exercise for people who are out of shape: Begin with a five-pound potato bag in each hand. Extend your arms straight out from your sides, hold them there for...",
"My daughter received this e-mail from a prospective student prior to the start of the semester: “Dear Professor, I won’t be able to come to any of your classes or...",
"Scene: With a patient in my medical exam room Me: How old are your kids? Patient: Forty-four and 39 from my wife who passed away, and from my second wife, 15 and 13. Me: That’s quite the age difference! Patient: Well, the older ones didn’t give me any grandkids, so I made my own. —Mria Murillo",
"The definition of a perfectionist: someone who wants to go from point A to point A+. —David Bez",
"Traveling through the Midwest, I stopped at an Ohio welcome center to pick up a state map. I found plenty of brochures but no maps. Then I spotted two employees and asked whether they had any. “Sure,” said the first guy. “I’ll get you one.” As he walked to the back, the second guy explained, “We keep them in the storage room. If we leave them out on the counter, people just come in and take them.” —James Nealis",
"When my local barista handed me my change, one coin stood out. “Look at that. You rarely get one of these old wheat pennies nowadays,” I said, tapping the sheaf of-wheat design. I handed her the penny. Turning it over and over in her hand, she said, “You know, I always thought they were made of copper.” —Linda Neukrug",
"One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this for Mommy so she can show Daddy when he gets home.” —James Avery",
"During a job interview at the 99 Cents store, my son was asked, “Where do you see yourself in five years?” My son’s reply: “At the Dollar Store.” He got the job. —A.K. via rd.com",
"Two guys stole a calendar. They got six months each. —Submitted by Alex Del Bene",
"“I make mistakes; I’ll be the second to admit it.” —Jean Kerr, author",
"I tried having my mother’s phone disconnected, but the customer-service rep told me that since the account was in my dad’s name, he’d have to be the one to put in the request. The fact that he’d been dead for 40 years didn’t sway her. Then a solution hit me: “If I stop paying the bill, you can turn off the service, right?” “Well, yes,” she said reluctantly. “But that would ruin his credit.” —Jeannie Gibbs",
"I loved the dress that I bought at a flea market. It fit perfectly, and the skirt was a swirl of intricate pleats. I wore it confidently to an evening party and glowed when a woman exclaimed, “Oh, how stunning!” Yes, I was grinning from ear to ear, until she added cheerfully, “Hang on to it, honey. Pleats will come back someday.” —Mary Lou Wickham"];
 


const btn=document.querySelector(".btn");
const jokeContainer=document.getElementById("joke-container");
btn.addEventListener("click",()=>{
const randomIndex=Math.floor(Math.random()*jokesArray.length);   
jokeContainer.innerHTML=jokesArray[randomIndex];
})