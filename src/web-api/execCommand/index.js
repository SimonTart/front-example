const commands = [
  {
    name: 'backColor',
    text: '设置背景色',
    promptText: '请输入颜色值',
  },
  {
    name: 'bold',
    text: '设置/取消 加粗',
  },
  {
    name: 'ClearAuthenticationCache',
    text: '清除权限认证',
  },
  {
    name: 'contentReadOnly',
    text: '设置/取消 内容可编辑状态',
  },
  {
    name: 'copy',
    text: '复制',
  },
  {
    name: 'createLink',
    text: '创建连接',
    promptText: '请输入连接',
  },
  {
    name: 'cut',
    text: '剪切',
  },
  {
    name: 'decreaseFontSize',
    text: '减小字号',
  },
  {
    name: 'defaultParagraphSeparator',
    text: '设置新段落分隔符',
    promptText: '请输入分隔符标签名',
  },
  {
    name: 'delete',
    text: '删除',
  },
  {
    name: 'enableAbsolutePositionEditor',
    text: '支持拖动',
  },
  {
    name: 'enableInlineTableEditing',
    text: '支持编辑表格的行和列',
  },
  {
    name: 'enableObjectResizing',
    text: '支持调整大小',
  },
  {
    name: 'fontName',
    text: '设置字体名字',
    promptText: '请输入字体名字',
  },
  {
    name: 'fontSize',
    text: '设置字体大小',
    promptText: '请输入字体大小(1 ~ 7)',
  },
  {
    name: 'foreColor',
    text: '设置字体颜色',
    promptText: '请输入字体颜色',
  },
];

function init() {
  const buttonList = commands.map((command) => {
    const button = document.createElement('button');
    const { name, text, promptText } = command;
    let btnText = name + (text ? `(${text})` : '');
    if (!document.queryCommandSupported(name)) {
      button.setAttribute('disabled', true);
      btnText += `- 你的浏览器不支持`;
    }
    button.innerText = btnText;

    button.addEventListener('click', () => {
      const success = document.execCommand(name, false, promptText ? window.prompt(promptText) : undefined);
      console.log(`${name} command exec ${success ? 'success' : 'fail'}`);
    });

    return button;
  });

  buttonList.forEach((node) => document.querySelector('.commands').appendChild(node));
}

init();
