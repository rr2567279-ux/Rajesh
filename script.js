// ============================================
//   BIRTHDAY SURPRISE — script.js
// ============================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    // ─── LOADING SCREEN & MAIN ELEMENTS ────────
    const loginScreen = document.getElementById('login-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const surpriseScreen = document.getElementById('surprise-screen');
    const enterBtn = document.getElementById('enter-btn');
    const loadingHearts = document.getElementById('loading-hearts');

    // ─── LOGIN SCREEN ───────────────────────────
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Default credentials (you can change these)
    const CORRECT_USERNAME = 'ami';
    const CORRECT_PASSWORD = 'loosu';

    console.log('Script loaded. Login form:', loginForm);

    // ─── LOGIN PAGE SPARKLES & HEARTS ──────────
    function createLoginSparkles() {
        const loginScreen = document.getElementById('login-screen');
        const sparkles = ['✨', '💫', '⭐', '🌟', '✴️', '🌠'];
        const hearts = ['💖', '💕', '💗', '💝', '❤️', '💓'];
        const loveElements = ['✨', '💖', '💫', '💕', '🌹', '💘'];

        // Create random sparkles
        function spawnSparkle() {
            const sparkle = document.createElement('div');
            sparkle.classList.add('login-sparkle');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animation = 'sparkle-float ' + (2 + Math.random() * 3) + 's ease-out forwards';
            sparkle.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
            sparkle.style.opacity = Math.random() * 0.7 + 0.3;
            sparkle.style.filter = 'drop-shadow(0 0 4px rgba(255, 107, 157, 0.6))';
            loginScreen.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 5000);
        }

        // Create random hearts
        function spawnHeart() {
            const heart = document.createElement('div');
            heart.classList.add('login-sparkle');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animation = 'love-float ' + (3 + Math.random() * 4) + 's ease-out forwards';
            heart.style.fontSize = (1 + Math.random() * 1.8) + 'rem';
            heart.style.opacity = Math.random() * 0.6 + 0.3;
            heart.style.filter = 'drop-shadow(0 0 6px rgba(255, 107, 157, 0.7))';
            loginScreen.appendChild(heart);

            setTimeout(() => heart.remove(), 7000);
        }

        // Create love elements
        function spawnLoveElement() {
            const element = document.createElement('div');
            element.classList.add('login-sparkle');
            element.textContent = loveElements[Math.floor(Math.random() * loveElements.length)];
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            element.style.animation = 'love-float ' + (2.5 + Math.random() * 3.5) + 's ease-out forwards';
            element.style.fontSize = (0.9 + Math.random() * 1.3) + 'rem';
            element.style.opacity = Math.random() * 0.5 + 0.25;
            element.style.filter = 'drop-shadow(0 0 5px rgba(200, 125, 255, 0.6))';
            loginScreen.appendChild(element);

            setTimeout(() => element.remove(), 6000);
        }

        // Spawn sparkles every 600ms (increased frequency)
        setInterval(spawnSparkle, 600);

        // Spawn hearts every 900ms (increased frequency)
        setInterval(spawnHeart, 900);

        // Spawn love elements every 1000ms
        setInterval(spawnLoveElement, 1000);
    }

    // Start sparkles on login page
    createLoginSparkles();

    // ─── HARRY POTTER MAGICAL PARTICLES ────────
    function createMagicalParticles() {
        const loginScreen = document.getElementById('login-screen');
        const magicEmojis = ['✨', '⭐', '🌟', '✴️', '💫', '🔮', '🪄'];
        const magicColors = ['#FFD700', '#FFA500', '#FF69B4', '#9370DB'];

        function spawnMagicParticle() {
            const particle = document.createElement('div');
            particle.classList.add('magical-particle');
            particle.textContent = magicEmojis[Math.floor(Math.random() * magicEmojis.length)];

            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            particle.style.left = randomX + '%';
            particle.style.top = randomY + '%';

            const tx = (Math.random() - 0.5) * 100;
            particle.style.setProperty('--tx', tx + 'px');

            const duration = 2 + Math.random() * 3;
            particle.style.animation = `particleFloat ${duration}s ease-out forwards`;
            particle.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            particle.style.opacity = Math.random() * 0.7 + 0.3;

            loginScreen.appendChild(particle);

            setTimeout(() => particle.remove(), duration * 1000);
        }

        // Spawn magical particles every 500ms
        setInterval(spawnMagicParticle, 500);
    }

    // Start magical particles
    createMagicalParticles();

    // ─── INTERACTIVE MAGIC EFFECT ─────────────
    function addMagicClickEffect() {
        const loginScreen = document.getElementById('login-screen');

        loginScreen.addEventListener('mousemove', function (e) {
            // Occasionally spawn burst of particles on mouse movement
            if (Math.random() > 0.95) {
                for (let i = 0; i < 3; i++) {
                    const particle = document.createElement('div');
                    particle.textContent = ['✨', '⭐', '💫'][Math.floor(Math.random() * 3)];
                    particle.style.position = 'absolute';
                    particle.style.left = e.clientX + 'px';
                    particle.style.top = e.clientY + 'px';
                    particle.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
                    particle.style.opacity = '0.8';
                    particle.style.pointerEvents = 'none';
                    particle.style.zIndex = '5';
                    particle.style.animation = `particleFloat ${1.5 + Math.random() * 1.5}s ease-out forwards`;
                    particle.style.setProperty('--tx', (Math.random() - 0.5) * 60 + 'px');

                    loginScreen.appendChild(particle);

                    setTimeout(() => particle.remove(), 3000);
                }
            }
        });
    }

    addMagicClickEffect();

    // ─── SWEET TREATS SPAWNER ──────────────────
    function spawnSweetTreats() {
        const loginScreen = document.getElementById('login-screen');
        const treats = ['🍰', '🧁', '🍫', '🌈', '🎂'];

        function spawnTreat() {
            const treat = document.createElement('div');
            treat.textContent = treats[Math.floor(Math.random() * treats.length)];
            treat.style.position = 'absolute';
            treat.style.left = Math.random() * 100 + '%';
            treat.style.top = Math.random() * 100 + '%';
            treat.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
            treat.style.opacity = Math.random() * 0.5 + 0.3;
            treat.style.pointerEvents = 'none';
            treat.style.zIndex = '3';
            treat.style.animation = `treatFloat ${3 + Math.random() * 3}s ease-out forwards`;
            treat.style.filter = 'drop-shadow(0 0 8px rgba(255, 165, 0, 0.5))';

            loginScreen.appendChild(treat);

            setTimeout(() => treat.remove(), 6000);
        }

        // Spawn sweet treats every 1500ms
        setInterval(spawnTreat, 1500);
    }

    // Add CSS animation for treats
    const style = document.createElement('style');
    style.textContent = `
  @keyframes treatFloat {
    0% { opacity: 0.3; transform: translateY(100px) scale(0.5); }
    50% { opacity: 1; transform: translateY(0) scale(1.05); }
    100% { opacity: 0; transform: translateY(-100px) scale(0.8); }
  }
`;
    document.head.appendChild(style);

    spawnSweetTreats();

    // ─── RAINBOW SPAWNER ───────────────────────
    function spawnRainbows() {
        const loginScreen = document.getElementById('login-screen');

        function spawnRainbow() {
            const rainbow = document.createElement('div');
            rainbow.textContent = '🌈';
            rainbow.style.position = 'absolute';
            rainbow.style.left = Math.random() * 100 + '%';
            rainbow.style.top = Math.random() * 100 + '%';
            rainbow.style.fontSize = (2.5 + Math.random() * 2) + 'rem';
            rainbow.style.opacity = Math.random() * 0.6 + 0.2;
            rainbow.style.pointerEvents = 'none';
            rainbow.style.zIndex = '2';
            rainbow.style.filter = 'drop-shadow(0 0 12px rgba(255, 150, 0, 0.5))';
            rainbow.style.animation = `rainbowFloat ${3.5 + Math.random() * 2.5}s ease-out forwards`;

            loginScreen.appendChild(rainbow);

            setTimeout(() => rainbow.remove(), 6000);
        }

        // Add CSS animation for spawned rainbows
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
      @keyframes rainbowFloat {
        0% { opacity: 0; transform: translateY(100px) rotate(0deg) scale(0.5); }
        50% { opacity: 1; transform: translateY(0) rotate(15deg) scale(1.1); }
        100% { opacity: 0; transform: translateY(-150px) rotate(45deg) scale(0.8); }
      }
    `;
        document.head.appendChild(rainbowStyle);

        // Spawn rainbows every 2000ms
        setInterval(spawnRainbow, 2000);
    }

    spawnRainbows();

    // ─── NICKNAME SPAWNER ──────────────────────
    function spawnNicknames() {
        const loginScreen = document.getElementById('login-screen');
        const nicknames = ['loosu', 'mental', 'pythiyam', 'topper', 'amiiiii', 'busu', 'kutty', 'thangoooo', 'eruma', 'amirrrrr', 'kundachii'];
        const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#C71585', '#FF00FF', '#FF85C1', '#DB7093', '#FF6B9D', '#D946A6', '#FF1493'];

        function spawnNickname() {
            const nickname = document.createElement('div');
            nickname.textContent = nicknames[Math.floor(Math.random() * nicknames.length)];
            nickname.style.position = 'absolute';
            nickname.style.left = Math.random() * 100 + '%';
            nickname.style.top = Math.random() * 100 + '%';
            nickname.style.fontSize = (1.5 + Math.random() * 1.8) + 'rem';
            nickname.style.opacity = Math.random() * 0.6 + 0.2;
            nickname.style.pointerEvents = 'none';
            nickname.style.zIndex = '2';
            nickname.style.fontFamily = "'Great Vibes', cursive";
            nickname.style.fontWeight = 'bold';
            nickname.style.color = colors[Math.floor(Math.random() * colors.length)];
            nickname.style.textShadow = '0 0 15px rgba(255, 107, 157, 0.8), 0 0 30px rgba(200, 125, 255, 0.6)';
            nickname.style.letterSpacing = '2px';
            nickname.style.animation = `nicknameFloat ${3.5 + Math.random() * 3}s ease-out forwards`;

            loginScreen.appendChild(nickname);

            setTimeout(() => nickname.remove(), 6500);
        }

        // Add CSS animation for spawned nicknames
        const nicknameStyle = document.createElement('style');
        nicknameStyle.textContent = `
      @keyframes nicknameFloat {
        0% { opacity: 0; transform: translateY(100px) rotate(-20deg) scale(0.5); }
        50% { opacity: 1; transform: translateY(0) rotate(10deg) scale(1.1); }
        100% { opacity: 0; transform: translateY(-150px) rotate(20deg) scale(0.8); }
      }
    `;
        document.head.appendChild(nicknameStyle);

        // Spawn nicknames every 2500ms
        setInterval(spawnNickname, 2500);
    }

    spawnNicknames();

    // ─── QUIZ DATA (6 personal questions) ──────
    const quizQuestions = [
        {
            q: '🍽️ Which food does Amii like the most?',
            options: ['Chicken Rice', 'Barotta', 'Chappati', 'Biryani'],
            answer: 'Chicken Rice'
        },
        {
            q: '🎵 Which song does Amii like the most?',
            options: ['Oru Naalil', 'Neelothi', 'Aval', 'Aadhi'],
            answer: 'Oru Naalil'
        },
        {
            q: '💕 Which person does Amii trust the most?',
            options: ['Yazhini', 'Jai', 'Rajesh', 'No one'],
            answer: 'Rajesh'
        },
        {
            q: '🌸 What nickname does Rajesh call Amii?',
            options: ['Amirthaa', 'Bujik Bujik Amii', 'Town', 'None of these'],
            answer: 'Bujik Bujik Amii'
        },
        {
            q: '💍 Which ornament does Amii like the most?',
            options: ['Bangles', 'Clips', 'Necklace', 'Earrings'],
            answer: 'Clips'
        },
        {
            q: '⚡ What is another name for Rajesh?',
            options: ['Ruok', 'Zoro', 'Speed', 'Zeus'],
            answer: 'Speed'
        }
    ];

    // ─── QUIZ SCREEN LOGIC ─────────────────────
    const quizScreen = document.getElementById('quiz-screen');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizProgressBar = document.getElementById('quiz-progress-bar');
    const quizProgressTxt = document.getElementById('quiz-progress-text');
    const quizQuestionArea = document.getElementById('quiz-question-area');
    const quizResult = document.getElementById('quiz-result');
    const quizResultEmoji = document.getElementById('quiz-result-emoji');
    const quizResultTitle = document.getElementById('quiz-result-title');
    const quizResultMsg = document.getElementById('quiz-result-msg');
    const quizContinueBtn = document.getElementById('quiz-continue-btn');
    const quizRetryBtn = document.getElementById('quiz-retry-btn');

    let currentQ = 0;
    let wrongCount = 0;

    // ── Quiz background floating hearts ───────
    let quizEffectInterval = null;
    function startQuizEffects() {
        if (quizEffectInterval) return;
        const floaters = ['💖', '💕', '✨', '🌸', '💫', '⭐', '🌟', '💗', '🎀'];
        quizEffectInterval = setInterval(() => {
            const el = document.createElement('div');
            el.textContent = floaters[Math.floor(Math.random() * floaters.length)];
            el.style.cssText = `
                position:fixed;
                left:${Math.random() * 100}%;
                top:${Math.random() * 100}%;
                font-size:${1 + Math.random() * 1.6}rem;
                opacity:0;
                pointer-events:none;
                z-index:9990;
                animation: quizFloatUp ${2.5 + Math.random() * 2.5}s ease-out forwards;
            `;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 5000);
        }, 400);

        // Add quiz float-up keyframe if not already added
        if (!document.getElementById('quiz-float-style')) {
            const s = document.createElement('style');
            s.id = 'quiz-float-style';
            s.textContent = `
                @keyframes quizFloatUp {
                    0%   { opacity:0;   transform: translateY(30px) scale(0.5) rotate(-10deg); }
                    20%  { opacity:0.9; transform: translateY(0px)  scale(1.1) rotate(5deg); }
                    80%  { opacity:0.7; transform: translateY(-60px) scale(1) rotate(-5deg); }
                    100% { opacity:0;   transform: translateY(-120px) scale(0.8) rotate(10deg); }
                }
                @keyframes quizCorrectRing {
                    0%   { transform: scale(0.5); opacity:1; }
                    100% { transform: scale(3);   opacity:0; }
                }
                @keyframes quizWrongFlash {
                    0%,100% { background: transparent; }
                    30%     { background: rgba(239,68,68,0.08); }
                }
            `;
            document.head.appendChild(s);
        }
    }

    function stopQuizEffects() {
        clearInterval(quizEffectInterval);
        quizEffectInterval = null;
    }

    // ── Heart burst on correct answer ─────────
    function burstHeartsAt(x, y) {
        const emojis = ['💖', '💕', '✨', '🌸', '💫', '⭐'];
        for (let i = 0; i < 14; i++) {
            setTimeout(() => {
                const h = document.createElement('div');
                h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                const angle = (Math.PI * 2 * i) / 14;
                const dist = 60 + Math.random() * 80;
                h.style.cssText = `
                    position:fixed;
                    left:${x}px; top:${y}px;
                    font-size:${1.2 + Math.random() * 1}rem;
                    opacity:1;
                    pointer-events:none;
                    z-index:99999;
                    transition: all 0.9s ease-out;
                `;
                document.body.appendChild(h);
                requestAnimationFrame(() => {
                    h.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0.3)`;
                    h.style.opacity = '0';
                });
                setTimeout(() => h.remove(), 1000);
            }, i * 30);
        }
    }

    // ── Big celebration on quiz pass ──────────
    function celebrateQuizPass() {
        const emojis = ['🎉', '💖', '✨', '🌟', '💕', '🎀', '🌸', '⭐', '💫'];
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const el = document.createElement('div');
                el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                el.style.cssText = `
                    position:fixed;
                    left:${Math.random() * 100}vw;
                    top:-10px;
                    font-size:${1.5 + Math.random() * 2}rem;
                    opacity:1;
                    pointer-events:none;
                    z-index:99999;
                    animation: celebFall ${2 + Math.random() * 2}s ease-in forwards;
                `;
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 4000);
            }, i * 80);
        }
        if (!document.getElementById('celeb-style')) {
            const s = document.createElement('style');
            s.id = 'celeb-style';
            s.textContent = `
                @keyframes celebFall {
                    0%   { transform: translateY(-20px) rotate(0deg);   opacity:1; }
                    80%  { opacity:1; }
                    100% { transform: translateY(105vh) rotate(720deg); opacity:0; }
                }
            `;
            document.head.appendChild(s);
        }
    }

    function startQuiz() {
        currentQ = 0;
        wrongCount = 0;
        quizQuestionArea.style.display = 'block';
        quizResult.style.display = 'none';
        quizContinueBtn.style.display = 'none';
        quizRetryBtn.style.display = 'none';
        startQuizEffects();
        showQuestion(0);
    }

    function showQuestion(idx) {
        const data = quizQuestions[idx];
        quizQuestion.textContent = data.q;
        quizFeedback.textContent = '';
        quizFeedback.className = 'quiz-feedback';

        // Progress bar
        quizProgressBar.style.width = ((idx + 1) / quizQuestions.length * 100) + '%';
        quizProgressTxt.textContent = `Question ${idx + 1} of ${quizQuestions.length}`;

        // Render options
        quizOptions.innerHTML = '';
        // Shuffle options
        const shuffled = [...data.options].sort(() => Math.random() - 0.5);
        shuffled.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerHTML = `<span>🌸</span> ${opt}`;
            btn.addEventListener('click', () => handleAnswer(btn, opt, data.answer, shuffled));
            quizOptions.appendChild(btn);
        });
    }

    function handleAnswer(clickedBtn, chosen, correct, shuffled) {
        const allBtns = quizOptions.querySelectorAll('.quiz-option-btn');

        if (chosen === correct) {
            clickedBtn.classList.add('correct');
            quizFeedback.textContent = '✅ Correct! You really are my Amii 💖';
            quizFeedback.className = 'quiz-feedback correct';
            allBtns.forEach(b => b.classList.add('disabled'));

            // Heart burst at button position
            const rect = clickedBtn.getBoundingClientRect();
            burstHeartsAt(rect.left + rect.width / 2, rect.top + rect.height / 2);

            setTimeout(() => {
                currentQ++;
                if (currentQ < quizQuestions.length) {
                    showQuestion(currentQ);
                } else {
                    showResult(true);
                }
            }, 1200);
        } else {
            clickedBtn.classList.add('wrong');
            wrongCount++;
            quizFeedback.textContent = '❌ Hmm, try another one! 💕';
            quizFeedback.className = 'quiz-feedback wrong';

            // Flash screen red slightly
            quizScreen.style.animation = 'quizWrongFlash 0.4s ease';
            setTimeout(() => { quizScreen.style.animation = ''; }, 400);

            setTimeout(() => {
                clickedBtn.classList.remove('wrong');
                clickedBtn.classList.add('disabled');
                quizFeedback.textContent = '';
                quizFeedback.className = 'quiz-feedback';
            }, 700);
        }
    }

    function showResult(passed) {
        quizQuestionArea.style.display = 'none';
        quizResult.style.display = 'block';

        if (passed) {
            celebrateQuizPass();
            quizResultEmoji.textContent = '🎉';
            quizResultTitle.textContent = 'You are definitely my Amii! 💖';
            quizResultMsg.textContent = 'You answered all questions perfectly! Only my real Amii knows these 🌸 Now enter our special world! 🎂✨';
            quizContinueBtn.textContent = 'Login 💖 Enter Our Website';
            quizContinueBtn.style.display = 'inline-block';
            quizRetryBtn.style.display = 'none';
        } else {
            quizResultEmoji.textContent = '🥲';
            quizResultTitle.textContent = 'Hmm, are you really my Amii? 🤔';
            quizResultMsg.textContent = 'Some answers were wrong! Only my real Amii knows these. Try again! 💕';
            quizContinueBtn.style.display = 'none';
            quizRetryBtn.style.display = 'inline-block';
        }
    }

    quizContinueBtn.addEventListener('click', () => {
        stopQuizEffects();
        quizScreen.classList.remove('visible');
        quizScreen.classList.add('hidden');
        // Magic burst
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.textContent = ['✨', '⭐', '🌟', '💖', '💫'][Math.floor(Math.random() * 5)];
                p.style.cssText = `position:fixed;left:${window.innerWidth / 2}px;top:${window.innerHeight / 2}px;font-size:${1.5 + Math.random() * 1.5}rem;opacity:1;pointer-events:none;z-index:99999;animation:particleFloat ${1.5 + Math.random()}s ease-out forwards;`;
                p.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 3000);
            }, i * 50);
        }
        setTimeout(() => {
            loadingScreen.classList.add('visible');
        }, 500);
    });

    quizRetryBtn.addEventListener('click', () => {
        startQuiz();
    });

    // ─── LOGIN FORM ─────────────────────────────
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
                loginError.textContent = '';

                // Magical burst effect
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.textContent = ['✨', '⭐', '🌟', '💫', '✴️'][Math.floor(Math.random() * 5)];
                        particle.style.position = 'absolute';
                        particle.style.left = window.innerWidth / 2 + 'px';
                        particle.style.top = window.innerHeight / 2 + 'px';
                        particle.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
                        particle.style.opacity = '1';
                        particle.style.pointerEvents = 'none';
                        particle.style.zIndex = '9999';
                        particle.style.animation = `particleFloat ${2 + Math.random() * 1}s ease-out forwards`;
                        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
                        loginScreen.appendChild(particle);
                        setTimeout(() => particle.remove(), 3500);
                    }, i * 50);
                }

                // Hide login → show quiz
                setTimeout(() => {
                    loginScreen.classList.add('hidden');
                    quizScreen.classList.add('visible');
                    startQuiz();
                }, 350);

            } else {
                loginError.textContent = '❌ Invalid username or password';
                usernameInput.value = '';
                passwordInput.value = '';
            }
        });
    } else {
        console.error('Login form not found!');
    }

    // ─── LOADING SCREEN ─────────────────────────


    // Spawn floating hearts on loading screen
    function spawnLoadingHearts() {
        const emojis = ['💖', '💕', '💗', '✨', '💫', '🌸'];
        for (let i = 0; i < 25; i++) {
            const h = document.createElement('div');
            h.classList.add('heart-float');
            h.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            h.style.setProperty('--dur', (4 + Math.random() * 6) + 's');
            h.style.setProperty('--delay', (Math.random() * 8) + 's');
            h.style.left = Math.random() * 100 + '%';
            h.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
            loadingHearts.appendChild(h);
        }
    }
    spawnLoadingHearts();

    // Surprise screen carousel
    let currentSlide = 0;

    // Wait for elements to be ready
    setTimeout(() => {
        const surpriseItems = document.querySelectorAll('.surprise-item');
        const dots = document.querySelectorAll('.carousel-dots .dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        function showSlide(index) {
            surpriseItems.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (surpriseItems[index]) surpriseItems[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + surpriseItems.length) % surpriseItems.length;
                showSlide(currentSlide);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % surpriseItems.length;
                showSlide(currentSlide);
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentSlide = parseInt(e.target.getAttribute('data-index'));
                showSlide(currentSlide);
            });
        });
    }, 100);

    // Continue to main content
    setTimeout(() => {
        const continueBtn = document.getElementById('continue-btn');
        const skipBtn = document.getElementById('close-surprise-btn');

        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                surpriseScreen.classList.remove('visible');
                setTimeout(() => {
                    mainContent.classList.add('visible');
                    setTimeout(() => {
                        launchHeroConfetti();
                    }, 900);
                }, 500);
            });
        }

        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                surpriseScreen.classList.remove('visible');
                setTimeout(() => {
                    mainContent.classList.add('visible');
                    setTimeout(() => {
                        launchHeroConfetti();
                    }, 900);
                }, 500);
            });
        }
    }, 100);

    // Enter button - show surprise page instead of main content
    enterBtn.addEventListener('click', () => {
        initAudio();
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            surpriseScreen.classList.add('visible');
        }, 500);
    });

    // ─── BACKGROUND MUSIC — Arctic Monkeys ───────
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.5;
    let musicStarted = false;
    let muted = false;

    function initAudio() {
        if (musicStarted) return;
        musicStarted = true;
        bgMusic.play().catch(() => { });
        // Fade in
        bgMusic.volume = 0;
        let vol = 0;
        const fadeIn = setInterval(() => {
            vol = Math.min(vol + 0.02, 0.5);
            bgMusic.volume = vol;
            if (vol >= 0.5) clearInterval(fadeIn);
        }, 100);
    }

    document.getElementById('music-btn').addEventListener('click', () => {
        if (!musicStarted) { initAudio(); return; }
        muted = !muted;
        bgMusic.muted = muted;
        document.getElementById('music-btn').innerHTML = muted ? '🔇' : '🎵';
    });

    // Volume boost for surprise
    function boostVolume() {
        if (!musicStarted || muted) return;
        bgMusic.volume = Math.min(bgMusic.volume + 0.2, 1.0);
        setTimeout(() => { if (!muted) bgMusic.volume = 0.5; }, 5000);
    }

    // ─── GLOBAL SPARKLES (Canvas) ───────────────
    const sparkleCanvas = document.getElementById('sparkle-canvas');
    const sCtx = sparkleCanvas.getContext('2d');
    let sparkles = [];

    function startSparkles() {
        resizeSparkleCanvas();
        window.addEventListener('resize', resizeSparkleCanvas);
        spawnSparkles();
        animateSparkles();
    }

    function resizeSparkleCanvas() {
        sparkleCanvas.width = window.innerWidth;
        sparkleCanvas.height = window.innerHeight;
    }

    function spawnSparkles() {
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                sparkles.push({
                    x: Math.random() * sparkleCanvas.width,
                    y: Math.random() * sparkleCanvas.height,
                    r: Math.random() * 3 + 1,
                    alpha: 1, life: 0,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: -Math.random() * 0.8 - 0.3,
                    color: ['#ff6b9d', '#c77dff', '#ffb347', '#fff'][Math.floor(Math.random() * 4)]
                });
            }
        }, 200);
    }

    function animateSparkles() {
        sCtx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
        sparkles = sparkles.filter(s => s.alpha > 0.02);
        sparkles.forEach(s => {
            s.x += s.vx; s.y += s.vy;
            s.life += 0.02; s.alpha = Math.cos(s.life * 1.5) * 0.5 + 0.5;
            if (s.life > 1) s.alpha -= 0.03;
            sCtx.save();
            sCtx.globalAlpha = Math.max(0, s.alpha);
            sCtx.fillStyle = s.color;
            sCtx.shadowColor = s.color;
            sCtx.shadowBlur = 6;
            sCtx.beginPath();
            sCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            sCtx.fill();
            sCtx.restore();
        });
        requestAnimationFrame(animateSparkles);
    }

    // ─── HERO CONFETTI ───────────────────────────
    const heroCanvas = document.getElementById('hero-canvas');
    const hCtx = heroCanvas.getContext('2d');
    let confetti = [];

    function launchHeroConfetti() {
        heroCanvas.width = heroCanvas.offsetWidth;
        heroCanvas.height = heroCanvas.offsetHeight;
        for (let i = 0; i < 180; i++) {
            confetti.push({
                x: heroCanvas.width / 2, y: heroCanvas.height / 2,
                vx: (Math.random() - 0.5) * 14,
                vy: (Math.random() - 0.6) * 14 - 4,
                r: Math.random() * 6 + 3,
                color: ['#ff6b9d', '#c77dff', '#ffb347', '#fff', '#ff4d8d'][Math.floor(Math.random() * 5)],
                alpha: 1, rot: Math.random() * 360,
                rotV: (Math.random() - 0.5) * 6
            });
        }
        animateConfetti();
    }

    function animateConfetti() {
        hCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        confetti = confetti.filter(c => c.alpha > 0.05);
        confetti.forEach(c => {
            c.x += c.vx; c.y += c.vy;
            c.vy += 0.25; c.vx *= 0.99;
            c.alpha -= 0.007; c.rot += c.rotV;
            hCtx.save();
            hCtx.globalAlpha = c.alpha;
            hCtx.fillStyle = c.color;
            hCtx.translate(c.x, c.y);
            hCtx.rotate(c.rot * Math.PI / 180);
            hCtx.fillRect(-c.r / 2, -c.r / 2, c.r, c.r * 1.8);
            hCtx.restore();
        });
        if (confetti.length) requestAnimationFrame(animateConfetti);
    }

    // ─── PHOTO GALLERY HEARTS ────────────────────
    function spawnFloatingHearts(container, count = 12) {
        const emojis = ['💖', '💕', '💗', '🌸', '✨'];
        const existing = container.querySelectorAll('.heart-float');
        if (existing.length) return;
        for (let i = 0; i < count; i++) {
            const h = document.createElement('div');
            h.classList.add('heart-float');
            h.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            h.style.setProperty('--dur', (3 + Math.random() * 5) + 's');
            h.style.setProperty('--delay', (Math.random() * 5) + 's');
            h.style.left = Math.random() * 90 + '%';
            h.style.bottom = '0';
            h.style.fontSize = (0.6 + Math.random() * 0.9) + 'rem';
            container.appendChild(h);
        }
    }

    // ─── TYPEWRITER ──────────────────────────────
    const loveMessage = `My dearest Amiiiiii 💖

There are no words beautiful enough to describe what you mean to me. Every morning I wake up and you are my first thought — every night, my last. You are everything I never knew I needed, and more than everything I ever dreamed of.

You have this magical way of making ordinary moments extraordinary. Your laughter is my favourite sound in the entire universe. Your smile — oh, that smile — it genuinely stops my heart every single time.

I love how you care, how deeply you feel everything, how you light up any room you step into. I love the way you see the world, through eyes so full of wonder and warmth.

Loving you is the greatest adventure of my life. Every day with you is a gift I never take for granted. You make me want to be better, love deeper, and hold every moment a little tighter.

On your birthday, I want you to know — you are not just loved. You are cherished. Adored. Treasured. You are my person, my safe place, my whole world.

Happy Birthday, my love. May this year bring you all the joy you so generously give to everyone around you. 🎂✨

Forever yours, with all my heart 💕`;

    let typeIdx = 0, typeStarted = false;
    const typeEl = document.getElementById('typewriter-text');

    function startTypewriter() {
        if (typeStarted) return;
        typeStarted = true;

        function type() {
            if (typeIdx < loveMessage.length) {
                typeEl.innerHTML = loveMessage.slice(0, typeIdx + 1).replace(/\n/g, '<br>') + '<span class="cursor-blink">|</span>';
                typeIdx++;
                setTimeout(type, typeIdx < 50 ? 40 : 22);
            } else {
                typeEl.innerHTML = loveMessage.replace(/\n/g, '<br>') + '<span class="cursor-blink">|</span>';
            }
        }
        type();
    }

    // ─── FIXED SPECIAL DATE (06/03/2006) ────────
    // Fixed Date: Amiiiiii's Birthday — 6th March 2006 🎂
    const FIXED_DATE = {
        day: '06',
        month: '03',
        year: '2006'
    };

    function initFixedDate() {
        const dEl = document.getElementById('cd-days');
        const mEl = document.getElementById('cd-hours');
        const yEl = document.getElementById('cd-minutes');

        if (dEl) dEl.textContent = FIXED_DATE.day;
        if (mEl) mEl.textContent = FIXED_DATE.month;
        if (yEl) yEl.textContent = FIXED_DATE.year;
    }

    initFixedDate();

    // ─── FIREWORKS ───────────────────────────────
    const fwCanvas = document.getElementById('fireworks-canvas');
    const fwCtx = fwCanvas.getContext('2d');
    let fwParticles = [], fwRunning = false;

    function launchFireworks() {
        fwCanvas.style.display = 'block';
        fwCanvas.width = window.innerWidth;
        fwCanvas.height = window.innerHeight;
        fwRunning = true;
        // Spawn multiple bursts
        for (let b = 0; b < 8; b++) {
            setTimeout(() => spawnBurst(), b * 300);
        }
        setTimeout(() => {
            fwRunning = false;
        }, 5000);
        animateFireworks();
    }

    function spawnBurst() {
        const x = 0.2 * fwCanvas.width + Math.random() * 0.6 * fwCanvas.width;
        const y = 0.15 * fwCanvas.height + Math.random() * 0.45 * fwCanvas.height;
        const colors = ['#ff6b9d', '#c77dff', '#ffb347', '#fff', '#ff4d8d', '#7fffd4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 80; i++) {
            const angle = (Math.PI * 2 * i) / 80;
            const speed = 3 + Math.random() * 5;
            fwParticles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1, r: Math.random() * 3 + 1.5,
                color, trail: []
            });
        }
    }

    function animateFireworks() {
        // Removed black overlay - let particles disappear naturally
        fwParticles = fwParticles.filter(p => p.alpha > 0.03);
        fwParticles.forEach(p => {
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > 6) p.trail.shift();
            p.x += p.vx; p.y += p.vy;
            p.vy += 0.12; p.vx *= 0.98;
            p.alpha -= 0.018;

            // Trail
            p.trail.forEach((t, i) => {
                fwCtx.globalAlpha = (i / p.trail.length) * p.alpha * 0.4;
                fwCtx.fillStyle = p.color;
                fwCtx.beginPath();
                fwCtx.arc(t.x, t.y, p.r * 0.6, 0, Math.PI * 2);
                fwCtx.fill();
            });

            fwCtx.globalAlpha = p.alpha;
            fwCtx.fillStyle = p.color;
            fwCtx.shadowColor = p.color;
            fwCtx.shadowBlur = 8;
            fwCtx.beginPath();
            fwCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            fwCtx.fill();
            fwCtx.shadowBlur = 0;
        });

        fwCtx.globalAlpha = 1;

        if (fwParticles.length || fwRunning) {
            requestAnimationFrame(animateFireworks);
        } else {
            fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
            fwCanvas.style.display = 'none';
        }
    }

    // ─── BALLOONS ────────────────────────────────
    const balloonColors = ['#ff6b9d', '#c77dff', '#ffb347', '#7fffd4', '#ff4d8d', '#87ceeb', '#ffd700'];

    function launchBalloons() {
        for (let i = 0; i < 14; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.classList.add('balloon');
                const c = balloonColors[Math.floor(Math.random() * balloonColors.length)];
                balloon.style.background = `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), ${c})`;
                balloon.style.left = (5 + Math.random() * 90) + '%';
                balloon.style.animationDuration = (4 + Math.random() * 3) + 's';
                balloon.style.boxShadow = `0 0 16px ${c}88`;
                document.body.appendChild(balloon);
                setTimeout(() => balloon.remove(), 8000);
            }, i * 250);
        }
    }

    // ─── SURPRISE BUTTON ─────────────────────────
    document.getElementById('surprise-btn').addEventListener('click', () => {
        if (!musicStarted) initAudio();
        boostVolume();
        launchFireworks();
        launchBalloons();

        setTimeout(() => {
            const overlay = document.getElementById('final-overlay');
            overlay.style.display = 'flex';
        }, 1800);
    });

    document.querySelector('#final-overlay .close-btn').addEventListener('click', () => {
        document.getElementById('final-overlay').style.display = 'none';
        fwCanvas.style.display = 'none';
        fwParticles = [];
    });

    // ─── INTERSECTION OBSERVER (scroll animations) ─
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger typewriter when love letter is visible
                if (entry.target.id === 'love-letter-card') {
                    setTimeout(startTypewriter, 400);
                    spawnFloatingHearts(entry.target.querySelector('.letter-hearts'), 16);
                }
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));

    // ─── GALLERY OVERLAY OPEN / CLOSE ────────────
    const galleryPage = document.getElementById('gallery-page');
    const openGalleryBtn = document.getElementById('open-gallery-btn');
    const closeGalleryBtn = document.getElementById('close-gallery-btn');

    openGalleryBtn.addEventListener('click', () => {
        galleryPage.style.display = 'flex';
        requestAnimationFrame(() => {
            galleryPage.classList.add('open');
        });
        // Trigger fade-in on gallery cards
        galleryPage.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));
    });

    closeGalleryBtn.addEventListener('click', () => {
        galleryPage.classList.remove('open');
        galleryPage.addEventListener('transitionend', () => {
            galleryPage.style.display = 'none';
        }, { once: true });
    });

    // ─── LIGHTBOX ────────────────────────────────
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const lbVideo = document.getElementById('lb-video');
    const lbCaption = document.getElementById('lb-caption');
    const lbClose = document.getElementById('lb-close');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');

    let lbImages = [], lbIndex = 0;

    function openLightbox(idx) {
        lbIndex = idx;
        const card = lbImages[idx];
        const isVideo = card.getAttribute('data-type') === 'video';
        const caption = card.querySelector('.gallery-caption').textContent;
        lbCaption.textContent = caption;

        if (isVideo) {
            const videoSrc = card.querySelector('video').src;
            lbVideo.src = videoSrc;
            lbVideo.style.display = 'block';
            lbImg.style.display = 'none';
            lbVideo.load();
            lbVideo.play().catch(() => {});
        } else {
            const imgSrc = card.querySelector('img').src;
            lbImg.src = imgSrc;
            lbImg.style.display = 'block';
            lbVideo.style.display = 'none';
            lbVideo.pause();
        }

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lbImg.src = '';
        lbVideo.src = '';
        lbVideo.pause();
    }

    function showNext() {
        lbIndex = (lbIndex + 1) % lbImages.length;
        const card = lbImages[lbIndex];
        const isVideo = card.getAttribute('data-type') === 'video';
        const caption = card.querySelector('.gallery-caption').textContent;

        if (isVideo) {
            lbImg.style.opacity = '0';
            lbVideo.style.opacity = '0';
            lbVideo.pause();
            setTimeout(() => {
                const videoSrc = card.querySelector('video').src;
                lbVideo.src = videoSrc;
                lbVideo.style.display = 'block';
                lbImg.style.display = 'none';
                lbCaption.textContent = caption;
                lbVideo.load();
                lbVideo.play().catch(() => {});
                lbVideo.style.opacity = '1';
            }, 180);
        } else {
            lbVideo.pause();
            lbVideo.style.opacity = '0';
            lbImg.style.opacity = '0';
            setTimeout(() => {
                const imgSrc = card.querySelector('img').src;
                lbImg.src = imgSrc;
                lbImg.style.display = 'block';
                lbVideo.style.display = 'none';
                lbCaption.textContent = caption;
                lbImg.style.opacity = '1';
            }, 180);
        }
    }

    function showPrev() {
        lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
        const card = lbImages[lbIndex];
        const isVideo = card.getAttribute('data-type') === 'video';
        const caption = card.querySelector('.gallery-caption').textContent;

        if (isVideo) {
            lbImg.style.opacity = '0';
            lbVideo.style.opacity = '0';
            lbVideo.pause();
            setTimeout(() => {
                const videoSrc = card.querySelector('video').src;
                lbVideo.src = videoSrc;
                lbVideo.style.display = 'block';
                lbImg.style.display = 'none';
                lbCaption.textContent = caption;
                lbVideo.load();
                lbVideo.play().catch(() => {});
                lbVideo.style.opacity = '1';
            }, 180);
        } else {
            lbVideo.pause();
            lbVideo.style.opacity = '0';
            lbImg.style.opacity = '0';
            setTimeout(() => {
                const imgSrc = card.querySelector('img').src;
                lbImg.src = imgSrc;
                lbImg.style.display = 'block';
                lbVideo.style.display = 'none';
                lbCaption.textContent = caption;
                lbImg.style.opacity = '1';
            }, 180);
        }
    }

    // Wire up gallery cards
    document.querySelectorAll('.gallery-card').forEach((card, i) => {
        lbImages.push(card);
        card.addEventListener('click', () => openLightbox(i));
    });

    // Hover-to-preview for video cards
    document.querySelectorAll('.gallery-video-card').forEach(card => {
        const video = card.querySelector('.gallery-video');
        const playBtn = card.querySelector('.gallery-video-play');
        if (!video) return;
        card.addEventListener('mouseenter', () => {
            video.play().catch(() => {});
            if (playBtn) playBtn.style.opacity = '0.6';
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            if (playBtn) playBtn.style.opacity = '1';
        });
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', showPrev);
    lbNext.addEventListener('click', showNext);

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

}); // End of DOMContentLoaded
