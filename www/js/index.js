document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    initializeApp();
}

// Fallback for browser testing
if (typeof cordova === 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeApp);
}

function initializeApp() {
    // Initialize form event listeners
    setupEventListeners();
    
    // Initialize marks calculation
    setupMarksCalculation();
}

function setupEventListeners() {
    const generateBtn = document.getElementById('generateBtn');
    const printBtn = document.getElementById('printBtn');
    
    generateBtn.addEventListener('click', generateMarksheet);
    printBtn.addEventListener('click', printMarksheet);
}

function setupMarksCalculation() {
    const subjects = ['hindi', 'english', 'math', 'science', 'social'];
    
    subjects.forEach(subject => {
        const halfInput = document.getElementById(subject + '_half');
        const annualInput = document.getElementById(subject + '_annual');
        
        halfInput.addEventListener('input', () => calculateTotal(subject));
        annualInput.addEventListener('input', () => calculateTotal(subject));
    });
}

function calculateTotal(subject) {
    const halfMarks = parseInt(document.getElementById(subject + '_half').value) || 0;
    const annualMarks = parseInt(document.getElementById(subject + '_annual').value) || 0;
    const total = halfMarks + annualMarks;
    
    document.getElementById(subject + '_total').textContent = total;
}

function validateForm() {
    const requiredFields = [
        'studentName', 'fatherName', 'motherName', 
        'birthDate', 'rollNumber', 'class'
    ];
    
    for (let field of requiredFields) {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            alert('कृपया सभी आवश्यक फील्ड भरें');
            element.focus();
            return false;
        }
    }
    
    return true;
}

function generateMarksheet() {
    if (!validateForm()) {
        return;
    }
    
    const formData = collectFormData();
    const marksheetHTML = createMarksheetHTML(formData);
    
    const outputDiv = document.getElementById('marksheetOutput');
    outputDiv.innerHTML = marksheetHTML;
    outputDiv.style.display = 'block';
    
    document.getElementById('printBtn').style.display = 'inline-block';
    
    // Scroll to marksheet
    outputDiv.scrollIntoView({ behavior: 'smooth' });
}

function collectFormData() {
    const subjects = ['hindi', 'english', 'math', 'science', 'social'];
    const subjectNames = ['हिंदी', 'अंग्रेजी', 'गणित', 'विज्ञान', 'सामाजिक विज्ञान'];
    
    const data = {
        studentName: document.getElementById('studentName').value,
        fatherName: document.getElementById('fatherName').value,
        motherName: document.getElementById('motherName').value,
        birthDate: document.getElementById('birthDate').value,
        rollNumber: document.getElementById('rollNumber').value,
        class: document.getElementById('class').value,
        subjects: []
    };
    
    let grandTotal = 0;
    
    subjects.forEach((subject, index) => {
        const halfMarks = parseInt(document.getElementById(subject + '_half').value) || 0;
        const annualMarks = parseInt(document.getElementById(subject + '_annual').value) || 0;
        const total = halfMarks + annualMarks;
        
        data.subjects.push({
            name: subjectNames[index],
            halfMarks: halfMarks,
            annualMarks: annualMarks,
            total: total
        });
        
        grandTotal += total;
    });
    
    data.grandTotal = grandTotal;
    data.percentage = ((grandTotal / 1000) * 100).toFixed(2);
    data.grade = calculateGrade(data.percentage);
    
    return data;
}

function calculateGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    if (percentage >= 33) return 'D';
    return 'F';
}

function createMarksheetHTML(data) {
    const currentDate = new Date().toLocaleDateString('hi-IN');
    
    return `
        <div class="marksheet-header">
            <h2>मार्कशीट</h2>
            <p>शैक्षणिक सत्र 2024-25</p>
        </div>
        
        <div class="student-info">
            <div class="info-item">
                <span><strong>छात्र का नाम:</strong></span>
                <span>${data.studentName}</span>
            </div>
            <div class="info-item">
                <span><strong>पिता का नाम:</strong></span>
                <span>${data.fatherName}</span>
            </div>
            <div class="info-item">
                <span><strong>माता का नाम:</strong></span>
                <span>${data.motherName}</span>
            </div>
            <div class="info-item">
                <span><strong>जन्म तिथि:</strong></span>
                <span>${formatDate(data.birthDate)}</span>
            </div>
            <div class="info-item">
                <span><strong>रोल नंबर:</strong></span>
                <span>${data.rollNumber}</span>
            </div>
            <div class="info-item">
                <span><strong>कक्षा:</strong></span>
                <span>${data.class}</span>
            </div>
        </div>
        
        <div class="marks-summary">
            <table>
                <thead>
                    <tr>
                        <th>विषय</th>
                        <th>अर्धवार्षिक परीक्षा</th>
                        <th>वार्षिक परीक्षा</th>
                        <th>कुल अंक</th>
                        <th>पूर्णांक</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.subjects.map(subject => `
                        <tr>
                            <td>${subject.name}</td>
                            <td>${subject.halfMarks}</td>
                            <td>${subject.annualMarks}</td>
                            <td>${subject.total}</td>
                            <td>200</td>
                        </tr>
                    `).join('')}
                    <tr class="total-row">
                        <td><strong>कुल योग</strong></td>
                        <td><strong>${data.subjects.reduce((sum, s) => sum + s.halfMarks, 0)}</strong></td>
                        <td><strong>${data.subjects.reduce((sum, s) => sum + s.annualMarks, 0)}</strong></td>
                        <td><strong>${data.grandTotal}</strong></td>
                        <td><strong>1000</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="result-summary" style="margin-top: 30px; text-align: center;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-bottom: 20px;">
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <strong>कुल अंक:</strong><br>
                    <span style="font-size: 24px; color: #667eea;">${data.grandTotal}/1000</span>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <strong>प्रतिशत:</strong><br>
                    <span style="font-size: 24px; color: #667eea;">${data.percentage}%</span>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <strong>ग्रेड:</strong><br>
                    <span style="font-size: 24px; color: #667eea;">${data.grade}</span>
                </div>
            </div>
            <p style="margin-top: 30px; font-style: italic;">
                जारी करने की तिथि: ${currentDate}
            </p>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('hi-IN');
}

function printMarksheet() {
    const printContent = document.getElementById('marksheetOutput').innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            ${printContent}
        </div>
    `;
    
    window.print();
    
    document.body.innerHTML = originalContent;
    initializeApp(); // Reinitialize after restoring content
}

