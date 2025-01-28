//クライアントコード
//moreスライドイン
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    link: "#"
  },
  {
    title: "Creating...",
    description: "Please wait for information.",
    link: "https://example.com/weather"
  },
  {
    title: "Creating...",
    description: "Please wait for information.",
    link: "https://example.com/todo"
  }
];

const projectList = document.getElementById("project-list");
const loadProjectsButton = document.getElementById("make-projects");

// リストの表示状態を追跡するフラグ
let isListVisible = false;

loadProjectsButton.addEventListener("click", () => {
  if (isListVisible) {
    // リストが表示中の場合、非表示にする
    projectList.innerHTML = ""; // リストをクリア
    isListVisible = false;
    loadProjectsButton.textContent = "more"; // ボタンのテキストを変更
  } else {
    // リストが非表示の場合、表示する
    projects.forEach((project, index) => {
      // プロジェクト用のdivを作成
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");

      // プロジェクトタイトル
      const title = document.createElement("h3");
      title.textContent = project.title;

      // プロジェクト説明
      const description = document.createElement("p");
      description.textContent = project.description;

      // プロジェクトリンク
      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = "View Project";
      link.target = "_blank";

      // 要素をdivに追加
      projectDiv.appendChild(title);
      projectDiv.appendChild(description);
      projectDiv.appendChild(link);

      // divをリストに追加（非表示状態で）
      projectList.appendChild(projectDiv);

      // スライドインアニメーションを遅延で適用
      setTimeout(() => {
        projectDiv.classList.add("show");
      }, index * 200); // 各プロジェクトに200msの遅延を追加
    });

    isListVisible = true;
    loadProjectsButton.textContent = "×"; // ボタンのテキストを変更
  }
});

//スライダー
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSliderPosition() {
  const offset = -currentIndex * 100; // 各スライドの幅は100%
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 最後のスライドの場合、最初に戻る
  }
  updateSliderPosition();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // 最初のスライドの場合、最後に戻る
  }
  updateSliderPosition();
});

//↓お問い合わせフォーム
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  
    // リアルタイムの入力チェック
  nameInput.addEventListener("input", () => {
    console.log(`現在の入力値: ${nameInput.value}`); // 確認用
    if (nameInput.value.trim() === "") {
      console.log("エラー: 名前が空です");// 確認用
      nameError.textContent = "名前は必須項目です。";
      nameError.style.display = "block";
    } else {
      console.log("エラーなし");// 確認用
      nameError.textContent = "";
      nameError.style.display = "none";
    }
  });
  
  emailInput.addEventListener("input", () => {
    console.log(`現在の入力値: ${nameInput.value}`); // 確認用
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      console.log("エラー: 無効なメールアドレスです");// 確認用
      emailError.textContent = "正しいメールアドレスを入力してください。";
      emailError.style.display = "block";
    } else {
      console.log("エラーなし");// 確認用
      emailError.textContent = "";
      emailError.style.display = "none";
    }
  });
  
    // フォームの送信イベントを処理
  form.addEventListener("submit", (e) => {
    let valid = true;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "正しいメールアドレスを入力してください。";
      emailError.style.display = "block";
      valid = false;
    }
  
    if (!valid) {
      e.preventDefault(); // フォーム送信を停止
    }
  });
});
  