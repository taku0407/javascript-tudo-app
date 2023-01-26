import "./styles.css";

/**
 * TODOを追加する
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    const deleteTargetChild = completeButton.parentNode;
    deleteFromIncompleteList(deleteTargetChild.parentNode);

    // liタグ生成
    const li = document.createElement("li");
    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";
    // pタグ生成
    const p = document.createElement("p");
    p.innerText = inputText;
    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {});

    // liタグの子要素に各要素を設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了TODOリストに追加
    document.getElementById("complete-list").appendChild(li);
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

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
