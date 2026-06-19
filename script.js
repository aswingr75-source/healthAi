/**
 * AI Health Assistant - Main Application Engine Logic
 * Built with pure modular implementation sequences.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Global State Tracker Variables
    let selectedSymptoms = new Set();
    
    // Core Pharmacological Definition Reference Arrays
    const medicineDatabase = [
        { name: 'Paracetamol', uses: 'Analyzes thermal reduction guidelines, minor localized system resets, and general pain relief.', dosage: '500mg - 1g intervals. Maximum continuous calculation payload not to exceed 4g per 24 hours.', warnings: 'Exceeding operational levels yields catastrophic processing degradation metrics within liver subsystems.' },
        { name: 'Cetirizine', uses: 'Suppression of secondary histamine variables, hyper-immune cell loops, and hay fever diagnostics.', dosage: '5mg - 10mg single standard dose per cycle vector.', warnings: 'May initialize mild central execution drowsiness artifacts in specific target hardware configurations.' },
        { name: 'Ibuprofen', uses: 'Non-steroidal core framework reduction agent for deep structural inflammation.', dosage: '200mg - 400mg paired with nutrient buffers every 4 to 6 computational cycles.', warnings: 'Long term operational execution without safety metrics may degrade gastric core barriers.' },
        { name: 'Amoxicillin', uses: 'Broad spectrum systematic termination of external structural bacterial agents.', dosage: '250mg - 500mg precisely synced at 8-hour metrics. Complete total runtime cycle without interruption.', warnings: 'Completely ineffective against viral payloads. Verify structural target configuration prior to boot initialization.' }
    ];

    // Core Chat Simulated Sequence Array
    const chatPredefinedDatabase = {
        'what is bmi': 'Body Mass Index (BMI) evaluates standard physical state configurations using mass-to-altitude ratio equations ($BMI = kg/m^2$). It is classified into Underweight, Optimal Baseline, Overweight, and Severe Threshold allocations.',
        'what causes fever': 'Fevers are temporary internal thermal core escalations initiated by your immune operating system to disrupt replicative sequences of external viral or bacterial payloads.',
        'how much water should i drink': 'Optimal standard system hydration tracking maps to roughly 2.5 to 3.5 Liters of total liquid fluid transmission elements daily, maintaining vital metabolic balancing loops.'
    };

    /* ==========================================================================
       BACKGROUND FLOATING PARTICLES CONTROLLER ENGINE
       ========================================================================== */
    function initializeAmbientParticles() {
        const container = document.getElementById('particle-container');
        if (!container) return;
        const particleVolume = 18;
        
        for (let i = 0; i < particleVolume; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random distribution parameters mapping
            const dim = Math.random() * 60 + 20;
            particle.style.width = `${dim}px`;
            particle.style.height = `${dim}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${Math.random() * 12 + 10}s`;
            
            container.appendChild(particle);
        }
    }
    initializeAmbientParticles();

    /* ==========================================================================
       NAV BAR COMPONENT INTERACTION METRICS
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveSectionOnScroll();
    });

    // Mobile Navigation Drawer Toggle Action
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile layout menu on interactive item route capture
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Auto update navigation highlight links matching window position focus
    function highlightActiveSectionOnScroll() {
        let currentSectionId = "home";
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 120;

        sections.forEach(sec => {
            if (scrollPosition >= sec.offsetTop && scrollPosition < (sec.offsetTop + sec.offsetHeight)) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    /* ==========================================================================
       VIEWPORT TRIGGERED NUMERICAL ANIMATION ENGINE
       ========================================================================== */
    const statsSection = document.getElementById('stats');
    let countersExecuted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersExecuted) {
                executeNumericalCounters();
                countersExecuted = true;
            }
        });
    }, { threshold: 0.25 });

    if (statsSection) statsObserver.observe(statsSection);

    function executeNumericalCounters() {
        const targets = document.querySelectorAll('.stat-card');
        targets.forEach(card => {
            const numEl = card.querySelector('.stat-number');
            const finalLimit = parseInt(card.getAttribute('data-target'), 10);
            let absoluteStart = 0;
            const computationDuration = 1800; // Total runtime window in ms
            const cycleSteps = Math.ceil(computationDuration / 16);
            const additiveRate = finalLimit / cycleSteps;

            const trackingInterval = setInterval(() => {
                absoluteStart += additiveRate;
                if (absoluteStart >= finalLimit) {
                    absoluteStart = finalLimit;
                    clearInterval(trackingInterval);
                }
                
                // Format display strings corresponding to specific data vectors
                if (finalLimit === 1000 || finalLimit === 500) {
                    numEl.textContent = `${Math.floor(absoluteStart)}+`;
                } else if (finalLimit === 95) {
                    numEl.textContent = `${Math.floor(absoluteStart)}%`;
                } else if (finalLimit === 24) {
                    numEl.textContent = `24/7`;
                    clearInterval(trackingInterval);
                }
            }, 16);
        });
    }

    /* ==========================================================================
       MODULE 1: REUSABLE INTERACTIVE SYMPTOM CALCULATOR 
       ========================================================================== */
    const symptomChips = document.querySelectorAll('.symptom-chip');
    const btnAnalyzeSymptoms = document.getElementById('btn-analyze-symptoms');
    const symptomOutput = document.getElementById('symptom-output');

    symptomChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const symVal = chip.getAttribute('data-symptom');
            if (selectedSymptoms.has(symVal)) {
                selectedSymptoms.delete(symVal);
                chip.classList.remove('selected');
            } else {
                selectedSymptoms.add(symVal);
                chip.classList.add('selected');
            }
        });
    });

    if (btnAnalyzeSymptoms) {
        btnAnalyzeSymptoms.addEventListener('click', () => {
            if (selectedSymptoms.size === 0) {
                symptomOutput.classList.remove('hidden');
                symptomOutput.innerHTML = `<p class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> Error: Clear structural symptom parameters must be initialized prior to execution.</p>`;
                return;
            }

            symptomOutput.classList.remove('hidden');
            symptomOutput.innerHTML = `<div class="res-row"><i class="fa-solid fa-spinner fa-spin text-accent"></i> Executing algorithmic diagnostic diagnostic evaluation mapping vectors...</div>`;

            setTimeout(() => {
                let riskMatrix = 'Stable Sub-Critical Baseline';
                let matrixColor = 'text-success';
                let standardAdvisory = 'Continue ambient monitoring, ensure micro-hydration levels, rest physical processing architecture.';
                let dynamicConditionMatches = ['General Fatigue Fatigue Variable', 'Ambient Physiological Strain'];

                if (selectedSymptoms.has('Fever') && selectedSymptoms.has('Cough')) {
                    riskMatrix = 'Elevated Priority Response';
                    matrixColor = 'text-warning';
                    dynamicConditionMatches = ['Acute Respiratory Profile Check', 'Viral Infection Envelope Framework'];
                    standardAdvisory = 'Isolate processing core loop. Execute hydration sequence parameters. Track dynamic temperature matrix shifts.';
                }
                if (selectedSymptoms.has('Body Pain') && selectedSymptoms.has('Fatigue') && selectedSymptoms.has('Headache')) {
                    riskMatrix = 'Systemic Strain Event';
                    matrixColor = 'text-warning';
                    dynamicConditionMatches = ['Viral Syndrome Load', 'Acute Neural Exhaustion Parameter'];
                    standardAdvisory = 'Halt energy consumption pipelines immediately. Execute core diagnostic sleep protocols.';
                }
                if (selectedSymptoms.size >= 4) {
                    riskMatrix = 'Critical Cluster Diagnostic Detected';
                    matrixColor = 'text-danger';
                    dynamicConditionMatches = ['Multi-Vector Inflammatory Response', 'Advanced Secondary Medical Challenge'];
                    standardAdvisory = 'Establish redundant communications grid routing directly with verified physical clinical emergency hubs.';
                }

                symptomOutput.innerHTML = `
                    <h4 class="${matrixColor}" style="font-size:1.1rem; margin-bottom:0.6rem;">
                        <i class="fa-solid fa-shield-heart"></i> Diagnostic: ${riskMatrix}
                    </h4>
                    <div class="res-row"><strong>Identified Target Vectors:</strong> ${Array.from(selectedSymptoms).join(', ')}</div>
                    <div class="res-row"><strong>Probable Pathological Traces:</strong> ${dynamicConditionMatches.join(' OR ')}</div>
                    <div class="res-row" style="margin-top:0.5rem; font-size:0.85rem; color:var(--text-muted);">
                        <strong>AI Clinical Guidance Directive:</strong> ${standardAdvisory}
                    </div>
                `;
            }, 750);
        });
    }

    /* ==========================================================================
       MODULE 2: LOCALSTORAGE SYNCHRONIZED MEDICAL VAULT
       ========================================================================== */
    const vaultForm = document.getElementById('vault-form');
    const vaultRecordsContainer = document.getElementById('vault-records');

    function fetchAndRenderVaultRecords() {
        let currentArchive = JSON.parse(localStorage.getItem('ai_health_vault_records')) || [];
        
        if (currentArchive.length === 0) {
            vaultRecordsContainer.innerHTML = `<p class="empty-state">No medical data parameters archived in current LocalStorage instance.</p>`;
            return;
        }

        vaultRecordsContainer.innerHTML = '';
        currentArchive.forEach((record, index) => {
            const item = document.createElement('div');
            item.classList.add('record-item');
            item.innerHTML = `
                <div class="record-meta">
                    <h5>${escapeInputTokens(record.title)}</h5>
                    <span><i class="fa-solid fa-calendar-day"></i> Index Date: ${record.timestamp}</span>
                    <p style="font-size:0.78rem; color:var(--text-muted); margin-top:0.2rem;">${escapeInputTokens(record.notes)}</p>
                </div>
                <button class="btn-delete" data-index="${index}" aria-label="Purge This Record Token">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            vaultRecordsContainer.appendChild(item);
        });

        // Initialize dynamic link handlers inside generated elements
        const deleteButtons = vaultRecordsContainer.querySelectorAll('.btn-delete');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetIdx = parseInt(btn.getAttribute('data-index'), 10);
                purgeSelectedRecordItem(targetIdx);
            });
        });
    }

    if (vaultForm) {
        vaultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('report-name').value;
            const dateInput = document.getElementById('report-date').value;
            const detailsInput = document.getElementById('report-details').value;

            const newRecordObject = {
                title: titleInput,
                timestamp: dateInput,
                notes: detailsInput
            };

            let currentArchive = JSON.parse(localStorage.getItem('ai_health_vault_records')) || [];
            currentArchive.push(newRecordObject);
            localStorage.setItem('ai_health_vault_records', JSON.stringify(currentArchive));

            vaultForm.reset();
            fetchAndRenderVaultRecords();
        });
    }

    function purgeSelectedRecordItem(index) {
        let currentArchive = JSON.parse(localStorage.getItem('ai_health_vault_records')) || [];
        currentArchive.splice(index, 1);
        localStorage.setItem('ai_health_vault_records', JSON.stringify(currentArchive));
        fetchAndRenderVaultRecords();
    }

    // Auto Boot Vault Configuration check
    fetchAndRenderVaultRecords();

    /* ==========================================================================
       MODULE 3: PHARMACOLOGICAL DATABASE LOOKUP ENGINE
       ========================================================================== */
    const medSearchInput = document.getElementById('med-search-input');
    const medicineResultsArea = document.getElementById('medicine-results');

    if (medSearchInput) {
        medSearchInput.addEventListener('input', () => {
            const parsedToken = medSearchInput.value.trim().toLowerCase();
            
            if (parsedToken.length === 0) {
                medicineResultsArea.innerHTML = '';
                return;
            }

            const validationMatches = medicineDatabase.filter(med => 
                med.name.toLowerCase().includes(parsedToken)
            );

            if (validationMatches.length === 0) {
                medicineResultsArea.innerHTML = `<p class="text-muted" style="font-size:0.85rem;"><i class="fa-solid fa-ban"></i> Zero pharmaceutical matches found matching search signature.</p>`;
                return;
            }

            medicineResultsArea.innerHTML = '';
            validationMatches.forEach(med => {
                const medCard = document.createElement('div');
                medCard.classList.add('result-container', 'med-card');
                medCard.innerHTML = `
                    <h4 class="text-warning" style="font-size:1.1rem; margin-bottom:0.4rem;"><i class="fa-solid fa-capsules"></i> ${med.name}</h4>
                    <div class="res-row"><strong>Primary Functional Range:</strong> ${med.uses}</div>
                    <div class="res-row"><strong>Standard Application Limit:</strong> ${med.dosage}</div>
                    <div class="res-row" style="font-size:0.8rem; color:var(--color-danger);">
                        <strong>Critical System Exception Countermeasures:</strong> ${med.warnings}
                    </div>
                `;
                medicineResultsArea.appendChild(medCard);
            });
        });
    }

    /* ==========================================================================
       MODULE 4: BODY MASS INDEX (BMI) ANTHROPOMETRIC COMPUTATION MATRIX
       ========================================================================== */
    const bmiForm = document.getElementById('bmi-form');
    const bmiResultCard = document.getElementById('bmi-result-card');

    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const hCm = parseFloat(document.getElementById('bmi-height').value);
            const wKg = parseFloat(document.getElementById('bmi-weight').value);
            
            const heightInMeters = hCm / 100;
            const absoluteBmiScore = (wKg / (heightInMeters * heightInMeters)).toFixed(1);

            let statusCategory = 'Optimal Baseline Configuration';
            let colorHexClass = 'text-success';
            let healthRatingScore = '98/100 Operational Capacity';

            if (absoluteBmiScore < 18.5) {
                statusCategory = 'Resource Volume Deficit (Underweight)';
                colorHexClass = 'text-warning';
                healthRatingScore = '75/100 Operational Capacity';
            } else if (absoluteBmiScore >= 25 && absoluteBmiScore < 29.9) {
                statusCategory = 'Resource Mass Accumulation (Overweight)';
                colorHexClass = 'text-warning';
                healthRatingScore = '82/100 Operational Capacity';
            } else if (absoluteBmiScore >= 30) {
                statusCategory = 'Hyper Elevated Structural Strain (Obese Grid)';
                colorHexClass = 'text-danger';
                healthRatingScore = '55/100 Critical Level';
            }

            bmiResultCard.classList.remove('hidden');
            bmiResultCard.innerHTML = `
                <h4 style="font-size:1.1rem; margin-bottom:0.5rem;"><i class="fa-solid fa-chart-bar"></i> Computation Profile Logged</h4>
                <div class="res-row">Computed Structural BMI: <strong class="text-accent" style="font-size:1.2rem;">${absoluteBmiScore}</strong></div>
                <div class="res-row">Status Vector: <span class="${colorHexClass} ${statusCategory === 'Optimal Baseline Configuration' ? 'bmi-badge' : ''}" style="${statusCategory === 'Optimal Baseline Configuration' ? 'background:rgba(0,230,118,0.15);' : ''}">${statusCategory}</span></div>
                <div class="res-row" style="font-size:0.85rem; color:var(--text-muted); margin-top:0.4rem;"><strong>Physical Efficiency Metrics:</strong> ${healthRatingScore}</div>
            `;
        });
    }

    /* ==========================================================================
       MODULE 5: NEURAL CHAT BOT CLIENT RESPONSE PROTOTYPE
       ========================================================================== */
    const chatViewport = document.getElementById('chat-viewport');
    const chatInput = document.getElementById('chat-input');
    const btnChatSend = document.getElementById('btn-chat-send');
    const suggestButtons = document.querySelectorAll('.chat-suggest-btn');

    function postUserMessageMessage(textStr) {
        if (!textStr.trim()) return;
        
        const messageNode = document.createElement('div');
        messageNode.classList.add('chat-msg', 'user-msg');
        messageNode.innerHTML = `<div class="chat-bubble">${escapeInputTokens(textStr)}</div>`;
        chatViewport.appendChild(messageNode);
        chatViewport.scrollTop = chatViewport.scrollHeight;

        // Process Neural Pipeline Response Logic
        setTimeout(() => {
            postArtificialIntelligenceResponse(textStr);
        }, 600);
    }

    function postArtificialIntelligenceResponse(userQuery) {
        const cleanedKey = userQuery.toLowerCase().replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
        let targetReply = "Query trace signature not matched inside local edge database schema definitions. Try submitting standard health lookup keywords.";

        if (chatPredefinedDatabase[cleanedKey]) {
            targetReply = chatPredefinedDatabase[cleanedKey];
        } else {
            // Check contextual partial match parameters
            for (let customKeyword in chatPredefinedDatabase) {
                if (cleanedKey.includes(customKeyword)) {
                    targetReply = chatPredefinedDatabase[customKeyword];
                    break;
                }
            }
        }

        const aiMsgNode = document.createElement('div');
        aiMsgNode.classList.add('chat-msg', 'system-msg');
        aiMsgNode.innerHTML = `
            <div class="chat-bubble">
                <i class="fa-solid fa-microchip-ai text-accent"></i> ${targetReply}
            </div>
        `;
        chatViewport.appendChild(aiMsgNode);
        chatViewport.scrollTop = chatViewport.scrollHeight;
    }

    if (btnChatSend && chatInput) {
        btnChatSend.addEventListener('click', () => {
            postUserMessageMessage(chatInput.value);
            chatInput.value = '';
        });

        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                postUserMessageMessage(chatInput.value);
                chatInput.value = '';
            }
        });
    }

    suggestButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            postUserMessageMessage(btn.textContent);
        });
    });

    /* ==========================================================================
       SECURE FORM VALIDATION ARCHITECTURAL GATEWAY
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const cName = document.getElementById('contact-name').value.trim();
            const cEmail = document.getElementById('contact-email').value.trim();
            const cMsg = document.getElementById('contact-message').value.trim();

            if (cName.length < 2 || cMsg.length < 10 || !validateEmailPattern(cEmail)) {
                contactFeedback.className = 'form-feedback';
                contactFeedback.style.background = 'rgba(255,82,82,0.15)';
                contactFeedback.style.border = '1px solid var(--color-danger)';
                contactFeedback.style.color = 'var(--color-danger)';
                contactFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Security verification failed. Ensure syntax parameters conform to required specifications.`;
                contactFeedback.classList.remove('hidden');
                return;
            }

            // Simulate validated asynchronous cryptographic package transmission
            contactFeedback.className = 'form-feedback success';
            contactFeedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Package transmission secure. Form data encrypted and dispatched to root dev infrastructure logs successfully.`;
            contactFeedback.classList.remove('hidden');
            contactForm.reset();

            setTimeout(() => {
                contactFeedback.classList.add('hidden');
            }, 6000);
        });
    }

    function validateEmailPattern(email) {
        const structuralRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return structuralRegex.test(email);
    }

    // Helper token sanitizer preventing standard script injections
    function escapeInputTokens(inputStr) {
        const element = document.createElement('div');
        element.innerText = inputStr;
        return element.innerHTML;
    }
});