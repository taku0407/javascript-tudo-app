import "./styles.css";

/**
 * TODOを追加する
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    const deleteTargetChild = completeButton.parentNode;
    deleteFromIncompleteList(deleteTargetChild.parentNode);

    // 完了リストに追加する要素
    const addTargetChild = completeButton.parentNode;
    const addTargetParent = addTargetChild.parentNode;

    // TODO内容テキストを取得
    const text = addTargetChild.firstElementChild.innerText;

    // div以下を初期化
    addTargetChild.textContent = null;

    // liタグ生成
    const li = document.createElement("li");

    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTargetChild = backButton.parentNode;
      document
        .getElementById("complete-list")
        .removeChild(deleteTargetChild.parentNode);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素を設定
    addTargetParent.appendChild(div);
    addTargetChild.appendChild(p);
    addTargetChild.appendChild(backButton);

    // 完了TODOリストに追加
    document
      .getElementById("complete-list")
      .appendChild(addTargetChild.parentNode);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTargetChild = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTargetChild.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了TODOリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
