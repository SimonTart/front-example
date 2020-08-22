const node = document.querySelector('#container');
const statusNode = document.querySelector('#status');

node.addEventListener('click', () => console.log('click'));

const ob = new MutationObserver((mutations) => {
  console.log('mutations', mutations);
});

function observe() {
  ob.observe(node, {
    attributeFilter: ['data-name'], // 要监听的特定属性数组
    attributeOldValue: true, // 记录旧值
    attributes: true, // 监听属性
    characterData: true, // 监听字符变化
    characterDataOldValue: true, // 记录旧值
    childList: true, // 字节点的新增删除
    subtree: true, // 监听范围扩展为节点树中所有的节点
  });
  statusNode.innerHTML = '监听中';
}

observe();

function disconnect() {
  statusNode.innerHTML = '未监听';
  ob.disconnect();
}

function takeRecords() {
  node.innerHTML = `随机设置内容，让takeRecords有获取的内容`;
  console.log('takeRecords', ob.takeRecords());
}

function asyncCallback() {
  node.innerHTML = `随机设置内容，触发事件`;

  let sum = 0;
  node.click();
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }

  console.log('compute end');
}

function setAttr() {
  node.setAttribute('data-name', prompt('设置属性', 'test'));
}
