<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virtual Hack Simulator</title>
    <style>
        body {
            background-color: #000;
            color: #0f0;
            font-family: 'Courier New', monospace;
            padding: 20px;
            margin: 0;
            overflow-x: hidden;
        }
        #terminal {
            white-space: pre-wrap;
            line-height: 1.5;
        }
        .blink {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
        }
        #start-btn {
            background-color: #0f0;
            color: #000;
            border: none;
            padding: 10px 20px;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
        }
        #start-btn:hover {
            background-color: #0c0;
        }
        .warning {
            color: #ff0;
            margin-top: 30px;
            border-top: 1px solid #333;
            padding-top: 15px;
        }
    </style>
</head>
<body>
    <div id="terminal">
        === VIRTUAL HACK SIMULATOR ===
        This is a fake hacking simulation for educational purposes only.
        Real hacking without permission is illegal and unethical.
        
        <span class="blink">_</span>
    </div>
    
    <button id="start-btn">BEGIN SIMULATION</button>
    
    <div class="warning">
        WARNING: This is only a simulation. Unauthorized access to computer systems is illegal.
    </div>

    <script>
        const terminal = document.getElementById('terminal');
        const startBtn = document.getElementById('start-btn');
        
        function typeWriter(text, speed, callback) {
            let i = 0;
            terminal.innerHTML = terminal.innerHTML.replace('<span class="blink">_</span>', '');
            
            function typing() {
                if (i < text.length) {
                    terminal.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                } else {
                    terminal.innerHTML += '<br><span class="blink">_</span>';
                    if (callback) callback();
                }
            }
            
            typing();
        }
        
        function simulateHack() {
            startBtn.disabled = true;
            terminal.innerHTML = '';
            
            const steps = [
                { text: "Initializing virtual hacking simulation...", delay: 1000 },
                { text: "Bypassing firewall...", delay: 800 },
                { text: "Attempt 1: 25%", delay: 500 },
                { text: "Attempt 2: 63%", delay: 500 },
                { text: "Attempt 3: 89%", delay: 500 },
                { text: "Firewall bypassed!", delay: 1000 },
                { text: "Accessing mainframe...", delay: 1000 },
                { text: "Decrypting layer 1...", delay: 700 },
                { text: "Decrypting layer 2...", delay: 700 },
                { text: "Decrypting layer 3...", delay: 700 },
                { text: "Mainframe accessed!", delay: 1000 },
                { text: "Extracting data...", delay: 1000 }
            ];
            
            function processStep(index) {
                if (index < steps.length) {
                    typeWriter(steps[index].text, 30, () => {
                        setTimeout(() => {
                            processStep(index + 1);
                        }, steps[index].delay);
                    });
                } else {
                    simulateDataDownload();
                }
            }
            
            processStep(0);
        }
        
        function simulateDataDownload() {
            terminal.innerHTML = terminal.innerHTML.replace('<span class="blink">_</span>', '');
            
            for (let i = 0; i <= 100; i++) {
                setTimeout(() => {
                    terminal.innerHTML = terminal.innerHTML.replace(/Downloading data: \d+%/, '');
                    terminal.innerHTML += `Downloading data: ${i}%<br>`;
                    window.scrollTo(0, document.body.scrollHeight);
                    
                    if (i === 100) {
                        terminal.innerHTML += 'Data extraction complete!<br>';
                        setTimeout(() => {
                            typeWriter("Covering tracks...", 30, () => {
                                setTimeout(() => {
                                    terminal.innerHTML += '<br>=== HACK SIMULATION COMPLETE ===<br>';
                                    terminal.innerHTML += 'This was just a simulation for educational purposes.<br>';
                                    terminal.innerHTML += 'Unauthorized access to computer systems is illegal.<br>';
                                    terminal.innerHTML += '<span class="blink">_</span>';
                                    startBtn.disabled = false;
                                }, 2000);
                            });
                        }, 500);
                    }
                }, i * 50);
            }
        }
        
        startBtn.addEventListener('click', simulateHack);
    </script>
</body>
</html>
