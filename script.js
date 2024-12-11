// Ana Sayfa
document.getElementById("homeBtn").addEventListener("click", function() {
    showContent("homeContent");
});

// Kayıt Ol
document.getElementById("registerBtn").addEventListener("click", function() {
    showContent("registerContent");
});

// Veri Girişi
document.getElementById("dataEntryBtn").addEventListener("click", function() {
    showContent("dataEntryContent");
});

// Veri Görüntüle
document.getElementById("viewDataBtn").addEventListener("click", function() {
    showContent("studentDataContent");
    displayStudentData();
});

// Nedir?
document.getElementById("aboutBtn").addEventListener("click", function() {
    showContent("aboutContent");
});

// Bize Ulaşın
document.getElementById("contactBtn").addEventListener("click", function() {
    showContent("contactContent");
});

// Sayfa içeriğini değiştirme
function showContent(contentId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(contentId).classList.remove('hidden');
}

// Kayıt Formu
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Öğrenci Kaydı Başarıyla Yapıldı!");
    showContent("homeContent");
});

// Veri Girişi Formu
document.getElementById("waste-entry-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let wasteType = document.getElementById("wasteType").value;
    let wasteAmount = document.getElementById("wasteAmount").value;

    let points = calculatePoints(wasteType, wasteAmount);

    let studentData = {
        wasteType: wasteType,
        wasteAmount: wasteAmount,
        points: points
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));

    alert("Veri başarıyla kaydedildi!");
    showContent("studentDataContent");
    displayStudentData();
});

// Atık Puan Hesaplama
function calculatePoints(wasteType, wasteAmount) {
    let points = 0;

    switch (wasteType) {
        case "plastik":
            points = wasteAmount * 5;
            break;
        case "kağıt":
            points = wasteAmount * 4;
            break;
        case "cam":
            points = wasteAmount * 6;
            break;
        case "metal":
            points = wasteAmount * 7;
            break;
        case "elektronik":
            points = wasteAmount * 10;
            break;
        case "yağ":
            points = wasteAmount * 3;
            break;
        case "tekstil":
            points = wasteAmount * 2;
            break;
        case "pil":
            points = wasteAmount * 8;
            break;
        default:
            points = 0;
    }

    return points;
}

// Öğrenci Verilerini Görüntüleme
function displayStudentData() {
    const studentData = JSON.parse(localStorage.getItem("studentData"));

    if (studentData) {
        document.getElementById("totalWaste").textContent = `Toplam Atık: ${studentData.wasteAmount} kg`;
        document.getElementById("totalPoints").textContent = `Toplam Puan: ${studentData.points}`;
        document.getElementById("wasteTypes").textContent = `Atık Türü: ${studentData.wasteType}`;
    }
}

// Ana Sayfaya Dön
document.getElementById("backBtn").addEventListener("click", function() {
    showContent("homeContent");
});
