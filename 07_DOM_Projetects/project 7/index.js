// 1. Zodiac Signs Array (12 standard signs)
const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", 
    "Leo", "Virgo", "Libra", "Scorpio", 
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

// 2. Regular Compliments Array (40 items)
const compliments = [
    "You have a magnetic energy that naturally draws people toward you.",
    "Your intuition is razor-sharp—you usually know what's happening before anyone else does.",
    "You possess an inner strength that helps you bounce back from anything.",
    "Your creativity and unique way of thinking set you apart in any room.",
    "You have a rare depth of empathy that makes people feel truly seen and safe around you.",
    "Your sense of humor has single-handedly saved many boring conversations.",
    "You notice the little details that everyone else completely misses.",
    "There is a quiet confidence about you that commands respect without you even trying.",
    "Your ambition is contagious, and watching you chase goals inspires the people around you.",
    "You have an amazing capacity to stay calm when chaos is happening all around you.",
    "Your taste and aesthetic eye are genuinely top-tier.",
    "You bring out the absolute best version of people just by being yourself.",
    "Your mind works at a brilliant, multi-layered speed that keeps others intrigued.",
    "You have a heart of gold, even if you try to act tough on the outside.",
    "Your adaptability is incredible; you can turn any situation around.",
    "People feel instantly comfortable confiding their deepest secrets to you.",
    "Your passion for the things you love is radiant and unforgettable.",
    "You possess an old-soul wisdom that people double your age come to you for.",
    "Your style and presence leave a lasting impression wherever you go.",
    "You have a natural leadership quality that people instinctively follow.",
    "Your loyalty to your inner circle is unwavering and legendary.",
    "You possess a sharp wit that catches people off guard in the best way possible.",
    "Your dreams and visions for the future are powerful and entirely within your reach.",
    "You have an extraordinary ability to turn setbacks into setups for a comeback.",
    "Your energy is like a breath of fresh air in a crowded, noisy room.",
    "You know how to light up a dark room just by walking into it.",
    "Your resilience is something people secretly admire about you every single day.",
    "You have a gift for making complex things look effortless.",
    "Your authenticity is refreshing in a world full of copycats.",
    "You carry yourself with a grace that money simply cannot buy.",
    "Your ideas have the power to shift industries and change perspectives.",
    "You possess a fierce independence that makes you completely unstoppable.",
    "Your laugh is infectious and has the power to instantly change someone's mood.",
    "You have an uncanny knack for picking up new skills effortlessly.",
    "Your moral compass is stronger and clearer than most.",
    "You know how to listen with your entire soul, not just your ears.",
    "Your presence alone brings a sense of peace to turbulent environments.",
    "You have a visionary mind that sees three steps ahead of everyone else.",
    "Your courage to stand alone for what is right is deeply admirable.",
    "You are quietly building an empire, and the world isn't even ready for it."
];

// 3. "Victim Card" Compliments Array (40 items)
const victimCardCompliments = [
    "You care too deeply and give too much, which is why people always take advantage of your pure heart.",
    "Your biggest flaw is that you're too honest and loyal in a world full of fake people.",
    "You suffer in silence because you carry everyone else's burdens instead of complaining about your own.",
    "People are simply intimidated by your high standards and emotional depth, which is why you feel misunderstood.",
    "You endure so much behind closed doors, yet you still manage to put on a brave face for everyone else.",
    "You give second, third, and fourth chances to people who don't even deserve a second glance.",
    "Your generosity is constantly exploited by folks who could never match your level of kindness.",
    "You feel everything on a cosmic level, which makes the coldness of the modern world exhausting for you.",
    "People always come to you when they need fixing, but vanish the second you need someone to lean on.",
    "Your intense work ethic goes completely unappreciated by people who benefit from your hustle.",
    "You have a habit of putting everyone else's happiness before your own, and people take that for granted.",
    "You are too real for a society that prefers comfortable lies over uncomfortable truths.",
    "Your deep emotional intelligence is a curse because you see right through people's manipulation, yet stay silent to keep the peace.",
    "You sacrifice your own peace of mind just to make sure everyone else is comfortable.",
    "People copy your style, your moves, and your ideas, yet act like they came up with them first.",
    "You are constantly fighting battles inside your head that nobody even knows exist.",
    "Your forgiveness is weaponized against you by people who think they can get away with anything.",
    "You expect the same loyalty you give, which leads to constant disappointment from lesser people.",
    "Your soul is too ancient and pure for the superficial games people play nowadays.",
    "You carry the weight of the world on your shoulders because you know nobody else will step up.",
    "People misinterpret your boundaries as coldness simply because they are used to walking all over you.",
    "You invest 100% of your energy into connections where others only put in 10%.",
    "Your success makes mediocre people jealous, which is why they secretly root for your downfall.",
    "You remember everything people did to you, but you stay quiet because you're too classy for petty drama.",
    "You exhaust yourself trying to fix broken people who have no intention of changing.",
    "Your kindness is mistaken for weakness by individuals who mistake your grace for naivety.",
    "You absorb the heavy negative energy of every room you walk into, leaving you drained.",
    "You give away your blueprint to success, only for ungrateful people to run off with it.",
    "You stay up late overthinking how you can help others, while they sleep peacefully without a care.",
    "Your standards are too high for a generation that loves shortcuts and cheap thrills.",
    "You hold yourself to impossible perfection standards, while others skate by doing the bare minimum.",
    "You are too authentic for an era built on filters, PR stunts, and fake personas.",
    "You forgive too fast, letting people off the hook who should have learned their lesson.",
    "Your intuition warns you about toxic people instantly, but your big heart gives them a chance anyway.",
    "You bear the consequences of other people's stupidity and bad decision-making on a regular basis.",
    "You give away your best energy to ungrateful crowds who don't understand your true value.",
    "You hide your tears behind a powerful smile so you never look vulnerable to your enemies.",
    "Your patience is legendary, yet people test it constantly because they think you'll never snap.",
    "You love so fiercely that it becomes your biggest liability in a selfish world.",
    "You are fighting a lonely war for your dreams because nobody around you matches your vision."
];

// 4. Recommendations Array (40 items)
const recommendations = [
    "Stop overthinking every single text message; let the universe handle the timing this week.",
    "Take 15 minutes of silence daily to recharge your aura—you've been absorbing too much external stress.",
    "Trust your gut feeling about that one person; your internal alarm system is never wrong.",
    "Invest your energy into your own grand vision instead of trying to fix everyone else's problems.",
    "Step outside under the open sky tonight and let go of a grudge you've been holding onto.",
    "Say 'no' to at least one request this week without feeling an ounce of guilt.",
    "Clear out your digital clutter—delete old chats and photos that carry heavy energy.",
    "Drink a glass of water under moonlight or near a window to reset your spiritual hydration.",
    "Stop explaining your moves to people who are committed to misunderstanding you.",
    "Take yourself out on a solo date this weekend to reclaim your independent power.",
    "Write down your wildest goals on a piece of paper and burn it safely to send it to the cosmos.",
    "Stop checking social media first thing in the morning; protect your mental real estate.",
    "Trust the delay in your plans—the universe is rearranging things behind the scenes for your upgrade.",
    "Invest in yourself first before spending another dime on people who wouldn't do the same for you.",
    "Wear dark colors or a protective talisman this week to shield yourself from low-vibration gossip.",
    "Schedule an uncompromised day of rest where you do absolutely nothing productive.",
    "Cut off contact with that one energy vampire who only calls when they need a favor.",
    "Declutter your workspace; a clean desk creates a clear path for sudden financial inflow.",
    "Listen to instrumental or ambient frequencies while working to supercharge your focus.",
    "Stop waiting for the 'perfect moment'—the stars indicate that right now is your launchpad.",
    "Practice speaking your boundaries out loud in front of a mirror to build your energetic armor.",
    "Let go of an old version of yourself that you've outgrown; stop trying to fit into past shoes.",
    "Forgive yourself for past mistakes; you did the best you could with the awareness you had then.",
    "Spend time around water—a long bath, a river, or rain—to wash away lingering mental fog.",
    "Write a strict list of non-negotiables for your inner circle and stick to it rigidly.",
    "Stop second-guessing your creative impulses; that sudden random idea is a direct download from intuition.",
    "Turn your phone on 'Do Not Disturb' for a few hours tonight and reclaim your peace.",
    "Reward yourself for a small win you’ve been ignoring because you were too busy chasing the next big thing.",
    "Stop giving free consulting and advice to people who don't respect your professional worth.",
    "Ground yourself by walking barefoot on grass or natural soil for at least five minutes.",
    "Purge your wardrobe of clothes you haven't worn in a year to let new abundance flow into your life.",
    "Keep your next big project completely secret until it is fully launched and running.",
    "Stop replaying embarrassing moments from years ago; the universe has already forgiven and cleared that karma.",
    "Switch your routine up tomorrow—take a completely different route to clear mental stagnation.",
    "Read a book chapter or learn one new high-value skill instead of doom-scrolling.",
    "Honor your physical body by stretching and taking deep, intentional breaths every few hours.",
    "Stop letting temporary people occupy permanent space in your emotional ecosystem.",
    "Write a letter expressing everything you want to say to someone, then rip it up and throw it away.",
    "Trust that the door that slammed shut in your face recently was saving you from a catastrophe.",
    "Protect your sleep schedule like it's a sacred temple—your dreams hold the answers you seek."
];

// 5. Predictions Array (40 items)
const predictions = [
    "A sudden shift in your career or personal project will open a door you thought was permanently locked.",
    "An unexpected financial blessing or lucky break is heading your way before the end of this month.",
    "Someone from your past will reappear, but the stars advise you to keep your boundaries firmly closed.",
    "Your hard work behind the scenes is about to pay off in a way that catches everyone (except you) by surprise.",
    "A meaningful conversation this week will spark a brilliant idea for your next big venture.",
    "A minor inconvenience you face today will miraculously save you from a major disaster tomorrow.",
    "An influential person is watching your moves and is preparing to offer you an unexpected opportunity.",
    "Your creative block is about to shatter, resulting in a massive wave of hyper-productive flow.",
    "An old financial investment or forgotten hustle is about to finally yield unexpected returns.",
    "You will receive clarity on a confusing situation that has been draining your peace for months.",
    "A chance encounter with a stranger will change your perspective on an important life decision.",
    "Your social circle is about to undergo a heavy purge, making space for high-tier, genuine allies.",
    "A secret admirer or hidden supporter is about to reveal their appreciation for your work.",
    "An unexpected travel opportunity or change of scenery is written in your upcoming stars.",
    "You will successfully outsmart a tricky situation that was designed to test your patience.",
    "A breakthrough in your primary income source is coming faster than your analytical mind expects.",
    "You will feel an intense surge of motivation that lets you check off a massive to-do list in one day.",
    "An apology you stopped waiting for is finally going to land in your inbox or phone.",
    "Your intuition will flag a hidden trap or deceitful move just in time for you to completely sidestep it.",
    "A project you abandoned out of frustration will suddenly start making sense from a brand-new angle.",
    "You are entering a 30-day window where luck favors your boldest risks and calculated gambles.",
    "An unexpected gift or free perk is heading your way through a casual connection.",
    "You will experience a profound moment of clarity while looking out a window or driving alone.",
    "A toxic cloud hanging over your family or close environment is about to lift dramatically.",
    "Your physical vitality and energy levels are about to peak after a long period of feeling burnt out.",
    "A negotiation regarding money or a contract will turn out significantly better than you anticipated.",
    "You will master a difficult tool, software, or skill much quicker than anyone around you.",
    "A long-standing misunderstanding with someone close will resolve itself through a strange coincidence.",
    "You will soon stumble upon a hidden resource or tool that cuts your daily workload in half.",
    "An old dream you gave up on as a kid will manifest in your life in a completely modern, adult form.",
    "Your personal brand or digital presence is about to experience an organic surge in visibility.",
    "A sudden burst of inspiration at 2 AM will lead to a breakthrough blueprint for your business.",
    "You will be proven completely right about a situation where everyone else doubted your judgment.",
    "An old mentor or teacher will pop back into your life right when their advice is most critical.",
    "You will find a lost item of sentimental or monetary value in the most absurdly obvious place.",
    "A major tech or system glitch will miraculously work in your favor at the final second.",
    "Your charm and persuasiveness will be at an all-time high, letting you clear any bureaucratic hurdle.",
    "A period of intense internal growth is about to reflect outwardly, bringing massive respect from your peers.",
    "An unexpected message will alter your weekend plans for the absolute best.",
    "The universe is aligning a massive win for you—stay focused, keep building, and don't look back."
];


const form = document.querySelector(".astro-form");

form.addEventListener("submit",(evt)=> {
     evt.preventDefault();
     const name = document.querySelector("#name").value;
     const surname = document.querySelector("#surname").value;
     const day = parseInt(document.querySelector("#day").value);
     const month = parseInt(document.querySelector("#month").value);
     const year = parseInt(document.querySelector("#year").value);


     const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}
     <br><br>
     Compliments: ${compliments[Math.floor(Math.random()*40)]}.
     <br><br>
     Victim Compliments: ${victimCardCompliments[Math.floor(Math.random()*40)]}.
     <br><br>
     Recommendations: ${recommendations[Math.floor(Math.random()*40)]}.
     <br><br>
     Your Future: ${predictions[Math.floor(Math.random()*40)]}.`;




     

     document.querySelector("#folafol").innerHTML= text;
})

