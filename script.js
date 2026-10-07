// DÁN ĐƯỜNG DẪN WEB APP TỪ GOOGLE APPS SCRIPT VÀO ĐÂY:
const BACKEND_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

// 42 THUẬT NGỮ TỪ FILE EXCEL
const contestBank = [
  { id: 1, unit: "Unit 1", word: "DNA", ipa: "/ˌdiː en ˈeɪ/", def: "A molecule that carries the genetic instructions.", meaning: "Deoxyribonucleic acid. Một phân tử mang thông tin di truyền" },
  { id: 2, unit: "Unit 1", word: "Nucleotide", ipa: "/ˈnjuːkliətaɪd/", def: "The basic building block of nucleic acids (DNA and RNA).", meaning: "Đơn vị cấu tạo cơ bản của nucleic acid (DNA và RNA)." },
  { id: 3, unit: "Unit 1", word: "Protein", ipa: "/ˈproʊtiːn/", def: "Large, complex molecules made up of amino acid chains.", meaning: "Các phân tử lớn, phức tạp được tạo thành từ chuỗi các amino acid." },
  { id: 4, unit: "Unit 1", word: "Ori", ipa: "/ˈɔːraɪ/", def: "A particular sequence in a genome at which replication is initiated.", meaning: "Một trình tự DNA cụ thể, nơi quá trình sao chép DNA được bắt đầu." },
  { id: 5, unit: "Unit 1", word: "Enzyme", ipa: "/ˈenzaɪm/", def: "A type of protein that acts as a biological catalyst, speeding up chemical reactions in cells.", meaning: "Một loại protein hoạt động như chất xúc tác sinh học, giúp tăng tốc các phản ứng hóa học trong tế bào." },
  { id: 6, unit: "Unit 1", word: "RNA polymerase", ipa: "/ˌɑːr en ˌeɪ pəˈlɪməreɪs/", def: "An enzyme that synthesizes RNA from a DNA template.", meaning: "Một loại enzyme tổng hợp RNA từ một khuôn DNA." },
  { id: 7, unit: "Unit 1", word: "RNA", ipa: "/ˌɑːr en ˈeɪ/", def: "A product of the transcription process, it plays a role in transmitting genetic information from genes to proteins.", meaning: "Là sản phẩm của quá trình phiên mã, đóng vai trò truyền đạt thông tin di truyền từ gene tới protein." },
  { id: 8, unit: "Unit 1", word: "Okazaki", ipa: "/ˌoʊkəˈzɑːki/", def: "Short, newly synthesized DNA fragments that are formed on the lagging template strand during DNA replication.", meaning: "Những đoạn DNA ngắn mới được tổng hợp trên mạch khuôn gián đoạn trong quá trình sao chép DNA." },
  { id: 9, unit: "Unit 1", word: "Ligase", ipa: "/ˈlɪɡeɪs/", def: "An enzyme that joins Okazaki fragments together in DNA replication.", meaning: "Một loại enzyme nối các đoạn Okazaki lại với nhau trong sao chép DNA." },
  { id: 10, unit: "Unit 2", word: "Gene", ipa: "/dʒiːn/", def: "A segment of a DNA molecule that carries information specifying a product, which is a polypeptide chain or RNA.", meaning: "Một đoạn của phân tử DNA mang thông tin quy định sản phẩm là chuỗi polypeptide hoặc RNA." },
  { id: 11, unit: "Unit 2", word: "Polypeptide", ipa: "/ˌpɒliˈpeptaɪd/", def: "A long chain of amino acids linked by peptide bonds.", meaning: "Một chuỗi dài các amino acid được liên kết bởi các liên kết peptide." },
  { id: 12, unit: "Unit 2", word: "mRNA", ipa: "/ˌem ɑːr en ˈeɪ/", def: "A type of RNA that carries genetic information from DNA in the nucleus to the ribosome in the cytoplasm.", meaning: "Một loại RNA mang thông tin di truyền từ DNA trong nhân đến ribosome ở tế bào chất." },
  { id: 13, unit: "Unit 2", word: "Promoter", ipa: "/prəˈmoʊtər/", def: "A specific DNA sequence which acts as a binding site for RNA polymerase to initiate transcription.", meaning: "Một trình tự DNA là vị trí để enzyme RNA polymerase bám vào khởi đầu quá trình phiên mã." },
  { id: 14, unit: "Unit 2", word: "Amino acid", ipa: "/əˌmiːnoʊ ˈæsɪd/", def: "The building blocks of proteins.", meaning: "Đơn vị cấu tạo nên protein." },
  { id: 15, unit: "Unit 2", word: "Exon", ipa: "/ˈeksɒn/", def: "A coding segment of gene that is located within the coding region of a gene and remains in the mature mRNA.", meaning: "Đoạn được dịch mã nằm trong vùng mã hóa của gen, có mặt trong mRNA trưởng thành." },
  { id: 16, unit: "Unit 2", word: "Intron", ipa: "/ˈintrɒn/", def: "A non-coding segment of a gene that is removed from the pre-mRNA during RNA splicing.", meaning: "Đoạn không mã hóa của gen, bị loại bỏ khỏi tiền mRNA trong quá trình cắt nối RNA." },
  { id: 17, unit: "Unit 2", word: "rRNA", ipa: "/ˌɑːr ɑːr en ˈeɪ/", def: "A major component of ribosomes, which are the cellular machines responsible for protein synthesis.", meaning: "Một thành phần chính của ribosome, bộ máy tổng hợp protein trong tế bào." },
  { id: 18, unit: "Unit 2", word: "tRNA", ipa: "/ˌtiː ɑːr en ˈeɪ/", def: "An RNA molecule that carries a specific amino acid to the ribosome during protein synthesis.", meaning: "Một phân tử RNA mang một amino acid tương ứng đến ribosome trong quá trình tổng hợp protein." },
  { id: 19, unit: "Unit 2", word: "7-methyl guanine", ipa: "/ˌsevn ˈmeθɪl ˈɡwɑːniːn/", def: "A modified nucleotide that forms the 5' cap of a eukaryotic mRNA molecule.", meaning: "Một nucleotide biến đổi tạo thành mũ 5' của phân tử mRNA sinh vật nhân thực." },
  { id: 20, unit: "Unit 2", word: "Adenine", ipa: "/ˈædɪniːn/", def: "One of the four nitrogenous bases found in DNA and that pairs with thymine (T) in DNA and uracil (U) in RNA.", meaning: "Một trong bốn base nitrogenous có trong DNA, liên kết với thymine (T) trong DNA và uracil (U) trong RNA." },
  { id: 21, unit: "Unit 2", word: "Poly A", ipa: "/ˌpɒli ˈeɪ/", def: "A long chain of adenine nucleotides added to the 3' end of a eukaryotic mRNA molecule.", meaning: "Một chuỗi dài các nucleotide adenine được thêm vào đầu 3' của mRNA sinh vật nhân thực." },
  { id: 22, unit: "Unit 2", word: "Ribosome", ipa: "/ˈraɪbəsoʊm/", def: "A complex molecular machine that serves as the primary site of biological protein synthesis in all living cells.", meaning: "Một phức hợp phân tử là nơi chính diễn ra quá trình sinh tổng hợp protein sinh học." },
  { id: 23, unit: "Unit 2", word: "Anticodon", ipa: "/ˌæntiˈkoʊdɒn/", def: "A sequence of three nucleotides on a tRNA molecule that is complementary to a corresponding codon in mRNA.", meaning: "Một trình tự gồm ba nucleotide trên phân tử tRNA, bổ sung cho một codon tương ứng trong mRNA." },
  { id: 24, unit: "Unit 2", word: "Methionine", ipa: "/məˈθaɪəniːn/", def: "One of the 20 common amino acids, is the start codon for translation in eukaryotes.", meaning: "Một trong 20 amino acid phổ biến, là codon mở đầu cho dịch mã ở sinh vật nhân thực." },
  { id: 25, unit: "Unit 2", word: "Polyribosome", ipa: "/ˌpɒliraɪbəsoʊm/", def: "A cluster of ribosomes held together by a strand of mRNA that is being translated simultaneously.", meaning: "Một cụm ribosome được giữ lại với nhau bởi một chuỗi mRNA đang được dịch mã đồng thời." },
  { id: 26, unit: "Unit 3", word: "Operon", ipa: "/ˈɒpərɒn/", def: "A functioning unit of genomic DNA containing a cluster of genes under the control of a single promoter.", meaning: "Một đơn vị chức năng của DNA bộ gene, bao gồm một cụm gen dưới sự kiểm soát của một promoter." },
  { id: 27, unit: "Unit 3", word: "E.coli", ipa: "/ˌiː ˈkoʊlaɪ/", def: "A common bacterium found in the intestines of warm-blooded organisms.", meaning: "Một loại vi khuẩn phổ biến trong ruột của sinh vật máu nóng." },
  { id: 28, unit: "Unit 3", word: "Lactose", ipa: "/ˈlæktəʊs/", def: "A disaccharide sugar found in milk.", meaning: "Một loại đường đôi có trong sữa." },
  { id: 29, unit: "Unit 3", word: "Operator", ipa: "/ˈɒpəreɪtər/", def: "A specific DNA sequence within an operon where a repressor protein binds to inhibit transcription.", meaning: "Một trình tự DNA cụ thể trong operon, nơi protein ức chế liên kết để ngăn cản phiên mã." },
  { id: 30, unit: "Unit 3", word: "LacI", ipa: "/ˌlæk ˈaɪ/", def: "A gene that codes for the lac repressor protein.", meaning: "Một gene mã hóa protein ức chế Operon Lac." },
  { id: 31, unit: "Unit 3", word: "LacZ", ipa: "/ˌlæk ˈziː/", def: "The gene in the lac operon that codes for the enzyme β-galactosidase.", meaning: "Gene trong operon lac mã hóa enzyme β-galactosidase." },
  { id: 32, unit: "Unit 3", word: "LacY", ipa: "/ˌlæk ˈwaɪ/", def: "The gene in the lac operon that codes for the membrane protein β-galactoside permease.", meaning: "Gene trong operon lac mã hóa protein màng β-galactoside permease." },
  { id: 33, unit: "Unit 3", word: "LacA", ipa: "/ˌlæk ˈeɪ/", def: "The gene in the lac operon that codes for the enzyme transacetylase.", meaning: "Gene trong operon lac mã hóa enzyme transacetylase." },
  { id: 34, unit: "Unit 3", word: "Allolactose", ipa: "/ˌælloʊˈlæktəʊs/", def: "An isomer of lactose that acts as an inducer molecule in the lac operon.", meaning: "Một đồng phân của lactose hoạt động như một phân tử cảm ứng trong operon lac." },
  { id: 35, unit: "Unit 3", word: "Hormone", ipa: "/ˈhɔːrmoʊn/", def: "A signaling molecule produced by glands in multicellular organisms that regulates physiology and behavior.", meaning: "Một phân tử tín hiệu được sản xuất bởi các tuyến giúp điều hòa sinh lý và hành vi." },
  { id: 36, unit: "Unit 4", word: "Allele", ipa: "/əˈliːl/", def: "Different nucleotide sequences of the same gene that are on homologous chromosomes.", meaning: "Là các trình tự nucleotide khác nhau của cùng một gen trên nhiễm sắc thể tương đồng." },
  { id: 37, unit: "Unit 5", word: "Plasmid", ipa: "/ˈplæzmɪd/", def: "A small, circular, extrachromosomal DNA molecule found in bacteria.", meaning: "Một phân tử DNA nhỏ, dạng vòng, nằm ngoài nhiễm sắc thể ở vi khuẩn." },
  { id: 38, unit: "Unit 6", word: "Histone", ipa: "/ˈhɪstəʊn/", def: "Highly alkaline proteins found in eukaryotic cell nuclei that package and order DNA into nucleosomes.", meaning: "Protein có tính kiềm cao trong nhân tế bào giúp đóng gói và sắp xếp DNA thành nucleosome." },
  { id: 39, unit: "Unit 6", word: "Protease", ipa: "/ˈprəʊtieɪz/", def: "An enzyme that catalyzes the breakdown of proteins into smaller polypeptides or amino acids.", meaning: "Enzyme xúc tác quá trình thủy phân protein thành các polypeptide nhỏ hoặc amino acid." },
  { id: 40, unit: "Unit 7", word: "Nucleosome", ipa: "/ˈnjuːkliəsəʊm/", def: "The basic structural unit of eukaryotic chromatin, consisting of a segment of DNA wound around eight histone proteins.", meaning: "Đơn vị cấu trúc cơ bản của nhiễm sắc chất, gồm đoạn DNA quấn quanh 8 phân tử protein histone." },
  { id: 41, unit: "Unit 7", word: "Chromatid", ipa: "/ˈkrəʊmətɪd/", def: "One of two identical halves of a replicated chromosome joined by a centromere.", meaning: "Một trong hai nửa giống hệt nhau của một nhiễm sắc thể được nhân đôi, nối với nhau tại tâm động." },
  { id: 42, unit: "Unit 7", word: "Locus", ipa: "/ˈləʊkəs/", def: "The specific physical location of a gene or DNA sequence on a chromosome.", meaning: "Vị trí xác định của một gene hoặc trình tự DNA trên một nhiễm sắc thể." }
];

// Biến trạng thái
let studentInfo = { name: "", className: "" };
let testQuestions = [];
let currentIndex = 0;
let score = 0;
let isAnswered = false;
let totalTimeSeconds = 0;
let contestStartTime = null;
let contestTimerInterval = null;

// Biến cho đồng hồ đếm ngược từng câu
let questionSecondsLeft = 30;
let questionDuration = 30;
let questionTimerInterval = null;

// Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playBeep(freq, type, duration, delay = 0) {
  setTimeout(() => {
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
  }, delay);
}
function playCorrect() { playBeep(523.25, 'sine', 0.15, 0); playBeep(659.25, 'sine', 0.2, 90); }
function playWrong() { playBeep(220, 'triangle', 0.2, 0); playBeep(180, 'sawtooth', 0.25, 110); }

// Lấy lượt thí sinh
window.addEventListener("DOMContentLoaded", () => {
  if (BACKEND_URL && !BACKEND_URL.includes("YOUR_GOOGLE")) {
    fetch(BACKEND_URL)
      .then(r => r.json())
      .then(res => {
        document.getElementById("totalParticipantsCount").textContent = res.totalParticipants || 0;
      })
      .catch(() => {
        document.getElementById("totalParticipantsCount").textContent = "Sẵn sàng";
      });
  } else {
    document.getElementById("totalParticipantsCount").textContent = "128 lượt";
  }
});

// BẮT ĐẦU THI
function startContest() {
  const nameInput = document.getElementById("studentName").value.trim();
  const classInput = document.getElementById("studentClass").value.trim();
  if (!nameInput || !classInput) {
    alert("Vui lòng nhập đầy đủ Họ tên và Lớp để ghi danh!");
    return;
  }
  studentInfo.name = nameInput;
  studentInfo.className = classInput;

  generate30Questions();

  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  currentIndex = 0;
  score = 0;
  totalTimeSeconds = 0;
  contestStartTime = Date.now();
  contestTimerInterval = setInterval(() => {
    totalTimeSeconds = Math.floor((Date.now() - contestStartTime) / 1000);
  }, 1000);

  loadQuestion(currentIndex);
}

// SINH ĐỀ: CHỌN 30 TỪ VÀ CHIA 3 DẠNG
function generate30Questions() {
  // Xáo trộn toàn bộ 42 thuật ngữ
  let shuffled42 = [...contestBank].sort(() => 0.5 - Math.random());
  // Lấy 30 thuật ngữ
  let chosen30 = shuffled42.slice(0, 30);

  let p1Terms = chosen30.slice(0, 10);   // Câu 1 - 10: Sắp xếp chữ
  let p2Terms = chosen30.slice(10, 20);  // Câu 11 - 20: Điền khuyết
  let p3Terms = chosen30.slice(20, 30);  // Câu 21 - 30: Trắc nghiệm định nghĩa

  testQuestions = [];

  // Phần 1: 10 câu sắp xếp từ (30 giây)
  p1Terms.forEach(item => {
    const clean = item.word.replace(/\s+/g, '');
    let letters = clean.split('').sort(() => 0.5 - Math.random());
    if (letters.join('').toLowerCase() === clean.toLowerCase() && clean.length > 2) {
      letters = clean.split('').reverse();
    }
    testQuestions.push({
      part: "Phần 1: Sắp xếp chữ cái",
      type: "scramble",
      term: item.word,
      ipa: item.ipa,
      def: item.def,
      meaning: item.meaning,
      letters: letters,
      timeLimit: 30
    });
  });

  // Phần 2: 10 câu điền khuyết (4 Dễ, 3 Trung bình, 3 Khó)
  p2Terms.forEach((item, idx) => {
    const word = item.word;
    const clean = word.replace(/\s+/g, '');
    let subType = "";
    let timeLimit = 25;
    let hideIndices = [];

    if (idx < 2) {
      // 2 câu Dễ - Dropdown chọn (20 giây)
      subType = "fill_dropdown";
      timeLimit = 20;
      const hideIdx = Math.floor(Math.random() * clean.length);
      const correctChar = clean[hideIdx].toUpperCase();
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".replace(correctChar, '').split('');
      alphabet.sort(() => 0.5 - Math.random());
      const choices = [correctChar, ...alphabet.slice(0, 3)].sort(() => 0.5 - Math.random());
      
      testQuestions.push({
        part: "Phần 2: Điền khuyết (Mức Dễ)",
        type: "fill_dropdown",
        term: word,
        ipa: item.ipa,
        def: item.def,
        meaning: item.meaning,
        hideIdx: hideIdx,
        correctChar: correctChar,
        choices: choices,
        timeLimit: timeLimit
      });
      return;
    } else if (idx < 4) {
      // 2 câu Dễ - Tự gõ 1 chữ (20 giây)
      subType = "fill_text_easy";
      timeLimit = 20;
      let valid = [];
      for (let i = 0; i < word.length; i++) if (word[i] !== ' ') valid.push(i);
      valid.sort(() => 0.5 - Math.random());
      hideIndices = [valid[0]];
    } else if (idx < 7) {
      // 3 câu Trung bình - Khuyết 2 chữ (25 giây)
      subType = "fill_text_med";
      timeLimit = 25;
      let valid = [];
      for (let i = 0; i < word.length; i++) if (word[i] !== ' ') valid.push(i);
      valid.sort(() => 0.5 - Math.random());
      hideIndices = valid.slice(0, Math.min(2, valid.length - 1));
    } else {
      // 3 câu Khó - Khuyết 3 chữ (30 giây)
      subType = "fill_text_hard";
      timeLimit = 30;
      let valid = [];
      for (let i = 0; i < word.length; i++) if (word[i] !== ' ') valid.push(i);
      valid.sort(() => 0.5 - Math.random());
      let count = (clean.length >= 7) ? 3 : 2;
      hideIndices = valid.slice(0, count);
    }

    testQuestions.push({
      part: "Phần 2: Điền khuyết (" + (timeLimit === 20 ? "Mức Dễ" : (timeLimit === 25 ? "Mức Vừa" : "Mức Khó")) + ")",
      type: "fill_text",
      term: word,
      ipa: item.ipa,
      def: item.def,
      meaning: item.meaning,
      hiddenSet: new Set(hideIndices),
      timeLimit: timeLimit
    });
  });

  // Phần 3: 10 câu trắc nghiệm khái niệm (25 giây)
  p3Terms.forEach(item => {
    let others = contestBank.filter(x => x.word !== item.word).map(x => x.word);
    others.sort(() => 0.5 - Math.random());
    let choices = [item.word, ...others.slice(0, 3)].sort(() => 0.5 - Math.random());
    testQuestions.push({
      part: "Phần 3: Trắc nghiệm khái niệm",
      type: "quiz",
      term: item.word,
      ipa: item.ipa,
      def: item.def,
      meaning: item.meaning,
      choices: choices,
      timeLimit: 25
    });
  });
}

// HIỂN THỊ CÂU HỎI VÀ ĐẾM NGƯỢC
function loadQuestion(idx) {
  isAnswered = false;
  clearInterval(questionTimerInterval);

  const q = testQuestions[idx];
  document.getElementById("partNameBadge").textContent = q.part;
  document.getElementById("questionProgress").textContent = `${idx + 1} / 30`;

  const area = document.getElementById("questionArea");
  const fb = document.getElementById("actionFeedback");
  const btn = document.getElementById("actionBtn");

  fb.textContent = "";
  fb.className = "feedback-msg";
  btn.textContent = "Trả lời";
  btn.className = "btn btn-primary";

  // Khởi động đồng hồ đếm ngược từng câu
  questionDuration = q.timeLimit;
  questionSecondsLeft = q.timeLimit;
  updateTimerUI();

  questionTimerInterval = setInterval(() => {
    questionSecondsLeft--;
    updateTimerUI();
    if (questionSecondsLeft <= 0) {
      clearInterval(questionTimerInterval);
      handleTimeout();
    }
  }, 1000);

  let html = `<div class="instruction-box">
                <div><strong>Định nghĩa:</strong> "${q.def}"</div>
                <span class="ipa-text">🔊 Phiên âm IPA: ${q.ipa}</span>
              </div>`;

  if (q.type === "scramble") {
    html += `<p>Sắp xếp các chữ cái sau thành thuật ngữ đúng:</p>
             <div class="letters-box">` +
             q.letters.map(c => `<span class="letter-badge">${c.toUpperCase()}</span>`).join('') +
             `</div>
             <div class="answer-row">
               <input type="text" id="ansScramble" placeholder="Nhập thuật ngữ..." autocomplete="off">
             </div>`;
  }
  else if (q.type === "fill_dropdown") {
    html += `<p>Chọn chữ cái còn thiếu từ thanh thả xuống:</p><div class="letters-box">`;
    const clean = q.term.replace(/\s+/g, '');
    for (let i = 0; i < clean.length; i++) {
      if (i === q.hideIdx) {
        html += `<span class="char-slot">
                   <select id="ansDropdown" class="char-select">
                     <option value="">?</option>
                     ${q.choices.map(c => `<option value="${c}">${c}</option>`).join('')}
                   </select>
                 </span>`;
      } else {
        html += `<span class="char-slot char-fixed">${clean[i].toUpperCase()}</span>`;
      }
    }
    html += `</div>`;
  }
  else if (q.type === "fill_text") {
    html += `<p>Điền chữ cái còn thiếu vào ô trống:</p><div class="letters-box">`;
    for (let i = 0; i < q.term.length; i++) {
      if (q.term[i] === ' ') {
        html += `<span style="width: 14px;"></span>`;
      } else if (q.hiddenSet.has(i)) {
        html += `<span class="char-slot"><input type="text" maxlength="1" class="char-input" data-idx="${i}"></span>`;
      } else {
        html += `<span class="char-slot char-fixed">${q.term[i].toUpperCase()}</span>`;
      }
    }
    html += `</div>`;
  }
  else if (q.type === "quiz") {
    html += `<p>Chọn thuật ngữ chính xác tương ứng với định nghĩa:</p><div class="options-grid">`;
    q.choices.forEach(opt => {
      html += `<button type="button" class="opt-btn" onclick="selectQuizOption(this, '${opt}')">${opt}</button>`;
    });
    html += `</div>`;
  }

  area.innerHTML = html;

  // Tự động focus ô nhập
  if (q.type === "scramble") {
    setTimeout(() => { const el = document.getElementById("ansScramble"); if (el) el.focus(); }, 100);
  } else if (q.type === "fill_text") {
    const inputs = document.querySelectorAll(".char-input");
    if (inputs.length > 0) inputs[0].focus();
    inputs.forEach((inp, i) => {
      inp.addEventListener("input", () => {
        if (inp.value && i < inputs.length - 1) inputs[i + 1].focus();
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !inp.value && i > 0) inputs[i - 1].focus();
      });
    });
  }
}

function updateTimerUI() {
  const timerText = document.getElementById("timerText");
  const timerBar = document.getElementById("timerBar");
  timerText.textContent = `${questionSecondsLeft}s`;
  const pct = Math.max(0, (questionSecondsLeft / questionDuration) * 100);
  timerBar.style.width = pct + "%";

  if (questionSecondsLeft <= 5) {
    timerBar.style.backgroundColor = "#dc2626";
    timerText.style.color = "#dc2626";
  } else if (questionSecondsLeft <= 10) {
    timerBar.style.backgroundColor = "#f59e0b";
    timerText.style.color = "#d97706";
  } else {
    timerBar.style.backgroundColor = "#16a34a";
    timerText.style.color = "#16a34a";
  }
}

// XỬ LÝ HẾT GIỜ (TIMEOUT)
function handleTimeout() {
  if (isAnswered) return;
  isAnswered = true;
  playWrong();

  const q = testQuestions[currentIndex];
  const fb = document.getElementById("actionFeedback");
  const btn = document.getElementById("actionBtn");

  fb.textContent = `⏰ HẾT THỜI GIAN! Đáp án đúng: ${q.term}`;
  fb.className = "feedback-msg wrong";

  // Khóa tương tác
  disableInputs();

  btn.textContent = "Câu tiếp theo ▶";
  btn.className = "btn btn-next-action";
}

function disableInputs() {
  const sInput = document.getElementById("ansScramble");
  if (sInput) sInput.disabled = true;
  const dInput = document.getElementById("ansDropdown");
  if (dInput) dInput.disabled = true;
  document.querySelectorAll(".char-input").forEach(i => i.disabled = true);
  document.querySelectorAll(".opt-btn").forEach(b => b.disabled = true);
}

// KIỂM TRA TRẢ LỜI & CHUYỂN CÂU
function handleCurrentAction() {
  if (!isAnswered) {
    verifyAnswer();
  } else {
    currentIndex++;
    if (currentIndex < testQuestions.length) {
      loadQuestion(currentIndex);
    } else {
      finishContest();
    }
  }
}

function verifyAnswer() {
  const q = testQuestions[currentIndex];
  const fb = document.getElementById("actionFeedback");
  const btn = document.getElementById("actionBtn");
  let isCorrect = false;

  if (q.type === "scramble") {
    const val = (document.getElementById("ansScramble").value || "").trim().toLowerCase().replace(/\s+/g, '');
    isCorrect = (val === q.term.toLowerCase().replace(/\s+/g, ''));
  }
  else if (q.type === "fill_dropdown") {
    const val = (document.getElementById("ansDropdown").value || "").toUpperCase();
    if (!val) {
      fb.textContent = "Vui lòng chọn 1 chữ cái!";
      return;
    }
    isCorrect = (val === q.correctChar);
  }
  else if (q.type === "fill_text") {
    let allRight = true;
    let anyFilled = false;
    document.querySelectorAll(".char-input").forEach(inp => {
      if (inp.value) anyFilled = true;
      const charIdx = Number(inp.getAttribute("data-idx"));
      if ((inp.value || "").toUpperCase() !== q.term[charIdx].toUpperCase()) {
        allRight = false;
      }
    });
    if (!anyFilled) {
      fb.textContent = "Vui lòng điền chữ cái!";
      return;
    }
    isCorrect = allRight;
  }
  else if (q.type === "quiz") {
    if (!window.selectedQuizValue) {
      fb.textContent = "Vui lòng chọn 1 phương án!";
      return;
    }
    isCorrect = (window.selectedQuizValue === q.term);
  }

  clearInterval(questionTimerInterval);
  isAnswered = true;
  disableInputs();

  if (isCorrect) {
    score++;
    playCorrect();
    fb.textContent = "🎉 CHÍNH XÁC!";
    fb.className = "feedback-msg correct";
  } else {
    playWrong();
    fb.textContent = `❌ Chưa đúng! Đáp án chính xác: ${q.term}`;
    fb.className = "feedback-msg wrong";
  }

  btn.textContent = "Câu tiếp theo ▶";
  btn.className = "btn btn-next-action";
}

function selectQuizOption(btn, val) {
  if (isAnswered) return;
  document.querySelectorAll(".opt-btn").forEach(b => b.style.borderColor = "#cbd5e1");
  btn.style.borderColor = "#16a34a";
  window.selectedQuizValue = val;
}

// NỘP BÀI THI & XẾP HẠNG
function finishContest() {
  clearInterval(contestTimerInterval);
  clearInterval(questionTimerInterval);

  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";

  document.getElementById("resName").textContent = studentInfo.name;
  document.getElementById("resClass").textContent = studentInfo.className;
  document.getElementById("resScore").textContent = score;
  document.getElementById("resTotal").textContent = testQuestions.length;

  const m = String(Math.floor(totalTimeSeconds / 60)).padStart(2, '0');
  const s = String(totalTimeSeconds % 60).padStart(2, '0');
  document.getElementById("resTime").textContent = `${m} phút ${s} giây`;

  if (BACKEND_URL && !BACKEND_URL.includes("YOUR_GOOGLE")) {
    document.getElementById("resRank").textContent = "Đang đồng bộ điểm số...";
    fetch(BACKEND_URL, {
      method: "POST",
      body: JSON.stringify({
        fullName: studentInfo.name,
        className: studentInfo.className,
        score: score,
        totalQuestions: testQuestions.length,
        timeSeconds: totalTimeSeconds
      })
    })
    .then(r => r.json())
    .then(data => {
      document.getElementById("resRank").textContent = data.rank || "...";
      renderLeaderboard(data.top10);
    })
    .catch(() => {
      document.getElementById("resRank").textContent = "Đã lưu offline";
    });
  } else {
    document.getElementById("resRank").textContent = "1 (Thử nghiệm)";
    renderLeaderboard([
      { name: studentInfo.name, className: studentInfo.className, score: score, time: totalTimeSeconds }
    ]);
  }
}

function renderLeaderboard(top10) {
  const tbody = document.getElementById("leaderboardBody");
  if (!top10 || top10.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">Chưa có dữ liệu xếp hạng.</td></tr>`;
    return;
  }

  tbody.innerHTML = top10.map((item, idx) => {
    const medal = idx === 0 ? "🥇 1" : idx === 1 ? "🥈 2" : idx === 2 ? "🥉 3" : idx + 1;
    const m = String(Math.floor(item.time / 60)).padStart(2, '0');
    const s = String(item.time % 60).padStart(2, '0');
    return `<tr>
      <td>${medal}</td>
      <td>${item.name}</td>
      <td>${item.className}</td>
      <td><strong>${item.score} / 30</strong></td>
      <td>${m}:${s}</td>
    </tr>`;
  }).join('');
}

// Bắt phím Enter
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (document.getElementById("quizScreen").style.display !== "none") {
      handleCurrentAction();
    }
  }
});
