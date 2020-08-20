const node = document.querySelector('#container')

function observer(mutations) {
  console.log('mutations',mutations)
}

const ob = new MutationObserver(observer);

ob.observe(node, { 
  attributeFilter: ['data-name'], // 要监听的特定属性数组
  attributeOldValue: true, // 记录旧值
  attributes: true, // 监听属性
  characterData: true, // 监听字符变化
  characterDataOldValue: true, // 记录旧值
  childList: true, // 字节点的新增删除
  subtree: true, // 监听范围扩展为节点树中所有的节点
})


// ob.disconnect();

// ob.takeRecords();


node.addEventListener('click', () => console.log('node click'));

node.innerHTML = '1111';

let sum = 0;
node.click();
for (let i = 0; i < 100000000; i++) {
  sum += i;
}
console.log('compute end')