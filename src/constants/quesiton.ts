export const questions = [
  {
    id: 1,
    title: "JavaScript: 字串反轉",
    description: `問題: function reverseString(str) {}`,
    expect: `
      console.log(reverseString("Hello")); // 預期輸出: "olleH”`
  },
  {
    id: 2,
    title: "JavaScript: 陣列過濾",
    description: `問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。`,
    expect: `
      const numbers = [2, 8, 4, 10, 1, 7];
      console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]`,
  },
  {
    id:3,
    title: "JavaScript: 重構",
    description: `問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}`,
  },
  { 
    id:4,
    title: "React: 條件渲染",
    description: `問題：在React中，如何根據條件渲染兩種不同的內容？`,
  },
  {
    id:5,
    title: "JavaScript: 字串反轉",
    description: `問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。`,
  },
]

